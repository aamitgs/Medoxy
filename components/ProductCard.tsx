import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { divisions } from "@/data/site";
import { HealthcareVisual } from "./HealthcareVisual";

export type Product = {
  slug: string;
  name: string;
  division: string;
  category: string;
  composition: string;
  dosageForm: string;
  packaging: string;
  description: string;
  image?: string;
  gallery?: readonly string[];
  featured: boolean;
  popular: boolean;
};

export function ProductCard({ product }: { product: Product }) {
  const division = divisions.find((item) => item.slug === product.division);

  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_16px_44px_rgba(7,27,53,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,27,53,0.13)]">
      <div className="relative bg-gradient-to-b from-white to-medoxy-background">
        {product.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-white p-3">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.025]" />
          </div>
        ) : (
          <div className="aspect-[4/3] pt-12">
            <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="h-full min-h-0 rounded-none border-0 shadow-none" />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-medoxy-primary">{division?.name} / {product.category}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#071b35]">{product.name}</h3>
        <p className="mt-2 text-sm font-semibold text-medoxy-muted">{product.composition}</p>
        <p className="mt-3 min-h-16 text-sm leading-6 text-medoxy-muted">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="inline-flex items-center gap-2 rounded-xl bg-[#071b35] px-4 py-3 text-sm font-black text-white transition hover:bg-medoxy-primary" href={`/products/${product.slug}`}>
            <FileText size={16} /> View product
          </Link>
        </div>
      </div>
    </article>
  );
}
