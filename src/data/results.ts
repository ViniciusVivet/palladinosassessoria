export type ResultCase = {
  client: string;
  segment: string;
  strategies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  observation: string;
};

export const resultCases: ResultCase[] = [
  {
    client: "Psicóloga do esporte",
    segment: "Psicologia do Esporte",
    strategies: [
      "Posicionamento Digital",
      "Conteúdo Orgânico",
      "Tráfego Pago",
    ],
    metrics: [
      {
        label: "Atendimentos",
        value: "Média de 60 no primeiro semestre de 2026",
      },
      {
        label: "Ticket médio",
        value: "R$ 200",
      },
      {
        label: "Estimativa mensal",
        value: "R$ 12.000",
      },
    ],
    observation:
      "Case apresentado pela Palladinos. Os resultados variam conforme mercado, oferta, maturidade comercial e execução.",
  },
];

export const proofCards = [
  {
    title: "Posicionamento Digital",
    description:
      "Clareza de oferta, canais ajustados e presença organizada para reduzir ruído na decisão do cliente.",
  },
  {
    title: "Conteúdo Orgânico",
    description:
      "Narrativas comerciais que constroem autoridade antes da conversa de venda começar.",
  },
  {
    title: "Tráfego Pago",
    description:
      "Campanhas orientadas por intenção, oportunidade e acompanhamento de performance.",
  },
];
