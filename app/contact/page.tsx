import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Medoxy Healthcare",
  description: "Contact Medoxy for product-document, distributor, healthcare organization, and pharmaceutical trade partnership inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-[#f5f7fb]">
      <section className="relative bg-[#071b35] pb-32 pt-20 text-white md:pb-40 md:pt-28">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-medoxy-primary/20 blur-3xl" />
        <div className="container-grid relative">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-[#55d6a9]" />
              Contact Medoxy Healthcare
            </div>
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Let&apos;s create meaningful
              <span className="block text-[#79a8ff]">healthcare partnerships.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need product documentation, distribution support, or a trade partnership, our team is ready to help you move forward with clarity.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-200">
              <span className="flex items-center gap-2"><Clock3 size={17} className="text-[#79a8ff]" /> Direct business inquiry route</span>
              <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-[#55d6a9]" /> Consent-based contact form</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 pb-24 md:-mt-24 md:pb-32">
        <div className="container-grid">
          <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="grid gap-5">
              <div className="rounded-[28px] border border-white/60 bg-white p-7 shadow-[0_24px_70px_rgba(7,27,53,0.12)] md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-medoxy-primary">Direct contact</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#071b35]">Speak with our team</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">Choose the channel that works best for your inquiry.</p>
                <div className="mt-7 divide-y divide-slate-100">
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-4 py-5 first:pt-0">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-medoxy-primary"><Mail size={21} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">Email us</span>
                      <span className="mt-1 block truncate font-bold text-[#071b35]">{site.email}</span>
                    </span>
                    <ArrowUpRight size={19} className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-medoxy-primary" />
                  </a>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 py-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-medoxy-secondary"><Phone size={21} /></span>
                    <span className="flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">Call us</span>
                      <span className="mt-1 block font-bold text-[#071b35]">{site.phone}</span>
                    </span>
                    <ArrowUpRight size={19} className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-medoxy-secondary" />
                  </a>
                </div>
                <div className="mt-1 rounded-2xl bg-[#f6f8fc] p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-medoxy-primary" />
                    <div>
                      <p className="font-extrabold text-[#071b35]">{site.name}</p>
                      <p className="mt-2 text-sm leading-6 text-medoxy-muted">{site.address.join(", ")}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Follow Medoxy</span>
                  <SocialLinks tone="dark" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_18px_55px_rgba(7,27,53,0.08)]">
                <iframe
                  title="Medoxy Healthcare Gurgaon map"
                  src="https://www.google.com/maps?q=Bhondsi%20Gurgaon%20Haryana%20122102%20India&output=embed"
                  className="h-72 w-full rounded-[22px] border-0 grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div>
                    <p className="text-sm font-extrabold text-[#071b35]">Gurgaon, Haryana</p>
                    <p className="mt-1 text-xs text-slate-500">Listed business address</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bhondsi+Gurgaon+Haryana+122102+India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-medoxy-primary"
                  >
                    Get directions <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_24px_70px_rgba(7,27,53,0.12)] sm:p-8 lg:p-10">
              <div className="mb-8 border-b border-slate-100 pb-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-medoxy-secondary">Start a conversation</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#071b35] md:text-4xl">Tell us how we can help.</h2>
                <p className="mt-3 max-w-xl leading-7 text-medoxy-muted">Share a few details and the right member of our team will respond directly.</p>
              </div>
              <InquiryForm premium prefillDivisionFromQuery />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
