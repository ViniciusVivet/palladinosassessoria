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
import { buildPlanWhatsAppLink, contact } from "@/config/contact";
import { plans } from "@/data/plans";
import { posts } from "@/data/posts";
import { resultCases } from "@/data/results";

const problems = [
  ["Empresas que postam, mas não vendem", "Presença sem intenção comercial cria movimento, mas não necessariamente cria demanda."],
  ["Anúncios que geram cliques, mas não faturamento", "Tráfego sem oferta, atendimento e acompanhamento vira custo difícil de defender."],
  ["Conteúdo sem estratégia", "Publicações soltas enfraquecem a percepção da marca e confundem o cliente ideal."],
  ["Falta de posicionamento", "Quando a empresa não ocupa um lugar claro, o mercado escolhe pelo menor preço."],
  ["Leads que não viram conversa comercial", "Oportunidades se perdem quando não existe cadência, abordagem e direção."],
  ["Negócios presos em ações soltas", "Sem método, cada campanha começa do zero e o crescimento fica instável."],
  ["Empreendedores cansados de promessas", "O mercado aprendeu a desconfiar de discursos bonitos sem processo real por trás."],
];

const process = [
  ["Diagnóstico", "Leitura do momento atual, canais, oferta, pontos de perda e oportunidades."],
  ["Posicionamento", "Ajuste da mensagem para tornar valor, público e próximo passo mais claros."],
  ["Estratégia", "Definição de movimentos, campanhas e prioridade conforme maturidade do negócio."],
  ["Execução", "Criação, publicação, campanha e organização dos canais de conversão."],
  ["Otimização", "Acompanhamento de sinais, ajustes e melhoria contínua das ações."],
  ["Suporte comercial", "Apoio para transformar interesse em conversa, proposta e venda."],
];

const productVisuals = [
  {
    planName: "Posicionamento",
    title: "Posicionamento Digital",
    image: "/images/produto-posicionamento-digital.png",
    alt: "Arte comercial do plano Posicionamento Digital da Palladinos, com descrição e valor de R$ 500.",
    cta: "Quero posicionar minha marca",
  },
  {
    planName: "Tráfego Pago",
    title: "Tráfego Pago",
    image: "/images/produto-trafego-pago.png",
    alt: "Arte comercial do plano Tráfego Pago da Palladinos, com descrição e valor de R$ 1.500.",
    cta: "Quero campanhas pagas",
  },
  {
    planName: "Social Media",
    title: "Social Media",
    image: "/images/produto-social-media.png",
    alt: "Arte comercial do plano Social Media da Palladinos, com descrição e valor de R$ 1.500.",
    cta: "Quero fortalecer minhas redes",
  },
];

