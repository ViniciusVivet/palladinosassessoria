"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { buildWhatsAppLink, contact } from "@/config/contact";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Planos", href: "/#planos" },
  { label: "Resultados", href: "/resultados" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-sand/10 bg-charcoal/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Palladinos Assessoria">
          <span className="relative h-11 w-11 overflow-hidden border border-sand/35 bg-earth/60 transition group-hover:border-sand">
            <Image
              src="/images/logo-marrom.jpeg"
              alt=""
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            <span className="block font-display text-lg leading-none text-antique">
              Palladinos
            </span>
            <span className="block text-[0.62rem] uppercase tracking-[0.26em] text-sand/70">
              Assessoria
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-antique/75 transition hover:text-sand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={buildWhatsAppLink(
              "Olá, vim pelo site da Palladinos e quero solicitar um diagnóstico.",
            )}
            external
          >
            Solicitar diagnóstico
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-sand/30 text-sand lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span className="absolute left-0 top-0 h-px w-full bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
            <span className="absolute bottom-0 left-0 h-px w-full bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-sand/10 bg-charcoal px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand/10 pb-3 text-antique/80"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={buildWhatsAppLink(
                "Olá, vim pelo site da Palladinos e quero solicitar um diagnóstico.",
              )}
              external
              className="mt-2 w-full"
            >
              Solicitar diagnóstico
            </Button>
            <a className="text-sm text-antique/55" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
