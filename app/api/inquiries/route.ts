import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(2).max(120),
  organization: z.string().min(2).max(160),
  email: z.string().email(),
  phone: z.string().min(7).max(30),
  country: z.string().max(80).optional(),
  inquiryType: z.string().min(2).max(80),
  productInterest: z.string().max(160).optional(),
  message: z.string().min(10).max(2000),
  recaptchaToken: z.string().optional(),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const record = rateLimit.get(ip);

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
    return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
  }

  if (process.env.RECAPTCHA_SECRET_KEY && !parsed.data.recaptchaToken) {
    return NextResponse.json({ message: "reCAPTCHA verification is required." }, { status: 400 });
  }

  console.info("Medoxy inquiry received", {
    inquiryType: parsed.data.inquiryType,
    productInterest: parsed.data.productInterest,
    email: parsed.data.email,
  });

  return NextResponse.json({
    message: "Thank you. Medoxy Healthcare has received your inquiry and will respond soon.",
  });
}
