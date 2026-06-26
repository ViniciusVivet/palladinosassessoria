import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "border-sand bg-sand text-ink hover:bg-antique hover:border-antique",
    secondary:
      "border-sand/60 bg-transparent text-sand hover:bg-sand/10 hover:border-sand",
    ghost:
      "border-transparent bg-transparent text-antique hover:text-sand hover:bg-sand/5",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center justify-center border px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
