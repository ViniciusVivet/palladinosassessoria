import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const title = "Palladinos Assessoria | Marketing, Vendas e Crescimento para PMEs";
const description =
  "Assessoria de marketing em São Paulo focada em posicionamento digital, campanhas orgânicas, tráfego pago e suporte comercial para pequenos e médios negócios venderem mais.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
