import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Medoxy Healthcare Pvt Ltd website inquiries.",
};

export default function PrivacyPage() {
  const sections = [
    ["Information We Collect", "When you submit an inquiry, Medoxy may collect your name, contact details, organization, inquiry type, product interest, and message."],
    ["How We Use Information", "Inquiry information is used to respond to product, distributor, provider, institutional, career, and partnership requests."],
    ["Data Sharing", "Medoxy does not sell personal information. Information may be shared only where needed to respond to your inquiry, support business communication, or comply with applicable requirements."],
    ["Data Security", "Reasonable safeguards are used to protect inquiry information from unauthorized access, misuse, or disclosure."],
    ["Contact", `For privacy-related questions, contact ${site.email}.`],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Privacy Policy" title="How Medoxy handles inquiry information." text="This policy explains how information submitted through the website is used and protected." />
        <div className="grid gap-5">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-medoxy-border bg-white p-6">
              <h2 className="text-xl font-black text-medoxy-text">{title}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
