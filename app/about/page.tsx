import type { Metadata } from "next";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company overview, mission, vision, leadership, infrastructure, and quality commitment for Medoxy Healthcare Pvt Ltd.",
};

export default function AboutPage() {
  const sections = [
    ["Company Overview", "Medoxy Healthcare Pvt Ltd is a healthcare and pharmaceutical solutions company focused on credible product presentation, quality-led sourcing, and inquiry-driven partner development."],
    ["History", "The brand is built around practical healthcare categories, disciplined product information, and responsive support for providers, distributors, and institutions."],
    ["Mission & Vision", "Our mission is dependable healthcare access through transparent product information. Our vision is to become a trusted pharmaceutical partner known for quality and professionalism."],
    ["Leadership", "Medoxy’s leadership approach emphasizes ethical healthcare marketing, product reliability, and long-term partner relationships."],
    ["Infrastructure", "The company supports gastroenterology product discovery through manufacturing coordination, quality documentation, and digital inquiry workflows."],
    ["Quality Commitment", "Every product category is positioned around quality assurance, compliance awareness, and clear healthcare communication."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="About Us" title="A modern healthcare brand built for trust, clarity, and qualified business inquiries." />
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <HealthcareVisual title="Infrastructure and quality systems" subtitle="Medoxy Healthcare" variant="facility" className="min-h-[520px]" />
          <div className="grid gap-5">
            {sections.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-medoxy-border bg-white p-6">
                <h2 className="text-xl font-black text-medoxy-text">{title}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <HealthcareVisual title="Pharmaceutical research culture" subtitle="Scientific Expertise" variant="lab" className="mt-10 min-h-[360px]" />
      </div>
    </section>
  );
}
