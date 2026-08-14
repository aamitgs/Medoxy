import type { Metadata } from "next";
import { FlaskConical, Handshake, ShieldCheck, TestTube2 } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pharmaceutical Trade & Quality Process",
  description: "A practical overview of Medoxy's product identity, document scope, hand-off, traceability, and exception questions for trade inquiries.",
  path: "/trade-quality",
});

export default function TradeQualityPage() {
  const cards = [
    [Handshake, "Define the request", "Identify the catalogue entry, dosage form, pack, intended market, supply-chain role, and records needed for the next decision."],
    [ShieldCheck, "Confirm document scope", "Check the issuing entity, product or site covered, version, validity, and applicability instead of relying on a generic badge."],
    [TestTube2, "Plan traceability", "Agree which identifiers and records should connect order, dispatch, receipt, storage, and onward distribution when applicable."],
    [FlaskConical, "Escalate exceptions", "Define contacts and evidence for damaged packs, discrepancies, storage deviations, complaints, returns, or other transaction issues."],
  ];

  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Trade & Quality" title="Ask decision-ready questions before a pharmaceutical trade hand-off." text="Medoxy's catalogue supports an initial B2B conversation. The exact controls and documents must be confirmed for the product, market, and parties involved." />
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
        <p className="mt-8 max-w-4xl text-sm leading-7 text-medoxy-muted">
          This overview is not a certification, audit result, regulatory opinion, or guarantee of document availability. Qualified partners should verify current product-specific records and governing requirements before proceeding.
        </p>
      </div>
    </section>
  );
}
