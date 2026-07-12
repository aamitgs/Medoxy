import type { Metadata } from "next";
import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description: "Trade compliance, product documentation, quality standards, and responsible communication for Medoxy Healthcare.",
};

export default function CertificationsPage() {
  const items = [
    [BadgeCheck, "Vendor Standards", "WHO-GMP oriented supplier expectations and quality documentation support."],
    [ShieldCheck, "Quality Standards", "Product document review, labeling checks, and packaging consistency."],
    [FileCheck2, "Trade Compliance", "Compliance-aware communication for healthcare and distribution partners."],
    [Award, "Product Documents", "Product-specific documents available to qualified partners upon request."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Certifications & Compliance" title="A compliance-aware trading model for healthcare confidence." text="Medoxy emphasizes transparent product documentation, regulatory awareness, responsible communication, and partner confidence across its gastroenterology portfolio." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text]) => (
            <article key={String(title)} className="card p-6">
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
