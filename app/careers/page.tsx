import type { Metadata } from "next";
import { BriefcaseBusiness, HeartHandshake, Send, Users } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore careers, benefits, company culture, and application inquiries at Medoxy Healthcare's pharmaceutical trading business.",
};

export default function CareersPage() {
  return (
    <section className="section-pad section-clinical">
      <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader eyebrow="Careers" title="Build a healthcare career with a trading-focused pharmaceutical company." text="Medoxy welcomes applications from sales, trade operations, product coordination, quality documentation, and healthcare business professionals." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [BriefcaseBusiness, "Open Positions", "Sales, distribution coordination, product support, and trade operations roles."],
              [HeartHandshake, "Benefits", "Growth-focused work, healthcare exposure, and partner-facing trade experience."],
              [Users, "Culture", "Professional, responsive, quality-aware, and partner-oriented."],
            ].map(([Icon, title, text]) => (
              <article key={String(title)} className="card p-6">
                <Icon className="mb-4 text-medoxy-primary" />
                <h2 className="font-black text-medoxy-text">{String(title)}</h2>
                <p className="mt-2 text-sm leading-6 text-medoxy-muted">{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Application Form" title="Send your profile" />
          <div className="rounded-[28px] border border-white bg-white p-7 shadow-[0_20px_60px_rgba(7,27,53,0.08)]">
            <InquiryForm premium />
          </div>
        </div>
      </div>
    </section>
  );
}
