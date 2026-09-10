import {
  Activity,
} from "lucide-react";

export const site = {
  name: "Medoxy Healthcare Pvt Ltd",
  shortName: "Medoxy",
  url: "https://www.medoxyhealthcare.com",
  email: "Medoxyhealthcarellp@gmail.com",
  phone: "+91 90847 10706",
  address: [
    "Block D, Gali No. 7, Shyam Kunj",
    "Maruti Kunj Road, Bhondsi",
    "Gurgaon, Haryana - 122102",
    "India",
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/medoxyhealthcare" },
  { label: "Instagram", href: "https://www.instagram.com/medoxyhealthcare" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/medoxy-healthcare" },
  { label: "YouTube", href: "https://www.youtube.com/@medoxyhealthcare" },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Division", href: "/divisions" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/trade-quality" },
  { label: "Portfolio", href: "/portfolio-development" },
  { label: "Compliance", href: "/certifications-compliance" },
  { label: "Contact", href: "/contact" },
];

export const divisionIcons = {
  gastroenterology: Activity,
};

export const divisions = [
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    description: "Digestive-health catalogue entries organized by category, dosage form, pack information, and trade inquiry route.",
    benefits: ["Category-based catalogue", "Multiple listed dosage forms", "Product-specific inquiry routing"],
  },
] as const;

export type DivisionSlug = (typeof divisions)[number]["slug"];

