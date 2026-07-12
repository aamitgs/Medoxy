import type { Metadata } from "next";
import { DivisionCard } from "@/components/DivisionCard";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Division",
  description: "Explore Medoxy Healthcare gastroenterology products and inquiry-ready pharmaceutical trading categories.",
};

export default function DivisionsPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Division" title="Digestive health product portfolio for clinical and distributor discovery." text="Browse Medoxy gastroenterology products, search categories, and request trade-ready product information without ecommerce or pricing." />
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => <DivisionCard key={division.slug} division={division} />)}
          </div>
          <ProductExplorer />
        </div>
      </section>
    </>
  );
}
