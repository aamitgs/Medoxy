import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gastroenterology Product Gallery",
  description: "Browse actual pack images from selected Medoxy gastroenterology catalogue entries and open each product page for listed details.",
  path: "/gallery",
});

const galleryProducts = products.filter((product) => product.image).slice(0, 6);

export default function GalleryPage() {
  return (
    <section className="section-pad section-clinical">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Product Gallery" title="Selected gastroenterology catalogue pack images." text="Images help identify the listed catalogue entry. Confirm current artwork, composition, pack information, and market applicability from controlled product records before relying on them." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryProducts.map((product) => (
            <figure key={product.slug} className="overflow-hidden card">
              <Link href={`/products/${product.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary" aria-label={`View catalogue details for ${product.name}`}>
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={product.image}
                    alt={`Front pack image for ${product.name}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    className="object-contain p-5 transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
              <figcaption className="border-t border-slate-100 p-5">
                <h2 className="text-xl font-black text-medoxy-text">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-medoxy-muted">{product.category} · {product.dosageForm}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
