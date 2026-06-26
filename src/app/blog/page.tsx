import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { categories, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | Palladinos Assessoria",
  description:
    "Artigos sobre posicionamento digital, tráfego pago, social media, vendas e crescimento para pequenos e médios negócios.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Uma revista estratégica para negócios que querem crescer com direção."
        subtitle="Conteúdos sobre posicionamento, campanha, vendas e crescimento para pequenos e médios negócios em mercados cada vez mais disputados."
        eyebrow="Blog Palladinos"
        primaryCta="Solicitar diagnóstico"
      />

      <section className="section-pad">
        <Container>
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="border border-sand/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-antique/65"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
