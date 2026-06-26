export type Plan = {
  name: string;
  price: string;
  description: string;
  items: string[];
  note?: string;
  cta: string;
  featured?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Posicionamento",
    price: "R$ 500/mês",
    description:
      "Para negócios que precisam organizar sua presença digital e serem encontrados com mais clareza pelo cliente ideal.",
    items: [
      "Diagnóstico de presença digital",
      "Posicionamento do negócio no Google",
      "Organização das redes sociais",
      "Otimização do WhatsApp Business",
      "Direcionamento de comunicação",
      "Assessoria e suporte comercial inclusos",
    ],
    cta: "Quero posicionar minha marca",
  },
  {
    name: "Tráfego Pago",
    price: "R$ 1.500/mês",
    description:
      "Para empresas que querem gerar alcance, mensagens e oportunidades comerciais por meio de campanhas pagas.",
    items: [
      "Planejamento de campanha",
      "Criação de estrutura inicial de anúncios",
      "Segmentação do público ideal",
      "Acompanhamento de performance",
      "Otimizações estratégicas",
      "Assessoria e suporte comercial inclusos",
    ],
    note: "O investimento em mídia não está incluso no valor do plano.",
    cta: "Quero campanhas pagas",
  },
  {
    name: "Social Media",
    price: "R$ 1.500/mês",
    description:
      "Para marcas que precisam construir presença, autoridade e consistência nas redes sociais.",
    items: [
      "Planejamento editorial",
      "Criação e gestão de conteúdo",
      "Organização de calendário",
      "Direcionamento de linguagem",
      "Fortalecimento de marca",
      "Assessoria e suporte comercial inclusos",
    ],
    cta: "Quero fortalecer minhas redes",
  },
  {
    name: "Palladinos Full",
    price: "Sob consulta",
    description:
      "Para empresas que querem unir posicionamento, conteúdo, tráfego pago e suporte comercial em uma estratégia completa de crescimento.",
    items: [
      "Posicionamento Digital",
      "Social Media",
      "Tráfego Pago",
      "Estratégia comercial",
      "Acompanhamento contínuo",
      "Suporte próximo para decisões comerciais",
      "Plano personalizado conforme maturidade do negócio",
    ],
    cta: "Quero o plano completo",
    featured: true,
    badge: "Recomendado para crescimento",
  },
];
