type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <article className="relative border-l border-sand/25 pl-6">
      <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center border border-sand/40 bg-charcoal font-display text-sm text-sand">
        {number}
      </span>
      <h3 className="font-display text-xl text-antique">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-antique/62">{description}</p>
    </article>
  );
}
