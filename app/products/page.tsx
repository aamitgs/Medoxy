import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Medoxy Healthcare products for qualified pharmaceutical trade, distributor, and healthcare partner inquiries.",
};

export default function ProductsPage() {
  return (
    <section className="section-pad section-health">
      <div className="container-grid">
        <SectionHeader
          eyebrow="Products"
          title="Browse Medoxy products for qualified healthcare and trade inquiries."
          text="Search products by name, category, or composition, then open product details to request trade-ready information."
        />
        <ProductExplorer />
      </div>
    </section>
  );
}
