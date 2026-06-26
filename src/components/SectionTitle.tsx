type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sand/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-antique sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-8 text-antique/72 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
