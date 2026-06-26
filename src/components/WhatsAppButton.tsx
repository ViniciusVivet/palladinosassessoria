import { Button } from "@/components/Button";
import { buildWhatsAppLink } from "@/config/contact";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsAppLink(message)}
      external
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}
