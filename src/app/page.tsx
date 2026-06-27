import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/Button";
import { CaseCard } from "@/components/CaseCard";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { ProblemCard } from "@/components/ProblemCard";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { contact } from "@/config/contact";
import { plans } from "@/data/plans";
import { posts } from "@/data/posts";
import { resultCases } from "@/data/results";

const bottlenecks = [
  {
    title: "A marca aparece, mas não ocupa posição",
    description:
      "O cliente vê a empresa, mas não entende por que escolher, quanto vale ou qual próximo passo tomar.",
  },
  {
    title: "O anúncio gera interesse, mas o comercial perde ritmo",
    description:
      "Lead sem abordagem, resposta ou follow-up vira número bonito em relatório e dinheiro parado no caminho.",
  },
  {
    title: "O conteúdo existe, mas não constrói demanda",
    description:
      "Post solto mantém o perfil ativo, mas não cria autoridade, desejo e confiança para uma conversa de venda.",
  },
  {
    title: "Cada ação começa do zero",
    description:
      "Sem método, a empresa troca campanha, texto e promessa toda semana, mas não constrói um sistema de crescimento.",
  },
];

const operatingPrinciples = [
  {
    title: "Clareza antes de volume",
    description:
      "Antes de publicar ou anunciar mais, a Palladinos organiza mensagem, oferta, canais e caminho comercial.",
  },
  {
    title: "Campanha com destino",
    description:
      "Tráfego e conteúdo são pensados para levar o cliente a uma conversa possível, não só a uma métrica bonita.",
  },
  {
    title: "Suporte depois do interesse",
    description:
      "Todo plano inclui orientação comercial para melhorar resposta, abordagem, proposta e acompanhamento.",
  },
];

const process = [
  ["Diagnóstico", "Leitura dos canais, oferta, comunicação, gargalos e oportunidades comerciais."],
  ["Posicionamento", "Ajuste da mensagem para deixar valor, público e próximo passo mais evidentes."],
  ["Estratégia", "Definição do plano de ação conforme maturidade, urgência e capacidade de execução."],
  ["Execução", "Organização de canais, conteúdo, campanha e pontos de conversão."],
  ["Otimização", "Acompanhamento dos sinais do mercado e melhoria contínua das ações."],
  ["Suporte comercial", "Apoio para transformar interesse em conversa, proposta e venda."],
];

