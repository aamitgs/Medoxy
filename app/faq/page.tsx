import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Product, distribution, and company FAQs for Medoxy Healthcare Pvt Ltd.",
};

const faqs = [
  { question: "Does Medoxy sell products online?", answer: "No. The website is strictly inquiry-based and does not include ecommerce, cart, checkout, online payments, product pricing, or customer accounts." },
  { question: "Can distributors request product information?", answer: "Yes. Distributors can send product, division, sourcing, and trade partnership inquiries through the contact and product detail forms." },
  { question: "Are brochures available?", answer: "Product brochures and information sheets can be requested by qualified healthcare or distribution partners." },
  { question: "Which healthcare categories are covered?", answer: "Medoxy currently focuses on gastroenterology products for healthcare provider, distributor, pharmacy, and institutional inquiries." },
  { question: "How are inquiries handled?", answer: "Form submissions are validated on the client and server. In production, they can be connected to email notifications, admin alerts, reCAPTCHA, and rate limiting." },
];

export default function FAQPage() {
  return (
    <section className="section-pad">
      <div className="container-grid max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Product, distribution, and company questions." />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
