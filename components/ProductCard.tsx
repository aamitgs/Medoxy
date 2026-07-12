import Image from "next/image";
import Link from "next/link";
import { ClipboardList, FileText } from "lucide-react";
import { divisions } from "@/data/site";
import { Badge } from "./Badge";
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
  featured: boolean;
  popular: boolean;
};

export function ProductCard({ product }: { product: Product }) {
  const division = divisions.find((item) => item.slug === product.division);

  return (
    <article className="overflow-hidden card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative bg-gradient-to-b from-white to-medoxy-background">
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          {product.featured ? <Badge tone="red">Featured</Badge> : null}
          {product.popular ? <Badge>Popular</Badge> : null}
        </div>
        {product.image ? (
          <div className="relative aspect-[4/3] overflow-hidden px-5 pt-14">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-5 drop-shadow-[0_22px_28px_rgba(15,23,42,0.16)]" />
          </div>
        ) : (
          <div className="aspect-[4/3] pt-12">
            <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="h-full min-h-0 rounded-none border-0 shadow-none" />
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-wide text-medoxy-primary">{division?.name} / {product.category}</p>
        <h3 className="mt-3 text-xl font-black text-medoxy-text">{product.name}</h3>
        <p className="mt-2 text-sm font-semibold text-medoxy-muted">{product.composition}</p>
        <p className="mt-3 min-h-16 text-sm leading-6 text-medoxy-muted">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="inline-flex items-center gap-2 rounded-lg bg-medoxy-primary px-4 py-3 text-sm font-bold text-white" href={`/products/${product.slug}`}>
            <FileText size={16} /> View Details
          </Link>
          <Link className="inline-flex items-center gap-2 rounded-lg border border-medoxy-border px-4 py-3 text-sm font-bold text-medoxy-text" href={`/contact?product=${product.slug}`}>
            <ClipboardList size={16} /> Ask for Documents
          </Link>
        </div>
      </div>
    </article>
  );
}
