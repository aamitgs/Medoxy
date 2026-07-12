import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use and disclaimer for Medoxy Healthcare Pvt Ltd.",
};

export default function TermsPage() {
  const sections = [
    ["Website Use", "This website is provided for general company, product portfolio, and business inquiry information for healthcare providers, distributors, institutions, and partners."],
    ["No Medical Advice", "Product information on this website is not a substitute for professional medical advice, diagnosis, treatment, or prescribing guidance. Medicines should be used only under qualified medical supervision."],
    ["No Ecommerce", "The website does not provide online medicine sales, pricing, cart, checkout, online payments, or direct consumer ordering."],
    ["Information Accuracy", "Medoxy aims to keep product and company information clear and current, but specifications, availability, packaging, and portfolio details may change without prior notice."],
    ["Third-Party Links", "External links are provided for convenience. Medoxy is not responsible for third-party websites, services, or content."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Terms & Disclaimer" title="Terms of Use" text={`Please review the terms for using ${site.name}'s website and inquiry forms.`} />
        <div className="grid gap-5">
          {sections.map(([title, text]) => (
            <article key={title} className="card p-6">
              <h2 className="text-xl font-black text-medoxy-text">{title}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
