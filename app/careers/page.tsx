import type { Metadata } from "next";
import { BriefcaseBusiness, HeartHandshake, Send, Users } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore careers, benefits, company culture, and application inquiries at Medoxy Healthcare.",
};

export default function CareersPage() {
  return (
    <section className="section-pad">
      <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader eyebrow="Careers" title="Build a healthcare career with a quality-focused pharmaceutical brand." text="Medoxy welcomes applications from sales, operations, product, quality, and healthcare business professionals." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [BriefcaseBusiness, "Open Positions", "Sales, distribution coordination, product support, and operations roles."],
              [HeartHandshake, "Benefits", "Growth-focused work, healthcare exposure, and partner-facing experience."],
              [Users, "Culture", "Professional, responsive, quality-aware, and team-oriented."],
            ].map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-6">
                <Icon className="mb-4 text-medoxy-primary" />
                <h2 className="font-black text-medoxy-text">{String(title)}</h2>
                <p className="mt-2 text-sm leading-6 text-medoxy-muted">{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Application Form" title="Send your profile" />
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
