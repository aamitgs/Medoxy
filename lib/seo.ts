import type { Metadata } from "next";
import { site } from "@/data/site";

const defaultSocialImage = {
  url: "/og-medoxy.jpg",
  width: 1200,
  height: 630,
  alt: "Medoxy Healthcare — Trusted partnerships. Better healthcare.",
};

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
  absoluteTitle?: boolean;
  socialTitle?: string;
  image?: string;
};

/**
 * Creates complete, route-specific metadata while keeping the site's title and
 * social-card conventions in one place. Paths stay relative so metadataBase can
 * resolve them against the production origin.
 */
export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  socialTitle,
  image,
}: PageMetadata): Metadata {
  const shareTitle = socialTitle ?? (absoluteTitle ? title : `${title} | ${site.shortName}`);
  const images = image ? [image] : [defaultSocialImage];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image ?? "/og-medoxy.jpg"],
    },
  };
}

export function absoluteUrl(path: `/${string}`): string {
  return new URL(path, site.url).toString();
}
