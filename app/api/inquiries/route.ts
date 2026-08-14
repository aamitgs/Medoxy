import { NextResponse } from "next/server";
import { z } from "zod";

const inquiryTypes = [
  "Product Documents Request",
  "Distributor Inquiry",
  "Healthcare Provider Inquiry",
  "Trade Partnership Inquiry",
  "Career Inquiry",
] as const;

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  country: z.string().trim().max(80).optional(),
  inquiryType: z.enum(inquiryTypes),
  productInterest: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10).max(2000),
  privacyConsent: z.enum(["on", "true"]),
  website: z.string().max(200).optional(),
});

type Inquiry = z.infer<typeof inquirySchema>;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const DELIVERY_TIMEOUT_MS = 10_000;

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function plainText(inquiry: Inquiry) {
  return [
    `Name: ${inquiry.fullName}`,
    `Organization: ${inquiry.organization}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Country: ${inquiry.country || "Not provided"}`,
    `Inquiry type: ${inquiry.inquiryType}`,
    `Product or role interest: ${inquiry.productInterest || "Not specified"}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
}

function htmlBody(inquiry: Inquiry) {
  const rows = [
    ["Name", inquiry.fullName],
    ["Organization", inquiry.organization],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Country", inquiry.country || "Not provided"],
    ["Inquiry type", inquiry.inquiryType],
    ["Product or role interest", inquiry.productInterest || "Not specified"],
  ];

  return `
    <h1>New Medoxy website inquiry</h1>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><th align="left" style="border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</th><td style="border-bottom:1px solid #e2e8f0">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <h2>Message</h2>
    <p style="white-space:pre-wrap">${escapeHtml(inquiry.message)}</p>
  `;
}

async function sendToWebhook(inquiry: Inquiry) {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return false;

  const token = process.env.INQUIRY_WEBHOOK_TOKEN;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({
      source: "medoxyhealthcare.com",
      submittedAt: new Date().toISOString(),
      inquiry: {
        fullName: inquiry.fullName,
        organization: inquiry.organization,
        email: inquiry.email,
        phone: inquiry.phone,
        country: inquiry.country || null,
        inquiryType: inquiry.inquiryType,
        productInterest: inquiry.productInterest || null,
        message: inquiry.message,
      },
    }),
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Inquiry webhook returned ${response.status}`);
  }

  return true;
}

async function sendWithResend(inquiry: Inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) return false;

  const productSuffix = inquiry.productInterest
    ? ` — ${inquiry.productInterest.replace(/[\r\n]+/g, " ")}`
    : "";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `Medoxy ${inquiry.inquiryType}${productSuffix}`.slice(0, 180),
      text: plainText(inquiry),
      html: htmlBody(inquiry),
    }),
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Resend returned ${response.status}`);
  }

  return true;
}

async function deliverInquiry(inquiry: Inquiry) {
  if (await sendToWebhook(inquiry)) return true;
  return sendWithResend(inquiry);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (rateLimit.size > 1_000) {
    for (const [key, value] of rateLimit) {
      if (value.resetAt <= now) rateLimit.delete(key);
    }
  }

  if (record && record.resetAt > now && record.count >= 5) {
    return NextResponse.json({ message: "Too many inquiries. Please try again shortly." }, { status: 429 });
  }

  rateLimit.set(ip, {
    count: record && record.resetAt > now ? record.count + 1 : 1,
    resetAt: now + 10 * 60 * 1000,
  });

  const body = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the form fields and consent box, then try again." }, { status: 400 });
  }

  // Bots commonly fill this visually hidden field. Return a generic success
  // without delivering the submission so the trap is not disclosed.
  if (parsed.data.website) {
    return NextResponse.json({ message: "Thank you. Your inquiry has been received." });
  }

  try {
    const delivered = await deliverInquiry(parsed.data);
    if (!delivered) {
      return NextResponse.json(
        { message: "Online inquiries are temporarily unavailable. Please email or call Medoxy directly." },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "Thank you. Medoxy Healthcare has received your inquiry.",
    });
  } catch (error) {
    console.error("Medoxy inquiry delivery failed", error instanceof Error ? error.message : "Unknown delivery error");
    return NextResponse.json(
      { message: "We could not deliver your inquiry. Please email or call Medoxy directly." },
      { status: 502 },
    );
  }
}
