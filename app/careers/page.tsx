import type { Metadata } from "next";
import { BriefcaseBusiness, HeartHandshake, Users } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers & Expressions of Interest",
  description: "Send a career expression of interest for pharmaceutical sales, trade operations, product coordination, or documentation work at Medoxy.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <section className="section-pad section-clinical">
      <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader as="h1" eyebrow="Careers" title="Register your interest in working with Medoxy Healthcare." text="Medoxy accepts career expressions of interest from professionals in sales, trade operations, product coordination, documentation, and healthcare business functions." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [BriefcaseBusiness, "Expressions of interest", "Tell us which function, location, and level of experience you would like Medoxy to consider."],
              [HeartHandshake, "Role-specific discussion", "Responsibilities, location, compensation, and benefits are confirmed only for a documented vacancy."],
              [Users, "Application privacy", "Submit only information relevant to your application and review the website privacy policy before sending it."],
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
          <SectionHeader eyebrow="Application Form" title="Send a career inquiry" text="Submitting this form does not indicate that a vacancy exists or guarantee an interview or response." />
          <div className="rounded-[28px] border border-white bg-white p-7 shadow-[0_20px_60px_rgba(7,27,53,0.08)]">
            <InquiryForm premium initialInquiryType="Career Inquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}
