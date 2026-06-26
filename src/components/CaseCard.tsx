import type { ResultCase } from "@/data/results";

type CaseCardProps = {
  result: ResultCase;
};

export function CaseCard({ result }: CaseCardProps) {
  return (
    <article className="border border-sand/18 bg-gradient-to-br from-sand/[0.07] via-[#201d19] to-moss/10 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand/80">
        Case apresentado
      </p>
      <h3 className="mt-4 font-display text-3xl text-antique">{result.client}</h3>
      <p className="mt-2 text-sm text-antique/60">Segmento: {result.segment}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {result.metrics.map((metric) => (
          <div key={metric.label} className="border border-sand/14 bg-charcoal/40 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/72">{metric.label}</p>
            <p className="mt-3 font-display text-xl leading-snug text-antique">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {result.strategies.map((strategy) => (
          <span
            key={strategy}
            className="border border-sand/20 px-3 py-2 text-xs text-antique/70"
          >
            {strategy}
          </span>
        ))}
      </div>
      <p className="mt-7 text-sm leading-7 text-antique/55">{result.observation}</p>
    </article>
  );
}
