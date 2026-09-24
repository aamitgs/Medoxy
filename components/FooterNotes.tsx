import Link from "next/link";
import { products, site } from "@/data/site";

const linkClass = "text-slate-700 underline underline-offset-2 transition hover:text-medoxy-primary";

export function FooterNotes() {
  return (
    <section aria-label="Catalogue notes and disclaimer" className="border-t border-slate-200 bg-[#f5f5f7]">
      <div className="container-grid grid gap-4 py-10 text-xs leading-6 text-slate-500 sm:text-[13px]">
        <p>
          {site.name} is a B2B pharmaceutical trading company based in Gurgaon, Haryana, India, focused on a{" "}
          <Link className={linkClass} href="/divisions/gastroenterology">gastroenterology product catalogue</Link> for
          distributors, stockists, hospitals, institutions, and other qualified healthcare businesses. The{" "}
          <Link className={linkClass} href="/products">product catalogue</Link> lists brand names, compositions, dosage
          forms, and pack sizes across categories such as proton pump inhibitor combinations, antispasmodics,
          ursodeoxycholic acid, rifaximin, probiotics, antacid and alginate suspensions, and nutritional supplements.
        </p>
        <p>
          Catalogue entries include{" "}
          {products.map((product, index) => (
            <span key={product.slug}>
              <Link className={linkClass} href={`/products/${product.slug}`}>{product.name}</Link>
              {" "}({product.composition})
              {index < products.length - 2 ? ", " : index === products.length - 2 ? " and " : ""}
            </span>
          ))}
          . Names, compositions, images, packaging, and availability may change or differ by market. Verify the exact
          product and current documents before any regulatory, procurement, or commercial decision.
        </p>
        <p>
          1. Website content is provided for business and informational purposes only and is not a substitute for
          professional medical advice, diagnosis, treatment, or approved prescribing information. Patients should consult
          a qualified healthcare professional.
        </p>
        <p>
          2. This website does not sell medicines online, display pricing, or accept consumer orders. A listing or
          inquiry response is not an offer of supply or a guarantee of availability.{" "}
          <Link className={linkClass} href="/terms">Terms apply</Link>.
        </p>
        <p>
          3. References to quality, compliance, or external guidelines do not by themselves establish a particular
          licence, approval, or certification. Evidence applicable to a defined transaction can be requested through the{" "}
          <Link className={linkClass} href="/contact">trade inquiry form</Link>. See{" "}
          <Link className={linkClass} href="/trade-quality">Trade &amp; Quality</Link> and{" "}
          <Link className={linkClass} href="/certifications-compliance">Compliance</Link> for more information.
        </p>
        <p>
          Articles on the <Link className={linkClass} href="/blog">Healthcare Insights</Link> blog follow our{" "}
          <Link className={linkClass} href="/editorial-policy">content policy</Link>. Personal data submitted through
          inquiry forms is handled as described in the <Link className={linkClass} href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </section>
  );
}
