import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { proofCards, resultCases } from "@/data/results";

export const metadata: Metadata = {
  title: "Resultados | Palladinos Assessoria",
  description:
    "Cases e provas de autoridade da Palladinos Assessoria em posicionamento digital, conteúdo orgânico, tráfego pago e suporte comercial.",
};

export default function ResultadosPage() {
  return (
    <>
      <Hero
        title="Resultados que não dependem de sorte."
        subtitle="Estratégia, posicionamento e campanhas bem executadas criam caminhos mais claros entre visibilidade, demanda e faturamento."
        eyebrow="Cases e provas"
        primaryCta="Quero um diagnóstico"
      />

      <section className="section-pad">
        <Container>
          <SectionTitle
            eyebrow="Case principal"
            title="Psicologia do Esporte com posicionamento, conteúdo e campanha."
            subtitle="Os dados abaixo são apresentados como referência do material da Palladinos, não como promessa de resultado garantido."
          />
          <div className="mt-10">
            <CaseCard result={resultCases[0]} />
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-sand/10 bg-[#151515]">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Provas de construção"
            title="Três frentes que aproximam visibilidade e venda."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {proofCards.map((card) => (
              <ServiceCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mx-auto max-w-4xl border border-sand/16 bg-earth/28 p-8 text-center sm:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sand">
              Processo
            </p>
            <h2 className="font-display text-3xl text-antique sm:text-5xl">
              Resultado não é promessa. É processo.
            </h2>
            <p className="mt-6 text-base leading-8 text-antique/70">
              A Palladinos trabalha com diagnóstico, execução, acompanhamento e ajustes constantes. O objetivo é criar um sistema que aproxime marketing e venda, respeitando o momento de cada negócio.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer entender o caminho mais claro para o seu negócio?"
        text="Solicite um diagnóstico para sua empresa e veja quais ajustes podem fortalecer posicionamento, campanha e comercial."
        primaryLabel="Quero um diagnóstico para minha empresa"
      />
    </>
  );
}
