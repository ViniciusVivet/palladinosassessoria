import Link from "next/link";
import type { Post } from "@/data/posts";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col border border-sand/14 bg-antique/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sand/38 hover:bg-sand/[0.055]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/80">
        {post.category}
      </p>
      <h3 className="mt-4 font-display text-2xl leading-tight text-antique">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-antique/62">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-sand/10 pt-4 text-xs text-antique/45">
        <time dateTime={post.date}>
          {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(
            new Date(`${post.date}T12:00:00`),
          )}
        </time>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}
