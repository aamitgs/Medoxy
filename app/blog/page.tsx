import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pharmaceutical Trade & Quality Insights",
  description: "Evidence-based B2B articles about pharmaceutical distribution, product documentation, quality systems, and responsible catalogue communication.",
  path: "/blog",
});

export default function BlogPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <SectionHeader as="h1" eyebrow="Insights" title="Practical pharmaceutical trade and quality guidance." text="B2B articles use named sources, publication and update dates, and clear boundaries between operational guidance and product-specific evidence." />
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => <Badge key={category} tone="neutral">{category}</Badge>)}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <Badge>{article.category}</Badge>
              <h2 className="mt-4 text-2xl font-black text-medoxy-text">{article.title}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{article.excerpt}</p>
              <p className="mt-5 text-sm font-bold text-medoxy-muted">Updated {new Date(article.dateModified).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