export default function Home() {
  const mainCase = resultCases[0];

  return (
    <>
      <Hero
        image
        title="Transforme atenção em faturamento com estratégia, posicionamento e campanhas que vendem."
        subtitle="A Palladinos une marketing digital, campanhas orgânicas, tráfego pago e assessoria comercial para ajudar pequenos e médios negócios a crescerem com método, clareza e direção."
        secondaryCta="Ver planos"
        secondaryHref="/#planos"
      />

      <section className="section-pad relative isolate overflow-hidden border-y border-sand/10 bg-[#171717]" id="sobre">
        <Image
          src="/images/background-tempos-antigos.jpeg"
          alt="Paisagem antiga com castelo ao fundo, usada como atmosfera institucional da Palladinos."
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-[0.38]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/88 via-charcoal/82 to-charcoal/94" />
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-sand">
              Manifesto
            </p>
            <h2 className="font-display text-3xl text-antique sm:text-5xl">
              Marketing não termina no clique.
            </h2>
            <DecorativeDivider />
            <p className="text-lg leading-9 text-antique/72">
              Em um mercado saturado de promessas vazias, a Palladinos nasce para unir posicionamento, campanha e venda. Não criamos apenas presença digital. Construímos clareza, autoridade e caminhos comerciais para transformar visibilidade em crescimento real.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionTitle
            eyebrow="O campo mudou"
            title="O mercado cresceu. A confiança diminuiu."
            subtitle="Pequenos e médios negócios não precisam de mais ruído. Precisam de direção, execução e um caminho comercial que sustente o crescimento."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map(([title, description]) => (
              <ProblemCard key={title} title={title} description={description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-earth/25">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionTitle
              eyebrow="Solução"
              title="A Palladinos conecta marketing, vendas e crescimento."
              subtitle="Nosso método combina posicionamento digital, campanhas orgânicas, tráfego pago e acompanhamento comercial para criar um sistema de crescimento mais consistente para pequenos e médios negócios."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <ServiceCard title="Posicionamento Digital" description="Organização de presença, mensagem e canais para sua empresa ser entendida com mais clareza." />
              <ServiceCard title="Campanhas Orgânicas" description="Conteúdo com intenção comercial, autoridade e consistência para preparar o terreno da venda." />
              <ServiceCard title="Campanhas Pagas" description="Tráfego orientado por público, oferta e acompanhamento de oportunidades." />
            </div>
          </div>
          <div className="mt-10 border border-sand/22 bg-moss/20 p-6 sm:p-8">
            <p className="font-display text-2xl text-sand">
              Assessoria e Suporte Comercial incluídos em todos os planos
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-antique/65">
              O avanço não termina quando o lead chega. A Palladinos acompanha o caminho entre interesse, conversa, proposta e decisão.
            </p>
          </div>
          <div className="mt-10 grid gap-8 border border-sand/16 bg-charcoal/62 p-5 shadow-ember lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sand">
                Mapa de soluções
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-antique">
                O tabuleiro completo dos primeiros movimentos.
              </h3>
              <p className="mt-5 text-sm leading-7 text-antique/65">
                O material institucional da Palladinos apresenta as três frentes de entrada para negócios que precisam organizar presença, demanda e venda: posicionamento digital, tráfego pago e social media. Os detalhes editáveis ficam nos planos abaixo, mantendo clareza para o cliente e flexibilidade para evolução comercial.
              </p>
            </div>
            <figure className="relative overflow-hidden border border-sand/18 bg-[#111]">
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
          <SectionTitle
            align="center"
            eyebrow="Planos"
            title="Escolha o plano ideal para fortalecer o seu reino."
            subtitle="Todos os planos da Palladinos incluem assessoria e suporte comercial, porque marketing só faz sentido quando ajuda sua empresa a vender mais."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <div className="mt-16 border-t border-sand/10 pt-12">
            <div className="mb-8 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sand">
                Produtos em destaque
              </p>
              <h3 className="font-display text-3xl leading-tight text-antique sm:text-4xl">
                As três primeiras ofertas, com linguagem pronta para decisão.
              </h3>
              <p className="mt-5 text-sm leading-7 text-antique/65">
                Essas artes reforçam a percepção premium dos produtos principais. Os cards acima continuam como fonte editável do site, enquanto as imagens funcionam como material comercial para leitura rápida e compartilhamento visual.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {productVisuals.map((product) => (
                <article
                  key={product.title}
                  className="group border border-sand/16 bg-[#151515] p-3 transition duration-300 hover:-translate-y-1 hover:border-sand/42 hover:shadow-ember"
                >
                  <figure className="overflow-hidden border border-sand/12 bg-charcoal">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={1152}
                      height={1536}
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </figure>
                  <div className="p-4">
                    <h4 className="font-display text-xl text-antique">{product.title}</h4>
                    <Button
                      href={buildPlanWhatsAppLink(product.planName)}
                      external
                      variant="secondary"
                      className="mt-5 w-full"
                    >
                      {product.cta}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-sand/10 bg-[#151515]">
        <Container>
          <SectionTitle
            eyebrow="Diferencial"
            title="O diferencial está depois do clique."
            subtitle="Enquanto muitas agências entregam apenas posts, relatórios e anúncios, a Palladinos acompanha o caminho comercial. Todo plano inclui suporte para ajudar sua empresa a transformar interesse em conversa, conversa em proposta e proposta em venda."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ServiceCard title="Foco em faturamento" description="A estratégia é pensada para aproximar marketing da realidade comercial do negócio." />
            <ServiceCard title="Suporte próximo" description="Acompanhamento para ajustar abordagem, canais e próximos passos com mais clareza." />
            <ServiceCard title="Acessível para PMEs" description="Planos objetivos para pequenos e médios negócios que precisam começar com método." />
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="border border-sand/18 bg-earth/35 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sand">
                Jornada do fundador
              </p>
              <h2 className="mt-4 font-display text-4xl text-antique">Da batalha ao método.</h2>
              <DecorativeDivider />
              <p className="text-base leading-8 text-antique/70">
                Gustavo Sofredini iniciou sua jornada no marketing ainda jovem, aprendendo na prática a vender por conteúdo, construir marcas e enfrentar os desafios reais do empreendedorismo. Depois de experiências, quedas e aprendizados em gestão, vendas e posicionamento, nasce a Palladinos: uma assessoria criada para ajudar pequenos e médios negócios a construírem impérios mais fortes, lucrativos e duradouros.
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

      <section className="section-pad bg-moss/15">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Método"
            title="O método por trás da magia."
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, description], index) => (
              <ProcessStep
                key={title}
                number={String(index + 1).padStart(2, "0")}
                title={title}
                description={description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Resultados"
              title="Resultados construídos com estratégia."
              subtitle="Indicadores apresentados como referência de case, sem promessa garantida de performance."
            />
            <Button href="/resultados" variant="secondary">
              Ver página de resultados
            </Button>
          </div>
          <CaseCard result={mainCase} />
        </Container>
      </section>

      <section className="section-pad bg-[#151515]">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Blog"
              title="Estratégia para ler antes de investir."
              subtitle="Artigos para pequenos e médios negócios que querem crescer com menos improviso."
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
        title="Pronto para parar de improvisar e crescer com estratégia?"
        text="Solicite um diagnóstico e descubra qual plano faz mais sentido para o momento do seu negócio."
        secondaryLabel="Ver planos"
        secondaryHref="/#planos"
      />
    </>
  );
}
