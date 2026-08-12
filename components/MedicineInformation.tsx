"use client";

import { AlertTriangle, Baby, Car, CheckCircle2, ChevronDown, Droplets, GlassWater, HeartPulse, Lightbulb, ShieldAlert, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

type Props = { name: string; dosageForm: string; composition: string; category: string; description: string };

type Guide = {
  uses: string[];
  benefit: string;
  effects: string[];
  mechanism: string;
  tips: string[];
};

const guides: Record<string, Guide> = {
  "Acidity & GERD": {
    uses: ["Acid reflux and heartburn", "Gastroesophageal reflux disease (GERD)", "Acid-related digestive discomfort"],
    benefit: "This formulation supports physician-directed control of gastric acidity and related reflux symptoms. The expected benefit and duration depend on the diagnosed condition and prescribed regimen.",
    effects: ["Headache", "Nausea", "Abdominal discomfort", "Diarrhoea", "Constipation", "Dizziness"],
    mechanism: "The active ingredients work through acid-control, protective, or motility-support pathways according to the formulation shown on the product label.",
    tips: ["Take it at the time and for the duration prescribed.", "Tell your doctor if reflux symptoms persist or worsen.", "Discuss all other medicines and supplements you use.", "Avoid changing or stopping treatment without medical advice."],
  },
  Antispasmodic: {
    uses: ["Intestinal spasm support", "Abdominal cramp management", "Physician-directed irritable bowel symptom care"],
    benefit: "Antispasmodic therapy may help relax gastrointestinal smooth muscle and reduce spasm-related pain or discomfort when selected by a clinician.",
    effects: ["Dizziness", "Drowsiness", "Dry mouth", "Nausea", "Constipation", "Allergic reaction"],
    mechanism: "The formulation is intended to reduce gastrointestinal smooth-muscle spasm. Combination products may include an additional medicine that acts on the nervous system.",
    tips: ["Use only for the condition and duration prescribed.", "Avoid driving if you feel sleepy or dizzy.", "Do not combine with alcohol unless your doctor confirms it is appropriate.", "Do not stop certain combination medicines suddenly without medical advice."],
  },
  "Hepatobiliary Care": {
    uses: ["Physician-directed biliary care", "Selected cholesterol gallstone management", "Support in specified cholestatic liver conditions"],
    benefit: "Ursodeoxycholic acid can improve bile flow and alter bile composition in selected hepatobiliary conditions. Suitability requires medical assessment.",
    effects: ["Diarrhoea", "Abdominal discomfort", "Nausea", "Indigestion", "Rash"],
    mechanism: "Ursodeoxycholic acid modifies bile composition and may help protect liver and bile-duct cells in appropriately diagnosed conditions.",
    tips: ["Attend any liver-function or imaging follow-up requested by your doctor.", "Take doses consistently with the prescribed schedule.", "Tell your doctor about persistent diarrhoea or abdominal pain.", "Do not use it to self-treat gallbladder symptoms."],
  },
  "Ulcer Care": {
    uses: ["Ulcer-related discomfort", "Acid-related pain and irritation", "Protection of the upper gastrointestinal lining"],
    benefit: "The suspension is intended to coat and protect irritated gastrointestinal tissue while supporting relief from acid-related discomfort under medical supervision.",
    effects: ["Constipation", "Dry mouth", "Nausea", "Dizziness", "Abdominal discomfort"],
    mechanism: "Sucralfate forms a protective barrier over irritated tissue, while oxetacaine provides local relief from pain associated with acidity.",
    tips: ["Shake oral suspension well before use.", "Use a proper measuring cup or spoon.", "Separate other medicines if your doctor or pharmacist advises it.", "Seek advice if pain, vomiting, or dark stools occur."],
  },
  Probiotic: {
    uses: ["Digestive flora support", "Antibiotic-associated diarrhoea support", "Restoration of intestinal microbial balance"],
    benefit: "Probiotic yeast may help restore intestinal microbial balance and support recovery from selected types of diarrhoea when recommended by a clinician.",
    effects: ["Gas", "Bloating", "Constipation", "Thirst", "Rare allergic reaction"],
    mechanism: "Saccharomyces boulardii is a probiotic yeast that supports the intestinal environment and helps limit the effects of certain harmful microorganisms.",
    tips: ["Do not mix the capsule contents with very hot food or drink.", "Ask your doctor before use if you are severely immunocompromised.", "Maintain adequate fluid intake during diarrhoea.", "Seek care for blood in stool, fever, or dehydration."],
  },
  "Nutritional Support": {
    uses: ["Nutritional supplementation", "Micronutrient and antioxidant support", "Support where dietary intake is inadequate"],
    benefit: "This nutritional formulation supplies selected vitamins, minerals, fatty acids, or antioxidants to complement—not replace—a balanced diet when professionally recommended.",
    effects: ["Nausea", "Stomach upset", "Aftertaste", "Constipation", "Loose stools", "Allergic reaction"],
    mechanism: "Its ingredients contribute to normal metabolic, antioxidant, and nutritional functions according to their individual roles in the body.",
    tips: ["Take it with food if advised to reduce stomach upset.", "Do not exceed the recommended amount.", "Tell your doctor about other supplements to avoid duplication.", "Store the product away from heat, light, and moisture."],
  },
  Antibiotic: {
    uses: ["Physician-directed intestinal antibiotic therapy", "Selected bacterial gastrointestinal conditions", "Specified hepatic encephalopathy risk reduction regimens"],
    benefit: "Rifaximin acts mainly within the intestine and may reduce susceptible bacteria in specifically diagnosed conditions. It must be used only for the prescribed indication and course.",
    effects: ["Nausea", "Abdominal pain", "Headache", "Dizziness", "Fatigue", "Bowel changes"],
    mechanism: "Rifaximin inhibits bacterial RNA synthesis, limiting the growth of susceptible bacteria primarily within the gastrointestinal tract.",
    tips: ["Complete the course exactly as prescribed.", "Do not use antibiotics for viral illness or without medical advice.", "Tell your doctor about severe or persistent diarrhoea.", "Do not share this medicine with another person."],
  },
};

const safety = [
  [GlassWater, "Alcohol", "Consult your doctor", "Ask your doctor whether alcohol is appropriate while you are taking this medicine."],
  [Baby, "Pregnancy", "Consult your doctor", "Tell your doctor if you are pregnant, planning a pregnancy, or think you may be pregnant."],
  [HeartPulse, "Breastfeeding", "Consult your doctor", "Discuss breastfeeding with your doctor before using this medicine."],
  [Car, "Driving", "Use caution", "Do not drive if you experience dizziness, drowsiness, or any symptom that affects concentration."],
  [Droplets, "Kidney", "Medical advice", "Tell your doctor about kidney disease and all medicines you currently take."],
  [ShieldAlert, "Liver", "Medical advice", "Patients with liver disease may require additional clinical review or dose adjustment."],
] as const;

export function MedicineInformation({ name, dosageForm, composition, category, description }: Props) {
  const form = dosageForm.toLowerCase();
  const guide = guides[category] ?? guides["Nutritional Support"];
  const [current, setCurrent] = useState(0);
  const nav = ["Introduction", "Uses & benefits", "Side effects", "How to use & works", "Quick tips", "Safety advice"];

  useEffect(() => {
    const sections = nav.map((_, index) => document.getElementById(`medicine-info-${index}`)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setCurrent(Number((entry.target as HTMLElement).dataset.index))), { rootMargin: "-20% 0px -65%" });
    sections.forEach((section) => observer.observe(section));
    const syncDisclosureState = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      sections.forEach((section, index) => {
        if (section instanceof HTMLDetailsElement) section.open = desktop || index === 0;
      });
    };
    syncDisclosureState();
    window.addEventListener("resize", syncDisclosureState);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncDisclosureState);
    };
  }, []);

  const Summary = ({ title }: { title: string }) => <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-lg font-black text-medoxy-text marker:hidden lg:hidden">{title}<ChevronDown size={20} className="transition group-open:rotate-180"/></summary>;
  return (
    <section className="border-b border-slate-200 bg-white py-14 md:py-20">
      <div className="container-grid grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 text-sm font-bold text-medoxy-muted">
            {nav.map((item, index) => (
              <a key={item} href={`#medicine-info-${index}`} className={`block rounded-xl px-4 py-3 transition ${current === index ? "bg-white text-medoxy-primary shadow-sm" : "hover:bg-white hover:text-medoxy-primary"}`}>{item}</a>
            ))}
          </div>
        </aside>
        <div className="min-w-0 overflow-hidden">
          <p className="text-xs font-black uppercase tracking-[.16em] text-medoxy-primary">Medicine guide</p>
          <details open id="medicine-info-0" data-index="0" className="group scroll-mt-28 border-b border-slate-200">
            <Summary title="Product introduction" />
            <div className="min-w-0 pb-7 lg:pb-9"><h2 className="hidden text-3xl font-black tracking-tight text-medoxy-text lg:block">Product introduction</h2><p className="mt-1 max-w-4xl break-words text-[17px] leading-8 text-medoxy-muted lg:mt-4"><strong className="text-medoxy-text">{name}</strong> contains {composition}. {description} This information is a general product guide and does not replace advice from your doctor or pharmacist.</p></div>
          </details>

          <details id="medicine-info-1" data-index="1" className="group scroll-mt-28 border-b border-slate-200">
            <Summary title={`Uses & benefits of ${name}`} />
            <div className="pb-7 lg:py-9">
            <h2 className="text-2xl font-black text-medoxy-text">Uses of {name}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {guide.uses.map((use) => <div key={use} className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 font-bold leading-6 text-medoxy-text"><CheckCircle2 className="mt-0.5 shrink-0 text-medoxy-primary" size={19}/>{use}</div>)}
            </div>
            <h3 className="mt-9 text-xl font-black text-medoxy-text">Benefits of {name}</h3>
            <p className="mt-3 text-[17px] leading-8 text-medoxy-muted">{guide.benefit}</p>
            </div>
          </details>

          <details id="medicine-info-2" data-index="2" className="group scroll-mt-28 border-b border-slate-200">
            <Summary title={`Side effects of ${name}`} />
            <div className="pb-7 lg:py-9">
            <div className="flex items-center gap-3"><AlertTriangle className="text-amber-500"/><h2 className="text-2xl font-black text-medoxy-text">Side effects of {name}</h2></div>
            <p className="mt-3 leading-7 text-medoxy-muted">Many people do not experience serious side effects. Effects reported with medicines in this formulation or category may include:</p>
            <div className="mt-5 flex flex-wrap gap-2">{guide.effects.map((effect)=><span key={effect} className="rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-2 text-sm font-bold text-medoxy-text">{effect}</span>)}</div>
            <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950">Seek urgent medical care for signs of a severe allergic reaction, severe or persistent diarrhoea, unusual rash, difficulty breathing, or other serious symptoms.</p>
            </div>
          </details>

          <details id="medicine-info-3" data-index="3" className="group scroll-mt-28 border-b border-slate-200">
            <Summary title="How to use & how it works" />
            <div className="grid pb-7 md:grid-cols-2 lg:py-9">
            <div className="md:border-r md:border-slate-200 md:pr-8">
              <h2 className="text-2xl font-black text-medoxy-text">How to use {name}</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">Take this {form} exactly as directed by your doctor. Swallow it whole with water; do not crush or chew it unless your pharmacist confirms that your specific formulation permits this. Do not alter the dose or stop treatment without medical advice.</p>
            </div>
            <div className="mt-7 md:mt-0 md:pl-8">
              <h2 className="text-2xl font-black text-medoxy-text">How {name} works</h2>
              <p className="mt-3 leading-7 text-medoxy-muted">{guide.mechanism}</p>
            </div>
            </div>
          </details>

          <details id="medicine-info-4" data-index="4" className="group scroll-mt-28 border-b border-slate-200">
            <Summary title="Quick tips" />
            <div className="pb-7 lg:py-9">
            <div className="flex items-center gap-3"><Lightbulb className="text-amber-500"/><h2 className="text-2xl font-black text-medoxy-text">Quick tips</h2></div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">{[...guide.tips, "Keep the medicine in its original pack and out of reach of children."].map((tip)=><li key={tip} className="flex gap-3 rounded-xl bg-[#f8fafc] p-4 text-sm font-semibold leading-6 text-medoxy-muted"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18}/>{tip}</li>)}</ul>
            </div>
          </details>

          <details id="medicine-info-5" data-index="5" className="group scroll-mt-28">
            <Summary title="Safety advice" />
            <div className="pb-2 lg:pt-9">
            <div className="flex items-center gap-3"><Stethoscope className="text-medoxy-primary"/><h2 className="text-2xl font-black text-medoxy-text">Safety advice</h2></div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              {safety.map(([Icon, title, status, description]) => <div key={title} className="grid gap-4 border-b border-dashed border-slate-200 p-5 last:border-0 sm:grid-cols-[48px_1fr] sm:p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500"><Icon size={24}/></div><div><div className="flex flex-wrap items-center gap-3"><h3 className="font-black text-medoxy-text">{title}</h3><span className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-950">{status}</span></div><p className="mt-2 leading-7 text-medoxy-muted">{description}</p></div></div>)}
            </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
