import { ImageResponse } from "next/og";
import { articles, site } from "@/data/site";

export const alt = "Medoxy Healthcare B2B insight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug) ?? articles[0];
  const titleSize = article.title.length > 52 ? 54 : 62;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #06182f 0%, #0c3566 62%, #1158a7 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "68px 76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,.08)",
            border: "2px solid rgba(255,255,255,.12)",
            borderRadius: 999,
            height: 480,
            position: "absolute",
            right: -120,
            top: -175,
            width: 480,
          }}
        />
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: -0.6 }}>
            <span style={{ color: "#ff4b55", fontSize: 38, marginRight: 14 }}>M</span>
            {site.name}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.22)",
              borderRadius: 999,
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              padding: "11px 20px",
            }}
          >
            B2B Insight
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ color: "#9fc9ff", display: "flex", fontSize: 20, fontWeight: 800, letterSpacing: 2.4, marginBottom: 20, textTransform: "uppercase" }}>
            {article.category}
          </div>
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 900, letterSpacing: -2.2, lineHeight: 1.06 }}>
            {article.title}
          </div>
        </div>

        <div style={{ alignItems: "center", borderTop: "1px solid rgba(255,255,255,.18)", display: "flex", fontSize: 19, justifyContent: "space-between", paddingTop: 24 }}>
          <span style={{ color: "#d9e9ff" }}>Evidence-aware catalogue and supply-chain guidance</span>
          <span style={{ fontWeight: 800 }}>medoxyhealthcare.com</span>
        </div>
      </div>
    ),
    size,
  );
}
