import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Medoxy collects, uses, delivers, retains, and protects personal information submitted through website business inquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const sections = [
    ["Information you provide", "When you submit an inquiry, Medoxy receives your name, organization, email, phone number, country if supplied, inquiry type, product interest, message, and consent selection. Please do not include patient records, clinical details, or other sensitive personal information."],
    ["Technical information", "The service may process basic request and device information needed for security, rate limiting, hosting, and troubleshooting. If optional analytics is configured, it may also measure website usage using the provider's technologies."],
    ["How information is used", "Inquiry information is used to validate and deliver your request, contact you about it, route it to the relevant business function, protect the service from abuse, keep necessary business records, and meet applicable obligations."],
    ["Service providers and recipients", "The form sends an accepted inquiry through the delivery service configured by Medoxy, such as an email provider or secure webhook. Hosting, communications, analytics, professional advisers, or authorities may process relevant information when needed to operate the site, handle the request, protect legal rights, or comply with applicable requirements."],
    ["No sale of inquiry data", "Medoxy does not sell the personal information submitted through its inquiry form. Information is not shared for an unrelated purpose merely because an inquiry was submitted."],
    ["Retention", "Inquiry information is kept only for as long as reasonably needed to handle the request, maintain necessary business or security records, resolve disputes, and satisfy applicable requirements. Retention can differ according to the inquiry and any resulting relationship."],
    ["Security and transfers", "Medoxy and its service providers use reasonable administrative and technical measures, but no internet transmission or storage system can be guaranteed completely secure. A provider may process data from infrastructure outside your location subject to its safeguards and applicable requirements."],
    ["Your choices", `You can ask about, correct, or request deletion of inquiry information by contacting ${site.email}. A request may be limited where information must be retained for a legitimate business, security, dispute, or legal reason. You can also use the listed email address or phone number instead of the web form.`],
    ["External services", "The website may link to social networks, official references, maps, and other third-party services. Their privacy practices apply when you open or interact with those services."],
    ["Policy updates", "This policy may be updated when the website's collection or delivery practices change. Material revisions should be reflected on this page. Last updated 14 August 2026."],
  ];

  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Privacy Policy" title="How Medoxy handles website inquiry information." text="This policy explains the data used to deliver and manage a business inquiry. Last updated 14 August 2026." />
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
