import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return {
    title: article ? article.title : "Article",
    description: article?.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <section className="section-pad">
      <div className="container-grid max-w-4xl">
        <Badge>{article.category}</Badge>
        <h1 className="mt-5 text-5xl font-black leading-tight text-medoxy-text md:text-7xl">{article.title}</h1>
        <p className="mt-5 text-lg font-bold text-medoxy-muted">{new Date(article.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        <article className="prose prose-lg mt-10 max-w-none rounded-lg border border-medoxy-border bg-white p-8 text-medoxy-muted shadow-sm">
          <p>{article.excerpt}</p>
          <h2>Why it matters</h2>
          <p>Healthcare partners evaluate pharmaceutical brands through product clarity, quality documentation, reliable response times, and professional communication. Medoxy’s digital product experience is designed around those decisions.</p>
          <h2>Medoxy perspective</h2>
          <p>Division-led product architecture helps providers and distributors move from discovery to qualified inquiry quickly, without ecommerce distractions such as pricing, carts, checkout, or online payments.</p>
          <h2>Partner action</h2>
          <p>Use the relevant product or division inquiry flow to request product information, brochures, specifications, and business collaboration details.</p>
        </article>
        <div className="mt-10">
          <SectionHeader eyebrow="Related Articles" title="More healthcare insights" />
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-lg border border-medoxy-border bg-white p-5">
                <h2 className="font-black text-medoxy-text">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-medoxy-muted">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
