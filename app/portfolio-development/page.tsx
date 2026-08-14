import type { Metadata } from "next";
import { FlaskConical, Lightbulb, Microscope, Route } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pharmaceutical Portfolio Development",
  description: "How Medoxy evaluates catalogue fit, product information, category context, and partner demand before considering portfolio additions.",
  path: "/portfolio-development",
});

export default function PortfolioDevelopmentPage() {
  const items = [
    [Lightbulb, "Catalogue fit", "Define the intended business audience, therapeutic category, destination market, and unmet information need."],
    [FlaskConical, "Product information", "Check the proposed composition listing, dosage form, pack configuration, and available controlled records."],
    [Microscope, "Category context", "Review market context, catalogue overlap, partner questions, and applicable product-information boundaries."],
    [Route, "Decision gate", "Record unresolved classification, evidence, supply, and market questions before any public listing or trade discussion."],
  ];

  return (
    <section className="section-pad section-health">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Portfolio Development" title="A documented path from portfolio idea to qualified review." text="This page explains a planning approach, not a claim that any future product is approved, available, or scheduled for launch." />
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
