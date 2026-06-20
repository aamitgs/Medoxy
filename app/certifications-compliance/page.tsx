import type { Metadata } from "next";
import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description: "Certifications, quality standards, regulatory compliance, and approvals for Medoxy Healthcare.",
};

export default function CertificationsPage() {
  const items = [
    [BadgeCheck, "Certifications", "WHO-GMP oriented supplier expectations and quality documentation support."],
    [ShieldCheck, "Quality Standards", "Structured product checks, labeling review, and packaging consistency."],
    [FileCheck2, "Regulatory Compliance", "Compliance-aware communication for healthcare and distribution partners."],
    [Award, "Approvals", "Product-specific documents available to qualified partners upon request."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Certifications & Compliance" title="A compliance-first presentation for healthcare confidence." text="Medoxy emphasizes transparent documentation, regulatory awareness, and quality standards across its product divisions." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text]) => (
            <article key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-6 shadow-sm">
              <Icon className="mb-5 text-medoxy-primary" size={30} />
              <h2 className="text-xl font-black text-medoxy-text">{String(title)}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{String(text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
