import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, CalendarDays, ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { articles, site } from "@/data/site";

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Article" };

  const url = `${site.url}/blog/${article.slug}`;
  const socialImage = `${url}/opengraph-image`;
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author.name, url: article.author.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      siteName: site.name,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.url],
      tags: article.tags,
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${article.title} — ${site.shortName}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [socialImage],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const url = `${site.url}/blog/${article.slug}`;
  const socialImage = `${url}/opengraph-image`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: {
      "@type": "ImageObject",
      url: socialImage,
      width: 1200,
      height: 630,
    },
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    articleSection: article.category,
    keywords: article.tags,
    author: {
      "@type": article.author.type,
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.svg`,
        width: 512,
        height: 512,
      },
    },
    citation: article.sources.map((source) => source.url),
    isAccessibleForFree: true,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <section className="section-pad article-page">
        <div className="container-grid max-w-4xl">
          <nav className="mb-7 text-sm font-bold text-medoxy-muted" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <Link href="/blog">Blog</Link> <span className="mx-2">/</span>
            <span aria-current="page">{article.title}</span>
          </nav>

          <Badge>{article.category}</Badge>
          <h1 className="mt-5 text-5xl font-black leading-tight text-medoxy-text md:text-7xl">{article.title}</h1>
          <p className="mt-6 text-xl leading-8 text-medoxy-muted">{article.excerpt}</p>

          <Image
            src={`/blog/${article.slug}/opengraph-image`}
            alt={`Illustrated title card for ${article.title}`}
            width={1200}
            height={630}
            priority
            unoptimized
            className="mt-8 h-auto w-full rounded-[24px] border border-slate-200 shadow-[0_18px_55px_rgba(7,27,53,.12)]"
          />

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-y border-slate-200 py-5 text-sm font-bold text-medoxy-muted">
            <span className="inline-flex items-center gap-2">
              <Building2 size={17} className="text-medoxy-primary" />
              By <Link href="/about" rel="author" className="text-medoxy-text underline decoration-slate-300 underline-offset-4">{article.author.name}</Link>
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={17} className="text-medoxy-primary" />
              Published <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
            </span>
            {article.dateModified !== article.datePublished ? (
              <span>Updated <time dateTime={article.dateModified}>{formatDate(article.dateModified)}</time></span>
            ) : null}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-950">
            This article is for B2B product and supply-chain evaluation. It is not medical, prescribing, regulatory, or legal
            advice and does not establish the status, quality, approval, or suitability of any product, company, site, or batch.
          </div>

          <article className="prose prose-lg mt-10 max-w-none rounded-[28px] border border-slate-200 bg-white p-6 text-medoxy-muted shadow-[0_18px_55px_rgba(7,27,53,.06)] md:p-10">
            {article.sections.map((section) => {
              const sectionSources = article.sources.filter((source) => section.sourceIds?.includes(source.id));
              return (
                <section key={section.heading} className="border-b border-slate-200 py-7 first:pt-0 last:border-0 last:pb-0">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                  {sectionSources.length ? (
                    <aside className="not-prose mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4" aria-label={`Sources for ${section.heading}`}>
                      <p className="text-xs font-black uppercase tracking-[.1em] text-medoxy-primary">Primary reference{sectionSources.length > 1 ? "s" : ""}</p>
                      <ul className="mt-2 grid gap-2">
                        {sectionSources.map((source) => (
                          <li key={source.id}>
                            <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm font-bold leading-6 text-medoxy-primary underline decoration-blue-300 underline-offset-4">
                              {source.title} — {source.publisher}
                              <ExternalLink className="mt-1 shrink-0" size={14} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </aside>
                  ) : null}
                </section>
              );
            })}
          </article>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title" className="text-2xl font-black text-medoxy-text">Official sources</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-medoxy-muted">
              Links point to the publishing regulator or the World Health Organization. Check the current text and applicability for your market and activity.
            </p>
            <ol className="mt-5 grid gap-4">
              {article.sources.map((source) => (
                <li key={source.id} className="text-sm leading-6">
                  <a href={source.url} target="_blank" rel="noreferrer" className="font-black text-medoxy-primary underline decoration-blue-300 underline-offset-4">
                    {source.title}
                  </a>
                  <span className="block font-semibold text-medoxy-muted">{source.publisher}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-10">
            <SectionHeader eyebrow="Related Articles" title="More B2B healthcare insights" />
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="card p-5">
                  <h2 className="font-black text-medoxy-text">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-medoxy-muted">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
