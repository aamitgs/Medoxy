import type { Metadata } from "next";
import { FlaskConical, Lightbulb, Microscope, Route } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Medoxy innovation, product development, research capabilities, and future healthcare initiatives.",
};

export default function ResearchDevelopmentPage() {
  const items = [
    [Lightbulb, "Innovation", "Portfolio planning guided by therapeutic relevance, market need, and healthcare usability."],
    [FlaskConical, "Product Development", "Composition selection, dosage planning, packaging review, and information readiness."],
    [Microscope, "Research Capabilities", "Clinical category research, competitive mapping, and quality documentation review."],
    [Route, "Future Initiatives", "Expansion across gastroenterology products, institutional products, and partner-led access channels."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Research & Development" title="Healthcare innovation with disciplined product development." />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <HealthcareVisual title="Research and development lab" subtitle="Product Development" variant="lab" className="min-h-[520px]" />
          <div className="grid gap-5">
            {items.map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-6">
                <Icon className="mb-4 text-medoxy-primary" />
                <h2 className="text-xl font-black text-medoxy-text">{String(title)}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
