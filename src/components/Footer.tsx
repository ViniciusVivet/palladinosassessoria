import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { DecorativeDivider } from "@/components/DecorativeDivider";
import { contact } from "@/config/contact";

export function Footer() {
  return (
    <footer className="border-t border-sand/10 bg-[#151515] py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden border border-sand/20">
                <Image
                  src="/images/logo-marrom.jpeg"
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-2xl text-antique">{contact.companyName}</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-antique/62">
              Marketing, vendas e crescimento para pequenos e médios negócios que precisam de direção, método e acompanhamento comercial.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sand">
              Navegação
            </p>
            <div className="grid gap-3 text-sm text-antique/65">
              <Link href="/">Início</Link>
              <Link href="/#planos">Planos</Link>
              <Link href="/resultados">Resultados</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sand">
              Contato
            </p>
            <div className="grid gap-3 text-sm text-antique/65">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <DecorativeDivider />
        <p className="text-xs text-antique/45">
          © {new Date().getFullYear()} Palladinos Assessoria. Resultados variam conforme mercado, oferta, maturidade comercial e execução.
        </p>
      </Container>
    </footer>
  );
}
