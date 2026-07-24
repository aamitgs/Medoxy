"use client";

import { ChevronDown, Send } from "lucide-react";
import { useState } from "react";
import { divisions, products } from "@/data/site";

const inquiryTypes = ["Product Documents Request", "Distributor Inquiry", "Healthcare Provider Inquiry", "Trade Partnership Inquiry", "Career Inquiry"];

export function InquiryForm({ productName, divisionName, premium = false }: { productName?: string; divisionName?: string; premium?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    setStatus(response.ok ? "success" : "error");
    setMessage(result.message);
    if (response.ok) event.currentTarget.reset();
  }

  const inputClass = premium
    ? "h-14 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium text-[#071b35] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-medoxy-primary focus:bg-white focus:ring-4 focus:ring-medoxy-primary/10"
    : "h-12 w-full rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary";

  const fields = (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Full name *</span>}
          <input required name="fullName" placeholder={premium ? "Your name" : "Full Name"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Organization *</span>}
          <input required name="organization" placeholder={premium ? "Company or institution" : "Organization"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Business email *</span>}
          <input required name="email" type="email" placeholder={premium ? "name@company.com" : "Email Address"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone number *</span>}
          <input required name="phone" type="tel" placeholder={premium ? "+91 00000 00000" : "Phone Number"} className={inputClass} />
        </label>
        <label className="grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Country</span>}
          <input name="country" placeholder="Country" defaultValue="India" className={inputClass} />
        </label>
        <label className="relative grid gap-2">
          {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Inquiry type *</span>}
          <select required name="inquiryType" className={`${inputClass} appearance-none pr-10`}>
            {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
          {premium && <ChevronDown size={17} className="pointer-events-none absolute bottom-[19px] right-4 text-slate-400" />}
        </label>
      </div>
      <label className="relative grid gap-2">
        {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Product interest</span>}
        <select name="productInterest" defaultValue={productName || divisionName || ""} className={`${inputClass} appearance-none pr-10`}>
          <option value="">Select a product or division</option>
          {productName ? <option>{productName}</option> : null}
          {divisionName ? <option>{divisionName}</option> : null}
          {divisions.map((division) => <option key={division.slug}>{division.name}</option>)}
          {products.map((product) => <option key={product.slug}>{product.name}</option>)}
        </select>
        {premium && <ChevronDown size={17} className="pointer-events-none absolute bottom-[19px] right-4 text-slate-400" />}
      </label>
      <label className="grid gap-2">
        {premium && <span className="text-xs font-bold uppercase tracking-wider text-slate-500">How can we help? *</span>}
        <textarea required name="message" placeholder={premium ? "Tell us about your requirements, market, or product interest..." : "Message"} rows={5} className={`${inputClass} h-auto min-h-36 resize-y py-4 leading-6`} />
      </label>
      <input name="recaptchaToken" aria-label="Security verification token" placeholder="reCAPTCHA token placeholder for production integration" className={premium ? "sr-only" : inputClass} />
      <button disabled={status === "loading"} className={`inline-flex h-14 items-center justify-center gap-2 rounded-xl px-6 font-black text-white shadow-lg transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60 ${premium ? "bg-[#071b35] shadow-[#071b35]/20 hover:bg-medoxy-primary" : "h-12 bg-medoxy-secondary hover:bg-red-600"}`}>
        <Send size={18} />
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {premium && <p className="text-center text-xs leading-5 text-slate-400">By submitting this form, you agree to be contacted regarding your inquiry.</p>}
      {message ? <p className={status === "success" ? "font-semibold text-green-700" : "font-semibold text-medoxy-secondary"}>{message}</p> : null}
    </>
  );

  return (
    <form onSubmit={onSubmit} className={premium ? "grid gap-5" : "grid gap-4 card p-6"}>
      {fields}
    </form>
  );
}
