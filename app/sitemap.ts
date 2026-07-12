import type { MetadataRoute } from "next";
import { articles, divisions, products, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/divisions", "/trade-quality", "/research-development", "/certifications-compliance", "/careers", "/gallery", "/blog", "/faq", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...divisions.map((division) => ({ url: `${site.url}/divisions/${division.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((product) => ({ url: `${site.url}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${site.url}/blog/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
