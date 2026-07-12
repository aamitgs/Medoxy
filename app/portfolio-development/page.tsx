import type { Metadata } from "next";
import { FlaskConical, Lightbulb, Microscope, Route } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Portfolio Development",
  description: "Medoxy portfolio planning, product selection, category research, and future healthcare trading initiatives.",
};

export default function PortfolioDevelopmentPage() {
  const items = [
    [Lightbulb, "Portfolio Planning", "Product selection guided by therapeutic relevance, market need, and healthcare usability."],
    [FlaskConical, "Product Information", "Composition review, dosage form mapping, packaging review, and information readiness."],
    [Microscope, "Category Research", "Clinical category research, competitive mapping, and quality documentation review."],
    [Route, "Future Initiatives", "Expansion across gastroenterology products, institutional demand, and partner-led access channels."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Portfolio Development" title="Healthcare product planning for a focused pharmaceutical trading portfolio." />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <HealthcareVisual title="Portfolio planning and product information" subtitle="Trade Development" variant="trade" className="min-h-[520px]" />
          <div className="grid gap-5">
            {items.map(([Icon, title, text]) => (
              <article key={String(title)} className="card p-6">
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
