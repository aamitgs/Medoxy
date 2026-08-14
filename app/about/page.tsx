import type { Metadata } from "next";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Medoxy Healthcare",
  description: "Learn how Medoxy Healthcare presents its gastroenterology catalogue and coordinates product-document and pharmaceutical trade inquiries.",
  path: "/about",
});

export default function AboutPage() {
  const sections = [
    ["Company overview", "Medoxy Healthcare Pvt Ltd operates an inquiry-led pharmaceutical trading website. Its current public catalogue is focused on gastroenterology and is intended for distributors, healthcare organizations, and other qualified business contacts."],
    ["What the website provides", "Each catalogue entry identifies the listed composition, dosage form, pack information, and a direct inquiry route. These pages support initial product discovery; they are not prescribing resources, authorization records, or substitutes for controlled product documents."],
    ["Trade coordination", "A qualified inquiry can identify the product, intended market, requested records, and business purpose. Medoxy can then confirm what information is applicable and available for that request."],
    ["Documentation approach", "Product details should be checked against current packaging, manufacturer or vendor records, and market-specific requirements before a commercial or clinical decision is made."],
    ["Communication standard", "The website avoids presenting general quality language as proof of a product, facility, licence, or certification. Product-specific evidence should be requested and reviewed in its proper scope."],
    ["Content boundaries", "Medoxy's public information is written for business discovery. Questions about diagnosis, treatment, dosing, contraindications, or patient use belong with a qualified healthcare professional and the applicable approved product information."],
  ];

  return (
    <section className="section-pad section-clinical">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="About Medoxy" title="A focused pharmaceutical catalogue built for clear business inquiries." text="Understand the scope of Medoxy's public product information and how qualified trade requests are handled." />
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <HealthcareVisual title="Trade coordination and quality systems" subtitle="Medoxy Healthcare" variant="coordination" className="min-h-[520px]" />
          <div className="grid gap-5">
            {sections.map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-xl font-black text-medoxy-text">{title}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <HealthcareVisual title="Pharmaceutical portfolio planning" subtitle="Trade Expertise" variant="trade" className="mt-10 min-h-[360px]" />
      </div>
    </section>
  );
}
