# Palladinos Assessoria

Site institucional, página de vendas, vitrine de planos, página de resultados e blog para a Palladinos Assessoria.

## Stack

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- Estrutura em `src`
- Preparado para deploy na Vercel

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Depois acesse `http://localhost:3000`.

## Como editar planos

Os planos ficam em:

```text
src/data/plans.ts
```

Cada plano possui nome, preço, descrição, itens, observação opcional, CTA e destaque opcional.

## Como editar resultados

Os cases e provas ficam em:

```text
src/data/results.ts
```

Mantenha os resultados como dados apresentados ou cases de referência. Não use promessa de resultado garantido.

## Como editar posts

Os posts do blog ficam em:

```text
src/data/posts.ts
```

Cada post possui `title`, `slug`, `category`, `excerpt`, `date`, `readingTime` e `content`.

## Como configurar WhatsApp

Edite:

```text
src/config/contact.ts
```

Troque `whatsappNumber` pelo número com DDI e DDD, apenas números. Exemplo:

```ts
whatsappNumber: "5511999999999"
```

A função `buildPlanWhatsAppLink` monta mensagens personalizadas por plano.