export default function Home() {
  const mainCase = resultCases[0];

  return (
    <>
      <Hero
        image
        title="Transforme atenção em faturamento com estratégia, posicionamento e campanhas que vendem."
        subtitle="A Palladinos trabalha onde muitos projetos quebram: entre a visibilidade e a venda. Posicionamos a marca, criamos demanda e acompanhamos o caminho comercial para pequenos e médios negócios crescerem com mais direção."
        secondaryCta="Ver planos"
        secondaryHref="/#planos"
      />

      <section
        className="section-pad relative isolate overflow-hidden border-y border-sand/10 bg-[#171717]"
        id="sobre"
      >
        <Image
          src="/images/background-tempos-antigos.jpeg"
          alt="Paisagem antiga com castelo ao fundo, usada como atmosfera institucional da Palladinos."
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/92 via-charcoal/84 to-charcoal/96" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-sand">
                Manifesto
              </p>
              <h2 className="font-display text-3xl leading-tight text-antique sm:text-5xl">
                Marketing não termina no clique.
              </h2>
            </div>
            <div className="border-l border-sand/28 pl-6">
              <p className="text-lg leading-9 text-antique/74">
                Em um mercado cheio de promessa vazia, a Palladinos existe para unir posicionamento, campanha e venda. Não é sobre postar por obrigação ou comprar clique por ansiedade. É sobre construir autoridade, gerar demanda e conduzir o interesse até uma decisão comercial.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionTitle
              eyebrow="O diagnóstico"
              title="O problema raramente é falta de esforço."
              subtitle="Muitos negócios já estão tentando vender online. O que falta é ordem: uma mensagem clara, uma campanha com destino e um processo comercial que não abandone o cliente no meio do caminho."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {bottlenecks.map((item) => (
                <ProblemCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-sand/10 bg-earth/25">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Sistema Palladinos"
                title="Primeiro se organiza o reino. Depois se avança."
                subtitle="A estratégia parte de três frentes de entrada: posicionamento digital, social media e tráfego pago. A diferença está em conectar essas frentes ao suporte comercial, para que o interesse gerado tenha caminho até a venda."
              />
              <div className="mt-8 grid gap-4">
                {operatingPrinciples.map((item) => (
                  <ServiceCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <figure className="overflow-hidden border border-sand/18 bg-[#111] shadow-ember">
              <Image
                src="/images/solucoes-premium.png"
                alt="Material visual da Palladinos apresentando soluções de posicionamento digital, tráfego pago e social media."
                width={1680}
                height={945}
                className="w-full object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section className="section-pad" id="planos">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionTitle
              eyebrow="Planos"
              title="Escolha o movimento certo para o momento do negócio."
              subtitle="Os planos não são uma prateleira genérica de serviços. Eles representam níveis diferentes de maturidade: organizar presença, construir autoridade, gerar demanda ou unir tudo em uma operação completa."
            />
            <div className="border border-sand/18 bg-moss/16 p-6">
              <p className="font-display text-2xl text-sand">
                Suporte comercial incluso em todos os planos.
              </p>
              <p className="mt-3 text-sm leading-7 text-antique/64">
                Porque o trabalho não termina quando alguém chama no WhatsApp. A Palladinos acompanha abordagem, clareza de oferta e próximos passos para reduzir desperdício entre interesse e venda.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.slice(0, 3).map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-md">
            <PlanCard plan={plans[3]} />
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-sand/10 bg-[#151515]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Operação"
                title="O método por trás da magia."
                subtitle="A estética é medieval, mas a operação precisa ser objetiva. Cada etapa existe para tirar o negócio do improviso e aproximar marketing da realidade comercial."
              />
              <DecorativeDivider />
              <p className="text-sm leading-7 text-antique/58">
                O objetivo não é vender ilusão de resultado garantido. É criar um processo mais claro, mensurável e ajustável conforme mercado, oferta e capacidade de atendimento.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-9 md:grid-cols-2">
              {process.map(([title, description], index) => (
                <ProcessStep
                  key={title}
                  number={String(index + 1).padStart(2, "0")}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="border border-sand/18 bg-earth/32 p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sand">
                Quem conduz
              </p>
              <h2 className="mt-4 font-display text-4xl text-antique">
                Da batalha ao método.
              </h2>
              <DecorativeDivider />
              <p className="text-base leading-8 text-antique/70">
                Gustavo Sofredini iniciou sua jornada no marketing ainda jovem, aprendendo na prática a vender por conteúdo, construir marcas e enfrentar os desafios reais do empreendedorismo. Depois de experiências, quedas e aprendizados em gestão, vendas e posicionamento, nasce a Palladinos: uma assessoria criada para ajudar pequenos e médios negócios a construírem operações mais fortes, lucrativas e duradouras.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="border border-sand/16 p-6">
                <p className="font-display text-3xl text-sand">Gustavo Sofredini</p>
                <p className="mt-2 text-antique/70">CEO da Palladinos</p>
              </div>
              <div className="border border-sand/16 p-6">
                <p className="text-antique/70">
                  Gestor de tráfego, social media, copywriter e estrategista comercial.
                </p>
                <a className="mt-4 inline-block text-sand" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-moss/12">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Prova"
              title="Resultado não é promessa. É processo."
              subtitle="O case abaixo é apresentado como referência de aplicação, não como garantia universal. Performance varia conforme mercado, oferta, maturidade comercial e execução."
            />
            <Button href="/resultados" variant="secondary">
              Ver resultados
            </Button>
          </div>
          <CaseCard result={mainCase} />
        </Container>
      </section>

      <section className="section-pad bg-[#151515]">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Leitura estratégica"
              title="Antes de investir mais, pense melhor."
              subtitle="O blog sustenta autoridade com temas que conectam posicionamento, campanha e venda."
            />
            <Link className="text-sm uppercase tracking-[0.2em] text-sand" href="/blog">
              Ver blog
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Chega de empilhar ação sem direção."
        text="Solicite um diagnóstico e entenda qual movimento faz mais sentido agora: organizar presença, fortalecer autoridade, ativar campanhas ou estruturar uma operação completa."
        secondaryLabel="Ver planos"
        secondaryHref="/#planos"
      />
    </>
  );
}
