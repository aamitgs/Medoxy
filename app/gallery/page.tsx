import type { Metadata } from "next";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Facility images, product photos, team photos, and events for Medoxy Healthcare.",
};

const images = [
  ["Facility Images", "facility"],
  ["Product Photos", "product"],
  ["Team Photos", "team"],
  ["Events", "event"],
] as const;

export default function GalleryPage() {
  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Gallery" title="A visual look at healthcare operations, products, teams, and events." />
        <div className="grid gap-6 md:grid-cols-2">
          {images.map(([title, variant]) => (
            <figure key={title} className="overflow-hidden rounded-lg border border-medoxy-border bg-white shadow-sm">
              <HealthcareVisual title={title} subtitle="Medoxy Gallery" variant={variant} className="aspect-[16/10] min-h-0 rounded-none border-0 shadow-none" />
              <figcaption className="p-5 text-xl font-black text-medoxy-text">{title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
