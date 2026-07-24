export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-header mb-12 max-w-4xl">
      {eyebrow ? <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-medoxy-primary">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#071b35] md:text-6xl">{title}</h2>
      {text ? <p className="mt-5 max-w-3xl text-lg leading-8 text-medoxy-muted">{text}</p> : null}
    </div>
  );
}
