import type { Metadata } from "next";
import { FlaskConical, Handshake, ShieldCheck, TestTube2 } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Trade & Quality",
  description: "Pharmaceutical trade quality, sourcing coordination, vendor documentation, and compliance support across Medoxy’s healthcare product portfolio.",
};

export default function TradeQualityPage() {
  const cards = [
    [Handshake, "Partner Coordination", "Coordinated sourcing and quality-first vendor expectations for distribution-ready products."],
    [ShieldCheck, "Vendor Documentation", "Documented supply-chain flow, vendor discipline, product documents, and consistent packaging practices."],
    [TestTube2, "Product Traceability", "Batch-level information, product records, and documentation support for qualified trade partners."],
    [FlaskConical, "Quality-Aware Sourcing", "Product category checks aligned with partner expectations and applicable compliance requirements."],
  ];

  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader eyebrow="Trade & Quality" title="Pharmaceutical trade quality for dependable healthcare distribution." text="Medoxy focuses on sourcing coordination, vendor documentation, product traceability, and distribution-ready support for healthcare partners." />
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map(([Icon, title, text]) => (
              <article key={String(title)} className="card p-6">
                <Icon className="mb-5 text-medoxy-primary" size={30} />
                <h2 className="text-xl font-black text-medoxy-text">{String(title)}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{String(text)}</p>
              </article>
            ))}
          </div>
          <HealthcareVisual title="Pharmaceutical trade quality control" subtitle="Compliance Standards" variant="quality" className="min-h-[520px]" />
        </div>
      </div>
    </section>
  );
}
