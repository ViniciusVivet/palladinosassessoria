type ProblemCardProps = {
  title: string;
  description: string;
};

export function ProblemCard({ title, description }: ProblemCardProps) {
  return (
    <article className="group border border-sand/14 bg-antique/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sand/38 hover:bg-sand/[0.06]">
      <div className="mb-5 h-px w-12 bg-sand/55 transition group-hover:w-20" />
      <h3 className="font-display text-xl text-antique">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-antique/62">{description}</p>
    </article>
  );
}
