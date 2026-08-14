import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Product & Distributor FAQs",
  description: "Answers about Medoxy's B2B product catalogue, product documents, distributor inquiries, website forms, and information boundaries.",
  path: "/faq",
});

const faqs = [
  { question: "Does Medoxy sell products online?", answer: "No. The website is strictly inquiry-based and does not include ecommerce, cart, checkout, online payments, product pricing, or customer accounts." },
  { question: "Can distributors request product information?", answer: "Yes. Distributors can send product, division, sourcing, and trade partnership inquiries through the contact and product detail forms." },
  { question: "Are product documents available?", answer: "Qualified healthcare or distribution partners may request current product information. Availability, applicability, market scope, and any sharing restrictions are confirmed for the specific request." },
  { question: "Which healthcare categories are covered?", answer: "Medoxy currently focuses on gastroenterology products for healthcare provider, distributor, pharmacy, and institutional inquiries." },
  { question: "How are inquiries handled?", answer: "Submissions are validated and must be delivered through the website's configured secure email or webhook provider before a success message is shown. If delivery is unavailable, the form reports an error so you can use the listed email address or phone number instead." },
  { question: "Is the product catalogue medical advice?", answer: "No. Catalogue pages support B2B discovery and do not provide diagnosis, treatment, dosing, contraindication, or patient-use instructions. Refer to current approved product information and a qualified healthcare professional for clinical questions." },
  { question: "How is website content reviewed?", answer: "Medoxy states the source and update context on editorial articles, keeps catalogue claims within the available product information, and provides a public content policy and correction route. Product-specific records still require qualified review." },
];

export default function FAQPage() {
  return (
    <section className="section-pad section-surface">
      <div className="container-grid max-w-4xl">
        <SectionHeader as="h1" eyebrow="FAQ" title="Product catalogue, document, and distributor questions." />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
