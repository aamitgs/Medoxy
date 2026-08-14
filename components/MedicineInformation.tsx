import {
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  Info,
  PackageSearch,
  Scale,
  ShieldCheck,
} from "lucide-react";

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
  description,
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

  const checkpoints = [
    {
      icon: FileSearch,
      title: "Reconcile product identity",
      text: "Request the current applicable label or artwork and confirm that its name, composition wording, dosage form, and pack match the entry under review.",
    },
    {
      icon: Scale,
      title: "Confirm market scope",
      text: "Ask which classification, authorization, and supply records apply to the proposed destination market. A catalogue listing does not establish approval or availability.",
    },
    {
      icon: PackageSearch,
      title: "Verify pack and logistics",
      text: "Confirm the commercial pack and obtain product-specific storage and transport conditions from current controlled documentation before planning supply.",
    },
    {
      icon: ShieldCheck,
      title: "Scope quality records",
      text: "Identify which product- or batch-level records are applicable to the transaction and may lawfully be shared; do not infer that a general certificate covers this entry.",
    },
  ];

  const requestList = [
    "Current product label or artwork applicable to the proposed market",
    "Pack configuration and identifiers needed for purchasing review",
    "Applicable authorization or classification information",
    "Product-specific storage and transport conditions",
    "Relevant product- or batch-level quality records, where applicable and shareable",
    "Complaint, return, recall, and change-notification contact route",
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-14 md:py-20" aria-labelledby="trade-documentation-title">
      <div className="container-grid">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[.16em] text-medoxy-primary">B2B documentation guide</p>
          <h2 id="trade-documentation-title" className="mt-3 text-3xl font-black tracking-tight text-medoxy-text md:text-5xl">
            Trade review for {name}
          </h2>
          <p className="mt-5 text-lg leading-8 text-medoxy-muted">
            {description} The fields below reproduce the current online catalogue record and should be reconciled with
            current, applicable documents before a purchasing, listing, or supply decision.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8fafc]">
            <div className="border-b border-slate-200 bg-white px-6 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="text-medoxy-primary" size={24} />
                <h3 className="text-xl font-black text-medoxy-text">Catalogue record</h3>
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-medoxy-muted">For identification only; not a controlled specification.</p>
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

          <div>
            <h3 className="text-2xl font-black text-medoxy-text">Evaluation checkpoints</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {checkpoints.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(7,27,53,.06)]">
                  <Icon className="text-medoxy-primary" size={23} />
                  <h4 className="mt-4 font-black text-medoxy-text">{title}</h4>
                  <p className="mt-2 text-sm font-semibold leading-6 text-medoxy-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 rounded-[28px] border border-blue-100 bg-blue-50/50 p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
          <div>
            <h3 className="text-2xl font-black text-medoxy-text">Suggested document request</h3>
            <p className="mt-3 leading-7 text-medoxy-muted">
              Ask only for records relevant to your organization’s role, proposed market, and stage of review. Availability,
              applicability, and disclosure conditions must be confirmed for each request.
            </p>
            <ul className="mt-5 grid gap-3">
              {requestList.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-bold leading-6 text-medoxy-text">
                  <ClipboardCheck className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 shrink-0 text-amber-700" size={22} />
              <div>
                <h3 className="text-xl font-black text-amber-950">Information boundary</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-amber-950/80">
                  This B2B page is not prescribing information or patient guidance. It does not state an approved indication,
                  dosage, administration instruction, contraindication, interaction, or adverse-effect profile. Healthcare
                  decisions must use the current approved product information and advice from appropriately qualified professionals.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-amber-200 pt-5">
              <p className="text-xs font-black uppercase tracking-[.12em] text-amber-900">Official context</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-amber-950/80">
                These general references are not evidence of this product’s authorization, quality status, or certification.
              </p>
              <div className="mt-4 grid gap-3 text-sm font-black">
                <a
                  href="https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Drugs-Rules/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 text-medoxy-primary underline decoration-blue-300 underline-offset-4"
                >
                  CDSCO: Drugs Rules and amendments <ExternalLink className="mt-0.5 shrink-0" size={15} />
                </a>
                <a
                  href="https://www.who.int/publications/m/item/trs-1025-annex-7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 text-medoxy-primary underline decoration-blue-300 underline-offset-4"
                >
                  WHO: Good storage and distribution practices <ExternalLink className="mt-0.5 shrink-0" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
