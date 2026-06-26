import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { getPostBySlug, posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | Palladinos Assessoria",
    };
  }

  return {
    title: `${post.title} | Palladinos Assessoria`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32">
      <Container className="max-w-4xl py-16">
        <Button href="/blog" variant="ghost" className="mb-8 px-0">
          Voltar ao blog
        </Button>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sand">
          {post.category}
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight text-antique sm:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-antique/70">{post.excerpt}</p>
        <div className="mt-8 flex gap-4 text-sm text-antique/50">
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
              new Date(`${post.date}T12:00:00`),
            )}
          </time>
          <span>{post.readingTime}</span>
        </div>
        <DecorativeDivider />

        <div className="prose prose-invert prose-p:text-antique/72 prose-headings:font-display prose-headings:text-antique prose-li:text-antique/72 max-w-none">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={`${block.type}-${index}`} className="mt-10 text-3xl">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={`${block.type}-${index}`} className="grid gap-3">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={`${block.type}-${index}`} className="text-base leading-8">
                {block.text}
              </p>
            );
          })}
        </div>
      </Container>
    </article>
  );
}
