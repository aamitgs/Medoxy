import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Healthcare trading insights, pharmaceutical product updates, distribution topics, and quality documentation perspectives from Medoxy Healthcare.",
};

export default function BlogPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Blog" title="Healthcare trading insights and pharmaceutical product updates." text="Browse Medoxy articles by category, tag, distribution topic, and related healthcare business themes." />
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => <Badge key={category} tone="neutral">{category}</Badge>)}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <Badge>{article.category}</Badge>
              <h2 className="mt-4 text-2xl font-black text-medoxy-text">{article.title}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{article.excerpt}</p>
              <p className="mt-5 text-sm font-bold text-medoxy-muted">{new Date(article.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
