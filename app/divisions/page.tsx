import type { Metadata } from "next";
import { DivisionCard } from "@/components/DivisionCard";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Product Divisions",
  description: "Explore Medoxy Healthcare product divisions and inquiry-ready pharmaceutical catalog categories.",
};

export default function DivisionsPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Product Divisions" title="Healthcare product architecture for clinical and distributor discovery." text="Browse Medoxy divisions, search products, filter categories, and request product information without ecommerce or pricing." />
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => <DivisionCard key={division.slug} division={division} />)}
          </div>
          <ProductExplorer />
        </div>
      </section>
    </>
  );
}
