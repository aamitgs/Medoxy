import type { MetadataRoute } from "next";
import { articles, divisions, products, site } from "@/data/site";

// Update this only when the public site receives a meaningful content change.
// A fixed value prevents every deployment from falsely refreshing all URLs.
const contentLastModified = "2026-08-14";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/divisions", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/trade-quality", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/portfolio-development", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/certifications-compliance", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/careers", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/faq", changeFrequency: "yearly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/editorial-policy", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: contentLastModified,
      changeFrequency,
      priority,
    })),
    ...divisions.map((division) => ({
      url: `${site.url}/divisions/${division.slug}`,
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${site.url}${product.image}`],
    })),
    ...articles.map((article) => ({
      url: `${site.url}/blog/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
