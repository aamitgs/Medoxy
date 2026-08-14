import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Terms for Medoxy's B2B product catalogue, pharmaceutical trade content, external sources, and website inquiry service.",
  path: "/terms",
});

export default function TermsPage() {
  const sections = [
    ["B2B website scope", "This website provides company, catalogue, trade-quality, and inquiry information for distributors, healthcare organizations, institutions, and other qualified business contacts. Access to a page does not create an agency, distribution, supply, advisory, or other commercial relationship."],
    ["No medical advice", "Catalogue and editorial content is not a substitute for professional medical advice, diagnosis, treatment, prescribing guidance, or approved product information. Clinical and patient-use questions require an appropriately qualified healthcare professional and current product-specific records."],
    ["No ecommerce or supply offer", "The website does not provide online medicine sales, pricing, cart, checkout, payments, or direct consumer ordering. A listing or inquiry response does not by itself constitute an offer, guarantee of availability, authorization for a market, or acceptance of commercial terms."],
    ["Verify current product information", "Names, compositions, dosage forms, images, packaging, availability, classification, and documentation may change or differ by market. Verify the exact product and current controlled records before a regulatory, clinical, procurement, or commercial decision."],
    ["No blanket certification claim", "A general reference to quality, compliance, or an external guideline does not establish that Medoxy, a vendor, facility, product, or transaction has a particular licence, approval, certification, audit status, or endorsement. Request evidence applicable to the defined transaction."],
    ["Inquiry service", "You are responsible for providing accurate, relevant information and for avoiding patient data or unnecessary sensitive information. A submission is received only when the service confirms successful delivery; a response time, commercial outcome, or continued availability of the form is not guaranteed."],
    ["Editorial sources", "External sources are cited to support specific informational points and do not endorse Medoxy. Official material can change, and users should consult the current primary source and qualified professional advice for their circumstances."],
    ["Third-party services", "External links, maps, social networks, and delivery or analytics providers are operated by third parties under their own terms. Medoxy does not control their availability or content."],
    ["Acceptable use", "Do not misuse the website, attempt unauthorized access, disrupt its operation, submit unlawful or misleading content, impersonate another person or organization, or use automated submissions to burden the service."],
    ["Updates and contact", `These terms may be updated with the website or business inquiry process. Last updated 14 August 2026. Questions can be sent to ${site.email}.`],
  ];

  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Terms & Disclaimer" title="Terms of Use" text={`Terms for using ${site.name}'s B2B catalogue, articles, and inquiry forms. Last updated 14 August 2026.`} />
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
