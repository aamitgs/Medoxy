import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, FileCheck2, Scale, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Product Documentation & Compliance",
  description: "How Medoxy scopes product records, trade documentation, labels, and market-specific compliance questions for qualified inquiries.",
  path: "/certifications-compliance",
});

export default function CertificationsPage() {
  const items = [
    [BadgeCheck, "Evidence by scope", "A certificate or record should be matched to the named legal entity, site, product, activity, market, and validity period."],
    [ShieldCheck, "Product identity", "Current labels, pack details, composition records, and storage information should be checked for the exact configuration under review."],
    [Scale, "Market requirements", "Licensing, classification, labelling, and distribution obligations depend on the product, role, jurisdiction, and current law."],
    [FileCheck2, "Qualified requests", "Medoxy can confirm which product-specific records are applicable and available in response to a defined business inquiry."],
  ];

  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Documentation & Compliance" title="Evaluate evidence in the context of the product and transaction." text="This page describes Medoxy's inquiry process; it does not claim that Medoxy, every vendor, or every catalogue entry holds a particular certification or authorization." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text]) => (
            <article key={String(title)} className="card p-6">
              <Icon className="mb-5 text-medoxy-primary" size={30} />
              <h2 className="text-xl font-black text-medoxy-text">{String(title)}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{String(text)}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm leading-7 text-slate-700">
          <h2 className="text-xl font-black text-medoxy-text">Authoritative references</h2>
          <p className="mt-3">
            The World Health Organization publishes guidance on good storage and distribution practices, while India&apos;s Central Drugs Standard Control Organization publishes applicable Acts, Rules, and notices. Requirements should be verified against current official material and qualified advice for the specific transaction.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 font-bold text-medoxy-primary">
            <Link href="https://www.who.int/publications/m/item/trs-1025-annex-7" target="_blank" rel="noreferrer">WHO storage and distribution guidance</Link>
            <Link href="https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/" target="_blank" rel="noreferrer">CDSCO Acts and Rules</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
