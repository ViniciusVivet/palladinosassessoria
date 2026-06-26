import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  image?: boolean;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export function Hero({
  title,
  subtitle,
  eyebrow = "Parece magia, mas é marketing.",
  image = false,
  primaryCta = "Solicitar diagnóstico",
  secondaryCta,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-32">
      <div className="absolute inset-0 -z-20 bg-page-texture" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(200,184,154,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(200,184,154,.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sand">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl font-display text-4xl leading-[1.04] text-antique sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-antique/74 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Olá, vim pelo site da Palladinos e quero solicitar um diagnóstico.">
              {primaryCta}
            </WhatsAppButton>
            {secondaryCta && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryCta}
              </Button>
            ) : null}
          </div>
          <DecorativeDivider />
          <div className="grid gap-4 text-sm text-antique/60 sm:grid-cols-3">
            <p>Posicionamento com direção comercial.</p>
            <p>Campanhas conectadas à venda.</p>
            <p>Suporte incluso em todos os planos.</p>
          </div>
        </div>

        {image ? (
          <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
            <div className="absolute -inset-5 border border-sand/12" aria-hidden="true" />
            <div className="relative overflow-hidden border border-sand/20 bg-earth/25 shadow-ember">
              <Image
                src="/images/palladinos-hero.png"
                alt="Representação editorial de um paladino como símbolo de estratégia e proteção."
                width={1200}
                height={1400}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 border border-sand/20 bg-charcoal/72 p-4 backdrop-blur">
                <p className="font-display text-xl text-sand">Estratégia antes do avanço.</p>
                <p className="mt-2 text-sm leading-6 text-antique/65">
                  Método, posicionamento e execução para negócios que precisam crescer com clareza.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
