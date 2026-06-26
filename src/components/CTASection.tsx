import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  text,
  primaryLabel = "Solicitar diagnóstico",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-sand/10 bg-earth/35 py-20">
      <div className="absolute inset-0 bg-page-texture opacity-70" />
      <Container className="relative text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sand">
          Próximo movimento
        </p>
        <h2 className="mx-auto max-w-4xl font-display text-3xl leading-tight text-antique sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-antique/70">
          {text}
        </p>
        <DecorativeDivider />
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton message="Olá, vim pelo site da Palladinos e quero solicitar um diagnóstico.">
            {primaryLabel}
          </WhatsAppButton>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
