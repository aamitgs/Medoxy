import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Content & Product Information Policy",
  description: "How Medoxy scopes, sources, reviews, updates, and corrects B2B catalogue and pharmaceutical trade content on this website.",
  path: "/editorial-policy",
});

const sections = [
  {
    title: "Purpose and audience",
    paragraphs: [
      "This website supports business-to-business discovery for distributors, healthcare organizations, institutions, and other qualified contacts. Catalogue pages identify products for an initial inquiry; they do not replace current labels, approved product information, licences, certificates, quality records, or transaction-specific due diligence.",
    ],
  },
  {
    title: "Catalogue information",
    paragraphs: [
      "Product names, listed compositions, dosage forms, pack information, and images are presented from available catalogue or pack information. Because artwork, packs, formulas, classifications, and market status can change, users should request current controlled records for the exact product and intended market before making a decision.",
      "Medoxy does not treat a category label, general quality statement, or website badge as proof that a product, site, vendor, activity, or legal entity holds a specific approval or certification.",
    ],
  },
  {
    title: "Editorial articles and sources",
    paragraphs: [
      "Trade and quality articles identify the publishing organization, publication date, update date, and named sources. Preference is given to official regulators, intergovernmental health authorities, and the primary document relevant to the topic. Sources support the cited operational point; they do not endorse Medoxy or verify an individual catalogue entry.",
    ],
  },
  {
    title: "Clinical boundary",
    paragraphs: [
      "Website content is not medical advice and does not provide diagnosis, treatment selection, dosing, administration, contraindication, interaction, or patient-specific guidance. Clinical questions require the current approved product information and an appropriately qualified healthcare professional.",
    ],
  },
  {
    title: "Review, updates, and corrections",
    paragraphs: [
      "Content is reviewed when a material catalogue detail, controlled source, or public policy changes. Article pages show their relevant dates; the sitemap uses fixed content-update dates rather than changing every time the site is deployed.",
      `To report an inaccurate, outdated, or unclear statement, email ${site.email} with the page URL, the text in question, and any supporting record. Medoxy can assess the issue, correct public content when warranted, and update the displayed modification context.`,
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <section className="section-pad section-surface">
      <div className="container-grid max-w-4xl">
        <SectionHeader
          as="h1"
          eyebrow="Content Policy"
          title="Content and product-information standards."
          text="How Medoxy keeps a B2B catalogue useful without overstating what a public web page can establish. Last updated 14 August 2026."
        />
        <div className="grid gap-6">
          {sections.map((section) => (
            <section key={section.title} className="card p-6 sm:p-8">
              <h2 className="text-2xl font-black text-medoxy-text">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-medoxy-muted">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-medoxy-primary px-5 py-3 font-black text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary">
            Contact Medoxy
          </Link>
          <Link href="/privacy" className="rounded-xl border border-slate-300 px-5 py-3 font-black text-medoxy-text hover:border-medoxy-primary hover:text-medoxy-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary">
            Privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}
