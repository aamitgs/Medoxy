import { ClipboardCheck, ExternalLink, Info } from "lucide-react";

type Props = {
  name: string;
  dosageForm: string;
  composition: string;
  category: string;
  description: string;
  packaging: string;
  division: string;
};

export function MedicineInformation({
  name,
  dosageForm,
  composition,
  category,
  packaging,
  division,
}: Props) {
  const catalogueFields = [
    ["Catalogue name", name],
    ["Composition as listed", composition],
    ["Dosage form as listed", dosageForm],
    ["Commercial pack as listed", packaging],
    ["Catalogue category", category],
    ["Portfolio division", division],
  ];

  const requestList = [
    "Current label or artwork and applicable market authorization or classification records",
    "Pack identifiers and product-specific storage and transport instructions from controlled documents",
    "Relevant product- or batch-level quality records and the complaint, recall, and change-notification contact",
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-14 md:py-20" aria-labelledby="trade-documentation-title">
      <div className="container-grid">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[.16em] text-medoxy-primary">B2B catalogue verification</p>
          <h2 id="trade-documentation-title" className="mt-3 text-3xl font-black tracking-tight text-medoxy-text md:text-5xl">
            Verify the record for {name}
          </h2>
          <p className="mt-5 text-lg leading-8 text-medoxy-muted">
            Reconcile this online entry with current, applicable documents before a purchasing, listing, or supply decision.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8fafc]">
            <div className="border-b border-slate-200 bg-white px-6 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="text-medoxy-primary" size={24} aria-hidden="true" />
                <h3 className="text-xl font-black text-medoxy-text">Catalogue record</h3>
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-medoxy-muted">
                For identification only; not a controlled specification.
              </p>
            </div>
            <dl className="divide-y divide-slate-200">
              {catalogueFields.map(([label, value]) => (
                <div key={label} className="px-6 py-4 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 md:px-8">
                  <dt className="text-xs font-black uppercase tracking-[.08em] text-medoxy-muted">{label}</dt>
                  <dd className="mt-1 break-words font-bold leading-7 text-medoxy-text md:mt-0">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-blue-50/50 p-6 md:p-8">
            <h3 className="text-2xl font-black text-medoxy-text">Request before review</h3>
            <p className="mt-3 leading-7 text-medoxy-muted">
              Confirm applicability and disclosure conditions for each requested record.
            </p>
            <ul className="mt-5 grid gap-3">
              {requestList.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-bold leading-6 text-medoxy-text">
                  <ClipboardCheck className="mt-0.5 shrink-0 text-emerald-600" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-blue-100 pt-5">
              <p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-primary">Official context</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-medoxy-muted">
                General references only; neither confirms this product&apos;s authorization or quality status.
              </p>
              <div className="mt-4 grid gap-3 text-sm font-black">
                <a
                  href="https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Drugs-Rules/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 text-medoxy-primary underline decoration-blue-300 underline-offset-4"
                >
                  CDSCO: Drugs Rules and amendments <ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
                </a>
                <a
                  href="https://www.who.int/publications/m/item/trs-1025-annex-7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 text-medoxy-primary underline decoration-blue-300 underline-offset-4"
                >
                  WHO: Good storage and distribution practices <ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
          <Info className="mt-0.5 shrink-0 text-amber-700" size={22} aria-hidden="true" />
          <div>
            <h3 className="font-black text-amber-950">Information boundary</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-amber-950/80">
              This B2B catalogue entry is not patient guidance or prescribing information. It provides no indication, dose,
              administration, safety, storage, or availability advice. Use current approved product information and applicable
              records for professional purchasing and supply review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
