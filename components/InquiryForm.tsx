"use client";

import { ChevronDown, Send } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { divisions, products } from "@/data/site";

const inquiryTypes = ["Product Documents Request", "Distributor Inquiry", "Healthcare Provider Inquiry", "Trade Partnership Inquiry", "Career Inquiry"];

export function InquiryForm({
  productName,
  divisionName,
  initialInquiryType,
  premium = false,
}: {
  productName?: string;
  divisionName?: string;
  initialInquiryType?: (typeof inquiryTypes)[number];
  premium?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const honeypotId = useId();
  const careerMode = initialInquiryType === "Career Inquiry";
  const interestOptions = Array.from(new Set([
    ...(productName ? [productName] : []),
    ...(divisionName ? [divisionName] : []),
    ...divisions.map((division) => division.name),
    ...products.map((product) => product.name),
  ]));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (String(payload.website ?? "").trim()) {
      setStatus("success");
      setMessage("Thank you. Your inquiry has been received.");
      form.reset();
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({})) as { message?: string };
      const nextStatus = response.ok ? "success" : "error";
      setStatus(nextStatus);
      setMessage(result.message ?? (response.ok ? "Thank you. Your inquiry has been received." : "We could not send your inquiry. Please try again."));
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
      setMessage("We could not send your inquiry. Check your connection and try again.");
    }
  }

  const inputClass = premium
    ? "h-14 w-full rounded-xl border border-slate-300 bg-[#f8fafc] px-4 text-sm font-medium text-[#071b35] outline-none transition placeholder:text-slate-500 hover:border-slate-400 focus:border-medoxy-primary focus:bg-white focus:ring-4 focus:ring-medoxy-primary/10"
    : "h-12 w-full rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary";
  const labelClass = premium
    ? "text-xs font-bold uppercase tracking-wider text-slate-600"
    : "sr-only";

  const fields = (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Full name *</span>
          <input required name="fullName" autoComplete="name" placeholder={premium ? "Your name" : "Full Name"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Organization *</span>
          <input required name="organization" autoComplete="organization" placeholder={premium ? "Company or institution" : "Organization"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Business email *</span>
          <input required name="email" type="email" autoComplete="email" inputMode="email" placeholder={premium ? "name@company.com" : "Email Address"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Phone number *</span>
          <input required name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={premium ? "+91 00000 00000" : "Phone Number"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Country</span>
          <input name="country" autoComplete="country-name" placeholder="Country" defaultValue="India" className={inputClass} />
        </label>
        <label className="relative grid gap-2">
          <span className={labelClass}>Inquiry type *</span>
          <select required name="inquiryType" defaultValue={initialInquiryType ?? inquiryTypes[0]} className={`${inputClass} appearance-none pr-10`}>
            {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
          {premium && <ChevronDown size={17} className="pointer-events-none absolute bottom-[19px] right-4 text-slate-500" />}
        </label>
      </div>
      {careerMode ? (
        <label className="grid gap-2">
          <span className={labelClass}>Role or function of interest</span>
          <input name="productInterest" autoComplete="organization-title" placeholder="Role or function of interest" className={inputClass} />
        </label>
      ) : (
        <label className="relative grid gap-2">
          <span className={labelClass}>Product interest</span>
          <select name="productInterest" defaultValue={productName || divisionName || ""} className={`${inputClass} appearance-none pr-10`}>
            <option value="">Select a product or division</option>
            {interestOptions.map((interest) => <option key={interest}>{interest}</option>)}
          </select>
          {premium && <ChevronDown size={17} className="pointer-events-none absolute bottom-[19px] right-4 text-slate-500" />}
        </label>
      )}
      <label className="grid gap-2">
        <span className={labelClass}>How can we help? *</span>
        <textarea required name="message" placeholder={careerMode ? "Share your relevant experience, location, and the type of opportunity you are seeking..." : premium ? "Tell us about your requirements, market, or product interest..." : "Message"} rows={5} className={`${inputClass} h-auto min-h-36 resize-y py-4 leading-6`} />
      </label>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={honeypotId}>Leave this field blank</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input required name="privacyConsent" type="checkbox" value="true" className="mt-1 h-4 w-4 shrink-0 rounded border-slate-400 text-medoxy-primary accent-medoxy-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary" />
        <span>I agree to the <Link href="/privacy" className="font-bold text-medoxy-primary underline decoration-medoxy-primary/40 underline-offset-2 hover:decoration-medoxy-primary">Privacy Policy</Link> and consent to being contacted about this inquiry. *</span>
      </label>
      <button type="submit" disabled={status === "loading"} aria-busy={status === "loading"} className={`inline-flex h-14 items-center justify-center gap-2 rounded-xl px-6 font-black text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary disabled:translate-y-0 disabled:opacity-60 ${premium ? "bg-[#071b35] shadow-[#071b35]/20 hover:bg-medoxy-primary" : "h-12 bg-medoxy-secondary hover:bg-red-700"}`}>
        <Send size={18} aria-hidden="true" />
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {message ? <p className={status === "success" ? "font-semibold text-green-700" : "font-semibold text-red-700"}>{message}</p> : null}
      </div>
    </>
  );

  return (
    <form onSubmit={onSubmit} className={premium ? "grid gap-5" : "grid gap-4 card p-6"}>
      {fields}
    </form>
  );
}
