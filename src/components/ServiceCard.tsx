type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="border border-sand/16 bg-gradient-to-br from-sand/[0.07] via-antique/[0.025] to-moss/10 p-7">
      <p className="mb-5 font-display text-3xl text-sand">✦</p>
      <h3 className="font-display text-2xl text-antique">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-antique/64">{description}</p>
    </article>
  );
}
