import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Medoxy Healthcare Pvt Ltd for product, distributor, healthcare provider, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-grid grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Contact Us" title="Send a product, distributor, provider, or partnership inquiry." />
          <div className="grid gap-4">
            <div className="card p-6">
              <MapPin className="mb-4 text-medoxy-primary" />
              <h2 className="font-black text-medoxy-text">{site.name}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{site.address.join(", ")}</p>
            </div>
            <div className="card p-6">
              <Mail className="mb-4 text-medoxy-primary" />
              <p className="font-black text-medoxy-text">{site.email}</p>
            </div>
            <div className="card p-6">
              <Phone className="mb-4 text-medoxy-primary" />
              <p className="font-black text-medoxy-text">{site.phone}</p>
            </div>
            <div className="card p-6">
              <h2 className="font-black text-medoxy-text">Social Media</h2>
              <div className="mt-4">
                <SocialLinks tone="dark" />
              </div>
            </div>
            <div className="overflow-hidden card-minimal">
              <iframe
                title="Medoxy Healthcare Gurgaon map"
                src="https://www.google.com/maps?q=Bhondsi%20Gurgaon%20Haryana%20122102%20India&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
