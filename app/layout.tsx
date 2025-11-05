import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-book Grátis: Git e GitHub para DEVs | Matheus Dev",
  description: "Baixe o guia completo de Git e GitHub para desenvolvedores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={cn(
          "min-h-screen bg-black text-white font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
