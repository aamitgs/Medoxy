import type { Metadata } from "next";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Product, team, event, and trade coordination visuals for Medoxy Healthcare.",
};

const images = [
  ["Trade Coordination", "trade"],
  ["Product Photos", "product"],
  ["Team Photos", "team"],
  ["Events", "event"],
] as const;

export default function GalleryPage() {
  return (
    <section className="section-pad section-clinical">
      <div className="container-grid">
        <SectionHeader eyebrow="Gallery" title="A visual look at trade coordination, products, teams, and events." />
        <div className="grid gap-6 md:grid-cols-2">
          {images.map(([title, variant]) => (
            <figure key={title} className="overflow-hidden card">
              <HealthcareVisual title={title} subtitle="Medoxy Gallery" variant={variant} className="aspect-[16/10] min-h-0 rounded-none border-0 shadow-none" />
              <figcaption className="p-5 text-xl font-black text-medoxy-text">{title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
