"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { divisions, products } from "@/data/site";

const inquiryTypes = ["Product Inquiry", "Distributor Inquiry", "Healthcare Provider Inquiry", "Partnership Inquiry", "Career Inquiry"];

export function InquiryForm({ productName, divisionName }: { productName?: string; divisionName?: string }) {
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

  return (
    <form onSubmit={onSubmit} className="grid gap-4 card p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="fullName" placeholder="Full Name" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary" />
        <input required name="organization" placeholder="Organization" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary" />
        <input required name="email" type="email" placeholder="Email Address" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary" />
        <input required name="phone" placeholder="Phone Number" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary" />
        <input name="country" placeholder="Country" defaultValue="India" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary" />
        <select required name="inquiryType" className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary">
          {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
        </select>
      </div>
      <select name="productInterest" defaultValue={productName || divisionName || ""} className="h-12 rounded-lg border border-medoxy-border px-4 outline-none focus:border-medoxy-primary">
        <option value="">Product Interest</option>
        {productName ? <option>{productName}</option> : null}
        {divisionName ? <option>{divisionName}</option> : null}
        {divisions.map((division) => <option key={division.slug}>{division.name}</option>)}
        {products.map((product) => <option key={product.slug}>{product.name}</option>)}
      </select>
      <textarea required name="message" placeholder="Message" rows={5} className="rounded-lg border border-medoxy-border px-4 py-3 outline-none focus:border-medoxy-primary" />
      <input name="recaptchaToken" placeholder="reCAPTCHA token placeholder for production integration" className="h-12 rounded-lg border border-medoxy-border px-4 text-sm outline-none focus:border-medoxy-primary" />
      <button disabled={status === "loading"} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-medoxy-secondary px-5 font-black text-white transition hover:bg-red-600 disabled:opacity-60">
        <Send size={18} />
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {message ? <p className={status === "success" ? "font-semibold text-green-700" : "font-semibold text-medoxy-secondary"}>{message}</p> : null}
    </form>
  );
}
