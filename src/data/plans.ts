export type Plan = {
  name: string;
  price: string;
  description: string;
  items: string[];
  note?: string;
  cta: string;
  featured?: boolean;
  badge?: string;
  visual?: {
    src: string;
    alt: string;
  };
};

export const plans: Plan[] = [
  {
    name: "Posicionamento",
    price: "R$ 500/mês",
    description:
      "Para negócios que precisam aparecer com clareza antes de acelerar conteúdo ou mídia.",
    items: [
      "Diagnóstico de presença digital",
      "Posicionamento do negócio no Google",
      "Organização das redes sociais",
      "Otimização do WhatsApp Business",
      "Direcionamento de comunicação",
      "Assessoria e suporte comercial inclusos",
    ],
    cta: "Quero posicionar minha marca",
    visual: {
      src: "/images/produto-posicionamento-digital.png",
      alt: "Arte comercial do plano Posicionamento Digital da Palladinos.",
    },
  },
  {
    name: "Tráfego Pago",
    price: "R$ 1.500/mês",
    description:
      "Para empresas que já têm oferta e atendimento minimamente organizados e querem gerar demanda.",
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
    visual: {
      src: "/images/produto-trafego-pago.png",
      alt: "Arte comercial do plano Tráfego Pago da Palladinos.",
    },
  },
  {
    name: "Social Media",
    price: "R$ 1.500/mês",
    description:
      "Para marcas que precisam transformar presença em autoridade, lembrança e conversas comerciais.",
    items: [
      "Planejamento editorial",
      "Criação e gestão de conteúdo",
      "Organização de calendário",
      "Direcionamento de linguagem",
      "Fortalecimento de marca",
      "Assessoria e suporte comercial inclusos",
    ],
    cta: "Quero fortalecer minhas redes",
    visual: {
      src: "/images/produto-social-media.png",
      alt: "Arte comercial do plano Social Media da Palladinos.",
    },
  },
  {
    name: "Palladinos Full",
    price: "Sob consulta",
    description:
      "Para empresas que precisam de estratégia completa, com posicionamento, conteúdo, tráfego e suporte comercial atuando juntos.",
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
    visual: {
      src: "/images/logo-marrom.jpeg",
      alt: "Símbolo medieval da Palladinos aplicado sobre textura de couro.",
    },
  },
];
