import { Badge } from "./Badge";

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
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-black leading-tight text-medoxy-text md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-medoxy-muted">{text}</p> : null}
    </div>
  );
}
