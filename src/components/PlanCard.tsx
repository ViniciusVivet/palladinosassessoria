import Image from "next/image";
import { Button } from "@/components/Button";
import { buildPlanWhatsAppLink } from "@/config/contact";
import type { Plan } from "@/data/plans";
import { cn } from "@/lib/utils";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden border bg-[#1f1b18] transition duration-300 hover:-translate-y-1 hover:shadow-ember",
        plan.featured
          ? "border-sand/70 bg-gradient-to-b from-moss/30 via-[#1f1b18] to-earth/50"
          : "border-sand/16 hover:border-sand/38",
      )}
    >
      {plan.visual ? (
        <div className="relative border-b border-sand/14 bg-charcoal">
          <Image
            src={plan.visual.src}
            alt={plan.visual.alt}
            width={900}
            height={900}
            className="aspect-[16/10] w-full object-cover opacity-88"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18] via-transparent to-transparent" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {plan.badge ? (
          <p className="mb-5 w-fit border border-sand/40 bg-sand px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink">
            {plan.badge}
          </p>
        ) : null}
        <h3 className="font-display text-2xl text-antique">{plan.name}</h3>
        <p className="mt-4 font-display text-3xl text-sand">{plan.price}</p>
        <p className="mt-5 text-sm leading-7 text-antique/65">{plan.description}</p>
        <ul className="mt-6 grid gap-3 text-sm text-antique/72">
          {plan.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-sand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {plan.note ? (
          <p className="mt-5 border-l border-sand/35 pl-4 text-xs leading-6 text-antique/55">
            {plan.note}
          </p>
        ) : null}
        <Button
          href={buildPlanWhatsAppLink(plan.name)}
          external
          className="mt-auto w-full"
          variant={plan.featured ? "primary" : "secondary"}
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}