export const products = [
  {
    slug: "benzispa-sr",
    name: "Benzispa SR",
    division: "gastroenterology",
    category: "Antispasmodic",
    composition: "Mebeverine Hydrochloride Sustained Release",
    dosageForm: "Capsule",
    packaging: "10 x 10 Capsules",
    description: "B2B catalogue entry for a sustained-release capsule listed with mebeverine hydrochloride; qualified buyers may request current product and market documents, subject to applicability and availability.",
    image: "/products/front-benzispa-sr.jpg",
    gallery: [
      "/products/gallery/benzispa-sr-1.jpg",
      "/products/gallery/benzispa-sr-2.jpg",
      "/products/gallery/benzispa-sr-3.jpg",
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "benzispa-plus",
    name: "Benzispa Plus",
    division: "gastroenterology",
    category: "Antispasmodic",
    composition: "Mebeverine + Chlordiazepoxide",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a tablet listed with mebeverine and chlordiazepoxide, presented for qualified product-document and trade inquiries.",
    image: "/products/front-benzispa-plus.jpg",
    gallery: ["/products/gallery/benzispa-plus-1.jpg", "/products/gallery/benzispa-plus-2.jpg", "/products/gallery/benzispa-plus-3.jpg"],
    featured: true,
    popular: true,
  },
  {
    slug: "esomizole-d",
    name: "Esomizole-D",
    division: "gastroenterology",
    category: "Acidity & GERD",
    composition: "Esomeprazole (EC) + Domperidone (SR)",
    dosageForm: "Capsule",
    packaging: "10 x 10 Capsules",
    description: "B2B catalogue entry for a capsule listed with enteric-coated esomeprazole and sustained-release domperidone, subject to document and market review.",
    image: "/products/front-esomizole-d.jpg",
    gallery: ["/products/gallery/esomizole-d-1.jpg", "/products/gallery/esomizole-d-2.jpg", "/products/gallery/esomizole-d-3.jpg"],
    featured: true,
    popular: true,
  },
  {
    slug: "ursofiz-300",
    name: "Ursofiz 300",
    division: "gastroenterology",
    category: "Hepatobiliary Care",
    composition: "Ursodeoxycholic Acid IP 300 mg",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a tablet listed with ursodeoxycholic acid IP 300 mg; qualified buyers may request current pack and product documents, subject to applicability and availability.",
    image: "/products/front-ursofiz-300.jpg",
    gallery: ["/products/gallery/ursofiz-300-1.jpg", "/products/gallery/ursofiz-300-2.jpg", "/products/gallery/ursofiz-300-3.jpg", "/products/gallery/ursofiz-300-4.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "ushield",
    name: "Ushield",
    division: "gastroenterology",
    category: "Ulcer Care",
    composition: "Sucralfate + Oxetacaine",
    dosageForm: "Suspension",
    packaging: "200 ml bottle",
    description: "B2B catalogue entry for a suspension listed with sucralfate and oxetacaine. Public pack imagery is withheld pending claim and document review; qualified organizations may request current, applicable information.",
    image: "/products/front-ushield.jpg",
    gallery: ["/products/gallery/ushield-1.jpg", "/products/gallery/ushield-2.jpg", "/products/gallery/ushield-3.jpg", "/products/gallery/ushield-5.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "esomizole-40",
    name: "Esomizole-40",
    division: "gastroenterology",
    category: "Acidity & GERD",
    composition: "Esomeprazole 40 mg with Sodium Bicarbonate as buffer",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a tablet listed with esomeprazole 40 mg and sodium bicarbonate as a buffer, subject to current document verification.",
    image: "/products/front-esomizole-40.jpg",
    gallery: ["/products/gallery/esomizole-40-1.jpg", "/products/gallery/esomizole-40-2.jpg", "/products/gallery/esomizole-40-4.jpg", "/products/gallery/esomizole-40-5.jpg", "/products/gallery/esomizole-40-6.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "edoflora",
    name: "Edoflora",
    division: "gastroenterology",
    category: "Probiotic",
    composition: "Lyophilized Saccharomyces boulardii 250 mg",
    dosageForm: "Capsule",
    packaging: "10 x 1 x 10 Capsules",
    description: "B2B catalogue entry for a capsule listed with lyophilized Saccharomyces boulardii 250 mg, presented for product and trade evaluation.",
    image: "/products/front-edoflora.jpg",
    gallery: ["/products/gallery/edoflora-1.jpg", "/products/gallery/edoflora-2.jpg", "/products/gallery/edoflora-3.jpg", "/products/gallery/edoflora-4.jpg"],
    featured: false,
    popular: false,
  },
  {
    slug: "menzovit",
    name: "Menzovit",
    division: "gastroenterology",
    category: "Nutritional Support",
    composition: "Multivitamin, Multimineral, Antioxidants, Iron & Zinc",
    dosageForm: "Softgel Capsule",
    packaging: "10 x 1 x 10 Softgel Capsules",
    description: "B2B catalogue entry for a softgel capsule listing vitamins, minerals, antioxidants, iron, and zinc; confirm the current formula from controlled product documents.",
    image: "/products/front-menzovit.jpg",
    gallery: ["/products/gallery/menzovit-1.jpg", "/products/gallery/menzovit-2.jpg"],
    featured: false,
    popular: false,
  },
  {
    slug: "finozyme-q10",
    name: "Finozyme Q10",
    division: "gastroenterology",
    category: "Nutritional Support",
    composition: "Coenzyme Q10 + L-Arginine + Omega-3 fatty acid + Selenium + Lycopene",
    dosageForm: "Softgel Capsule",
    packaging: "10 x 1 x 10 Softgel Capsules",
    description: "B2B catalogue entry for a softgel capsule listing Coenzyme Q10, L-arginine, omega-3 fatty acid, selenium, and lycopene; current formula details require document review.",
    image: "/products/front-finozyme-q10.jpg",
    gallery: ["/products/gallery/finozyme-q10-1.jpg", "/products/gallery/finozyme-q10-2.jpg", "/products/gallery/finozyme-q10-3.jpg", "/products/gallery/finozyme-q10-4.jpg", "/products/gallery/finozyme-q10-5.jpg", "/products/gallery/finozyme-q10-6.jpg", "/products/gallery/finozyme-q10-7.jpg", "/products/gallery/finozyme-q10-8.jpg"],
    featured: false,
    popular: false,
  },
  {
    slug: "esomizole-it",
    name: "Esomizole-IT",
    division: "gastroenterology",
    category: "Acidity & GERD",
    composition: "Esomeprazole (EC) + Itopride (SR)",
    dosageForm: "Capsule",
    packaging: "10 x 10 Capsules",
    description: "B2B catalogue entry for a capsule listed with enteric-coated esomeprazole and sustained-release itopride, presented for qualified trade review.",
    image: "/products/front-esomizole-it.jpg",
    gallery: ["/products/gallery/esomizole-it-1.jpg", "/products/gallery/esomizole-it-2.jpg", "/products/gallery/esomizole-it-3.jpg", "/products/gallery/esomizole-it-4.jpg"],
    featured: true,
    popular: true,
  },
  {
    slug: "ursofiz-450",
    name: "Ursofiz 450",
    division: "gastroenterology",
    category: "Hepatobiliary Care",
    composition: "Ursodeoxycholic Acid Sustained Release",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a sustained-release tablet listed with ursodeoxycholic acid; current pack and product details may be requested for qualified review, subject to applicability and availability.",
    image: "/products/front-ursofiz-450.jpg",
    gallery: ["/products/gallery/ursofiz-450-1.jpg", "/products/gallery/ursofiz-450-2.jpg", "/products/gallery/ursofiz-450-3.jpg", "/products/gallery/ursofiz-450-4.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "u-raft",
    name: "U Raft",
    division: "gastroenterology",
    category: "Acidity & GERD",
    composition: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate",
    dosageForm: "Oral Suspension",
    packaging: "200 ml bottle",
    description: "B2B catalogue entry for an oral suspension listed with sodium alginate, sodium bicarbonate, and calcium carbonate. Public pack imagery is withheld pending claim and document review; qualified organizations may request current, applicable information.",
    image: "/products/front-u-raft.jpg",
    gallery: ["/products/gallery/u-raft-1.jpg", "/products/gallery/u-raft-2.jpg", "/products/gallery/u-raft-3.jpg", "/products/gallery/u-raft-4.jpg", "/products/gallery/u-raft-6.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "rifadoxy-400",
    name: "Rifadoxy 400",
    division: "gastroenterology",
    category: "Antibiotic",
    composition: "Rifaximin IP 400 mg",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a tablet listed with rifaximin IP 400 mg, presented for qualified documentation, classification, and trade inquiries.",
    image: "/products/front-rifadoxy-400.jpg",
    gallery: ["/products/gallery/rifadoxy-400-1.jpg", "/products/gallery/rifadoxy-400-3.jpg", "/products/gallery/rifadoxy-400-4.jpg"],
    featured: false,
    popular: true,
  },
  {
    slug: "rifadoxy-550",
    name: "Rifadoxy 550",
    division: "gastroenterology",
    category: "Antibiotic",
    composition: "Rifaximin IP 550 mg",
    dosageForm: "Tablet",
    packaging: "10 x 10 Tablets",
    description: "B2B catalogue entry for a tablet listed with rifaximin IP 550 mg, presented for qualified documentation, classification, and trade inquiries.",
    image: "/products/front-rifadoxy-550.jpg",
    gallery: ["/products/gallery/rifadoxy-550-1.jpg", "/products/gallery/rifadoxy-550-2.jpg", "/products/gallery/rifadoxy-550-3.jpg"],
    featured: false,
    popular: true,
  },
];

export const stats = [
  { label: "Therapeutic Divisions", value: String(divisions.length) },
  { label: "Product Catalogue Entries", value: String(products.length) },
  { label: "Listed Categories", value: String(new Set(products.map((product) => product.category)).size) },
  { label: "Listed Dosage Forms", value: String(new Set(products.map((product) => product.dosageForm)).size) },
];

export type ArticleSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  sourceIds?: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  datePublished: string;
  dateModified: string;
  author: {
    type: "Organization";
    name: string;
    url: string;
  };
  tags: string[];
  sections: ArticleSection[];
  sources: ArticleSource[];
};

export const articles: Article[] = [
  {
    slug: "building-trust-in-pharmaceutical-distribution",
    title: "Building Trust in Pharmaceutical Distribution",
    category: "Distribution Quality",
    excerpt: "A B2B framework for evaluating identity, records, storage requirements, traceability, and escalation readiness across a medicine supply relationship.",
    date: "2026-05-18",
    datePublished: "2026-05-18",
    dateModified: "2026-08-14",
    author: { type: "Organization", name: site.name, url: site.url },
    tags: ["distribution", "documentation", "supply chain"],
    sections: [
      {
        heading: "Trust begins with a verifiable product identity",
        paragraphs: [
          "A trade catalogue is a discovery surface, not a substitute for controlled product records. Before a buyer compares commercial terms, the parties should align on the exact product name, listed composition, dosage form, pack configuration, intended market, and the legal entities responsible for the transaction. The aim is not to create a larger document bundle; it is to prevent two teams from discussing different product configurations under one familiar brand name.",
          "A practical inquiry therefore starts with a dated request and a clear purpose. A distributor evaluating a catalogue entry may need different evidence from a logistics provider confirming handling requirements. Recording the destination market and requested use of each document helps the responding team avoid sharing an obsolete, irrelevant, or non-applicable record.",
        ],
        bullets: [
          "Identify the catalogue entry and proposed destination market.",
          "Confirm the dosage form and commercial pack under review.",
          "Ask which records are current, controlled, and applicable to that configuration.",
          "Record the document version or effective date rather than relying on a filename alone.",
        ],
      },
      {
        heading: "Distribution quality extends beyond dispatch",
        paragraphs: [
          "The World Health Organization's good storage and distribution guidance describes risks across purchasing, storage, repackaging, relabelling, transportation, and distribution. Its scope includes manufacturers, wholesalers, brokers, suppliers, distributors, logistics providers, traders, and transport companies. For a B2B relationship, that makes hand-offs and responsibilities as important as the point of dispatch.",
          "The operational implication is straightforward: a partner should be able to explain who receives a shipment, who checks its identity and condition, which storage instructions govern it, how deviations are escalated, and what record connects receipt to onward supply. The appropriate controls depend on the product and jurisdiction, so an online product page should never be treated as the handling instruction.",
        ],
        sourceIds: ["who-gsdp"],
      },
      {
        heading: "Build a small, decision-ready evidence set",
        paragraphs: [
          "Document requests work best when they answer a decision. At an early qualification stage, a buyer might request the current label or artwork, pack details, applicable authorization information, and the storage or transport conditions stated in controlled records. At a later batch-specific stage, the parties can determine which quality or release documents are applicable and lawfully shareable.",
          "Not every record applies to every product or transaction. A declaration that a document is 'available' is not enough unless the responding party can confirm its scope, status, and relation to the proposed market. Equally, a missing document name on a website does not establish that the underlying control is absent. The qualified inquiry is where those distinctions should be resolved.",
        ],
        bullets: [
          "Current product identification and pack record",
          "Applicable market authorization or classification evidence",
          "Label-specified storage and transport conditions",
          "Batch-specific records, when applicable to the transaction",
          "Complaint, return, and escalation contact route",
        ],
      },
      {
        heading: "Traceability should be designed before an exception",
        paragraphs: [
          "A strong trade process does not wait for a complaint or transport deviation to decide what information matters. Teams can define in advance which identifiers will be captured at order, dispatch, receipt, and onward distribution; how a discrepancy is logged; who can stop a release or shipment; and how affected partners are contacted. This preparation reduces ambiguity when time matters.",
          "Useful measures are operational rather than promotional: completeness of agreed receipt records, time to acknowledge a document request, time to escalate a suspected discrepancy, and closure of corrective actions. These measures do not prove regulatory compliance on their own, but they make the relationship observable and easier to audit.",
        ],
      },
      {
        heading: "Use the governing rules, not shorthand badges",
        paragraphs: [
          "India's Central Drugs Standard Control Organization publishes the Drugs Rules and amendments through its official portal. The applicable obligations depend on the product, activity, licence, and current legal text. A website badge or a general statement such as 'quality approved' cannot establish that a particular product, site, or supply route meets a specific requirement.",
          "For due diligence, request the evidence relevant to the actual transaction and verify it against current official requirements with appropriately qualified regulatory or legal professionals. This article is an operational checklist, not a certification statement or legal interpretation.",
        ],
        sourceIds: ["cdsco-drugs-rules"],
      },
      {
        heading: "A practical first conversation",
        paragraphs: [
          "The most productive opening inquiry is specific: name the product entry, destination market, expected role in the supply chain, and the records needed for the next internal decision. The supplier can then confirm what is applicable, what can be shared, and what requires further review. Commercial discussions become more reliable when unanswered quality or classification questions remain visible rather than being converted into assumptions.",
          "Medoxy's online listings are structured for that B2B discovery step. They do not provide prescribing directions, patient advice, regulatory approval evidence, or batch release documentation. Those matters require current product-specific records and qualified review.",
        ],
      },
    ],
    sources: [
      {
        id: "who-gsdp",
        title: "TRS 1025, Annex 7: Good storage and distribution practices for medical products",
        publisher: "World Health Organization",
        url: "https://www.who.int/publications/m/item/trs-1025-annex-7",
      },
      {
        id: "cdsco-drugs-rules",
        title: "Drugs Rules, 1945 and published amendments",
        publisher: "Central Drugs Standard Control Organization, Government of India",
        url: "https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Drugs-Rules/",
      },
    ],
  },
  {
    slug: "quality-systems-for-modern-healthcare-brands",
    title: "Quality Systems for Modern Healthcare Brands",
    category: "Quality Systems",
    excerpt: "How B2B healthcare teams can turn quality language into scoped evidence, controlled records, vendor questions, and accountable follow-up.",
    date: "2026-04-26",
    datePublished: "2026-04-26",
    dateModified: "2026-08-14",
    author: { type: "Organization", name: site.name, url: site.url },
    tags: ["quality systems", "vendor qualification", "documentation"],
    sections: [
      {
        heading: "Quality is a system, not a finishing claim",
        paragraphs: [
          "The World Health Organization defines good manufacturing practices as part of quality assurance intended to ensure that medicinal products are consistently produced and controlled to standards appropriate to their intended use and product specification. WHO's explanation emphasizes defined, validated, reviewed, and documented processes together with suitable personnel, premises, and materials.",
          "For a healthcare brand or trade partner, the practical lesson is to ask how a claim is evidenced and scoped. A statement about a company, facility, vendor, product, or batch is not interchangeable with the others. The evidence should identify what was assessed, by whom, against which requirement, for what period, and whether the record applies to the product under discussion.",
        ],
        sourceIds: ["who-gmp"],
      },
      {
        heading: "Separate qualification evidence from marketing copy",
        paragraphs: [
          "A short public statement can explain a quality approach, but qualification decisions need controlled records. Teams should avoid translating a supplier's general capability statement into a product approval, site certification, or batch conclusion. Where a certificate or licence is relevant, its issuer, holder, scope, address, dates, and current status should be checked rather than inferred from a logo.",
          "This distinction protects both sides. The buyer receives evidence aligned to its decision, while the responding organization avoids making a broader representation than its documents support. When a record cannot be shared, the parties can document the limitation and decide whether an alternative verification method is acceptable.",
        ],
        bullets: [
          "What entity and site does the evidence cover?",
          "Which products, dosage forms, or activities are in scope?",
          "Who issued or approved the record, and is that authority relevant?",
          "What are the issue, effective, and expiry or review dates?",
          "Has the record been superseded, suspended, restricted, or amended?",
        ],
      },
      {
        heading: "Use a risk-based vendor file",
        paragraphs: [
          "A usable vendor file begins with the role the vendor will perform. A manufacturer, analytical laboratory, warehouse, transporter, artwork supplier, and commercial intermediary create different risks and therefore need different questions. The file should connect the approved scope to the contract, current contacts, change-notification expectations, issue history, and scheduled review.",
          "More documents do not automatically create more assurance. Duplicate certificates, undated presentations, and uncontrolled email attachments can obscure the current record. A concise index showing owner, version, scope, status, and next review date is often more useful than a folder that cannot be reconciled.",
        ],
      },
      {
        heading: "Keep batch-level questions batch-specific",
        paragraphs: [
          "Catalogue fields describe a product entry; they do not establish the status of a particular batch. When batch-level evidence is required, the request should identify the batch and the decision it supports. The responding party should confirm which record is applicable, who authorized it, and whether any open deviation, complaint, or change affects the proposed transaction.",
          "The WHO's current quality-assurance compendium spans quality management, manufacturing and control topics, inspection, complaint handling, and related regulatory guidance. It is a useful reference framework, but it is not evidence that any named company or product complies. Product-specific assurance still depends on applicable records and competent review.",
        ],
        sourceIds: ["who-quality-compendium"],
      },
      {
        heading: "Control changes across commercial and quality teams",
        paragraphs: [
          "Product information can change while an opportunity is being evaluated. A proposed change to composition wording, pack configuration, artwork, source, manufacturing location, shelf-life information, or handling condition may affect documents and commercial commitments. A quality system should define who assesses the change, who updates customer-facing material, and how affected partners are informed.",
          "Version control is especially important online. A product page should use qualified language and direct users to request current documents, because search indexes and screenshots can outlive the content they captured. When a page is corrected, the controlled internal source should remain the authority.",
        ],
      },
      {
        heading: "Measure response quality without inventing assurance",
        paragraphs: [
          "B2B teams can monitor whether agreed qualification actions are completed: document requests acknowledged, review questions closed, expired records replaced, changes assessed, and complaints routed to an accountable owner. These process measures help identify friction, but they should not be presented as proof of product quality or regulatory approval.",
          "Medoxy's catalogue separates public discovery information from qualification evidence. Product names, listed compositions, forms, and packs help a trade partner frame an inquiry; they remain subject to confirmation from current, applicable documents. No website statement should replace a buyer's regulatory, quality, clinical, or legal review.",
        ],
      },
    ],
    sources: [
      {
        id: "who-gmp",
        title: "Good Manufacturing Practices",
        publisher: "World Health Organization",
        url: "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/gmp",
      },
      {
        id: "who-quality-compendium",
        title: "Quality assurance of pharmaceuticals, Volume 2: Good manufacturing practices and inspection, 10th edition",
        publisher: "World Health Organization",
        url: "https://www.who.int/publications/i/item/9789240086081",
      },
    ],
  },
  {
    slug: "gastroenterology-catalogue-evaluation",
    title: "Gastroenterology Catalogue Evaluation for B2B Sourcing",
    category: "Catalogue Evaluation",
    excerpt: "A non-clinical method for navigating categories, comparing listed product attributes, and defining the documents needed for a qualified sourcing review.",
    date: "2026-03-12",
    datePublished: "2026-03-12",
    dateModified: "2026-08-14",
    author: { type: "Organization", name: site.name, url: site.url },
    tags: ["gastroenterology", "product catalogue", "B2B sourcing"],
    sections: [
      {
        heading: "Start with the sourcing question, not the category label",
        paragraphs: [
          "A therapeutic-category page can help a trade partner find catalogue entries, but the category is only a navigation aid. It does not establish an approved indication, clinical suitability, interchangeability, prescription classification, market authorization, or availability in a destination market. Those conclusions require product-specific evidence and appropriately qualified review.",
          "The first sourcing step is therefore to define the decision: portfolio mapping, preliminary supplier discovery, pack comparison, documentation review, or a market-specific commercial assessment. With the purpose stated, teams can collect only the fields needed to compare entries consistently and keep unresolved questions visible.",
        ],
      },
      {
        heading: "Compare structured catalogue fields carefully",
        paragraphs: [
          "Useful discovery fields include the product name, composition as listed, dosage form, release notation where shown, pack configuration, category, and the organization providing the listing. Each field needs its own verification. Similar names can refer to different strengths or release forms, and a composition summary may not reproduce every detail on a current approved label.",
          "A comparison table should preserve the wording supplied for each entry rather than normalizing important differences away. Abbreviations such as EC or SR can be recorded as catalogue text, but their regulatory and product significance should be confirmed from current documents. The online image can help identify a listing; it should not be used as the sole source for label, storage, authorization, or batch information.",
        ],
        bullets: [
          "Product and brand name exactly as listed",
          "Composition wording and any stated strength",
          "Dosage form and release notation",
          "Commercial pack configuration",
          "Destination market and proposed supply role",
          "Open questions requiring current documentation",
        ],
      },
      {
        heading: "Treat formulation and claims as regulatory questions",
        paragraphs: [
          "CDSCO's New Drugs and Clinical Trials Rules define regulatory concepts that can turn on claims, route, dosage form, combinations, and modified or sustained-release forms. That does not determine the status of any Medoxy catalogue entry. It does show why a buyer should not infer status from a familiar ingredient name or category alone.",
          "For each proposed market, qualified teams should verify the product's current classification, permissions, approved particulars, and supply conditions against applicable law and records. A general catalogue can route the question to the right product, but it cannot answer a jurisdiction-specific regulatory assessment.",
        ],
        sourceIds: ["cdsco-ndctr"],
      },
      {
        heading: "Make label and pack review a controlled step",
        paragraphs: [
          "CDSCO publishes the Drugs Rules and amendments on its official portal, including requirements relevant to drug labelling and packing. The current legal text and product-specific approvals should guide the review. A catalogue pack value or photograph may be useful for discovery, but buyers should request the current applicable label or artwork and verify the commercial pack before relying on it.",
          "A controlled review records the version examined, market, language, responsible entity, pack identifiers, storage statement, and any conditions that need clarification. If a difference appears between the website and controlled record, the discrepancy should be resolved before commercial use rather than silently harmonized in a spreadsheet.",
        ],
        sourceIds: ["cdsco-drugs-rules"],
      },
      {
        heading: "Connect catalogue selection to distribution requirements",
        paragraphs: [
          "Once a product entry reaches logistics review, the handling discussion must rely on its current controlled instructions. WHO guidance notes that medical products can face risks throughout purchasing, storage, relabelling, transportation, and distribution. Teams should define responsibility for storage conditions, receipt checks, deviations, returns, and traceability before a shipment is arranged.",
          "This is another reason not to publish a universal storage sentence across unrelated dosage forms. The applicable requirement belongs to the specific product record and supply route. The trade inquiry should ask for that record and confirm whether special transport or monitoring arrangements apply.",
        ],
        sourceIds: ["who-gsdp"],
      },
      {
        heading: "Use a staged B2B evaluation",
        paragraphs: [
          "A staged process keeps discovery efficient without lowering the evidence threshold. Stage one identifies potentially relevant catalogue entries. Stage two reconciles product identity and pack. Stage three verifies applicable regulatory and quality documents. Stage four reviews commercial, logistics, complaint, and change-management arrangements. An entry advances only when the open questions needed for that stage are resolved.",
          "Medoxy's gastroenterology division page supports stage-one navigation through current catalogue data. It is intended for healthcare and trade professionals seeking product information, not for diagnosis, prescribing, dispensing, or patient self-selection. Product suitability and lawful supply remain matters for qualified professionals using current evidence.",
        ],
      },
    ],
    sources: [
      {
        id: "cdsco-ndctr",
        title: "New Drugs and Clinical Trials Rules, 2019",
        publisher: "Central Drugs Standard Control Organization, Government of India",
        url: "https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/New-Drugs/",
      },
      {
        id: "cdsco-drugs-rules",
        title: "Drugs Rules, 1945 and published amendments",
        publisher: "Central Drugs Standard Control Organization, Government of India",
        url: "https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Drugs-Rules/",
      },
      {
        id: "who-gsdp",
        title: "TRS 1025, Annex 7: Good storage and distribution practices for medical products",
        publisher: "World Health Organization",
        url: "https://www.who.int/publications/m/item/trs-1025-annex-7",
      },
    ],
  },
];
