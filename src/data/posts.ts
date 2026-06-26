export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: PostBlock[];
};

export const categories = [
  "Posicionamento Digital",
  "Tráfego Pago",
  "Social Media",
  "Vendas",
  "Estratégia Comercial",
  "Crescimento para PMEs",
];

export const posts: Post[] = [
  {
    title: "Por que sua empresa posta, mas não vende?",
    slug: "por-que-sua-empresa-posta-mas-nao-vende",
    category: "Social Media",
    excerpt:
      "Publicar com frequência não substitui clareza de oferta, intenção comercial e posicionamento.",
    date: "2026-01-08",
    readingTime: "4 min",
    content: [
      {
        type: "paragraph",
        text: "Postar mais pode aumentar a presença, mas não corrige uma oferta confusa. Quando o conteúdo não conversa com uma dor real, a audiência até percebe a marca, mas não encontra motivo para avançar.",
      },
      {
        type: "heading",
        text: "Conteúdo precisa conduzir decisão",
      },
      {
        type: "paragraph",
        text: "Uma presença comercial forte cria reconhecimento, autoridade e próximo passo. Sem isso, a rede social vira vitrine bonita sem vendedor na porta.",
      },
      {
        type: "list",
        items: [
          "Defina quem precisa comprar",
          "Mostre o problema com precisão",
          "Explique por que sua solução é o caminho",
          "Conduza para conversa comercial",
        ],
      },
    ],
  },
  {
    title: "Tráfego pago sem estratégia comercial é desperdício",
    slug: "trafego-pago-sem-estrategia-comercial-e-desperdicio",
    category: "Tráfego Pago",
    excerpt:
      "Cliques só viram crescimento quando existe oferta, atendimento e acompanhamento depois do anúncio.",
    date: "2026-01-15",
    readingTime: "5 min",
    content: [
      {
        type: "paragraph",
        text: "O anúncio acelera o contato com o mercado. Ele não resolve sozinho um atendimento lento, uma proposta fraca ou uma oferta que não foi lapidada.",
      },
      {
        type: "heading",
        text: "O clique é começo, não chegada",
      },
      {
        type: "paragraph",
        text: "Campanhas precisam estar conectadas ao processo comercial. A pergunta não é apenas quanto custou o lead, mas o que aconteceu com ele depois.",
      },
    ],
  },
  {
    title: "Como transformar posicionamento digital em faturamento",
    slug: "como-transformar-posicionamento-digital-em-faturamento",
    category: "Posicionamento Digital",
    excerpt:
      "Posicionamento bom deixa claro para quem você vende, por que importa e qual ação o cliente deve tomar.",
    date: "2026-01-22",
    readingTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Posicionamento digital não é escolher uma frase bonita. É construir uma leitura clara sobre o valor da empresa, o público certo e o caminho até a compra.",
      },
      {
        type: "list",
        items: [
          "Oferta compreensível",
          "Mensagem consistente",
          "Prova de capacidade",
          "Canal de conversão simples",
        ],
      },
    ],
  },
  {
    title: "Marketing não termina no clique",
    slug: "marketing-nao-termina-no-clique",
    category: "Estratégia Comercial",
    excerpt:
      "O verdadeiro trabalho aparece quando a atenção vira conversa, proposta e venda.",
    date: "2026-02-02",
    readingTime: "4 min",
    content: [
      {
        type: "paragraph",
        text: "A métrica que sustenta uma empresa não é o volume de interações, mas a capacidade de transformar interesse em receita. Por isso, marketing e comercial precisam jogar juntos.",
      },
      {
        type: "heading",
        text: "Acompanhamento muda o resultado",
      },
      {
        type: "paragraph",
        text: "Quando a equipe entende o que dizer depois do lead chegar, o investimento em marketing fica mais inteligente.",
      },
    ],
  },
  {
    title: "O que pequenas empresas precisam antes de investir em anúncios",
    slug: "o-que-pequenas-empresas-precisam-antes-de-investir-em-anuncios",
    category: "Crescimento para PMEs",
    excerpt:
      "Antes de colocar dinheiro em mídia, organize oferta, canais, atendimento e expectativa.",
    date: "2026-02-11",
    readingTime: "5 min",
    content: [
      {
        type: "paragraph",
        text: "Anunciar sem estrutura pode revelar problemas mais rápido, mas não necessariamente gerar vendas. A base precisa estar pronta para receber demanda.",
      },
      {
        type: "list",
        items: [
          "WhatsApp claro e responsivo",
          "Oferta fácil de explicar",
          "Perfil social organizado",
          "Processo mínimo de follow-up",
        ],
      },
    ],
  },
  {
    title: "Como construir autoridade digital em mercados saturados",
    slug: "como-construir-autoridade-digital-em-mercados-saturados",
    category: "Vendas",
    excerpt:
      "Autoridade nasce da repetição estratégica de provas, pontos de vista e caminhos comerciais claros.",
    date: "2026-02-20",
    readingTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Quando muitos negócios dizem a mesma coisa, vence quem consegue ser lembrado com clareza. Autoridade não é barulho, é associação mental construída com método.",
      },
      {
        type: "heading",
        text: "Diferenciação precisa aparecer no conteúdo",
      },
      {
        type: "paragraph",
        text: "A marca deve mostrar como pensa, que problemas resolve e por que seu caminho é mais seguro para o cliente.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
