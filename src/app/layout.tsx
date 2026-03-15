import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  "./globals.scss";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFreitas - Desenvolvedor Web Full Stack & Especialista em React!",
  description: "Precisa de um site rápido e otimizado? Desenvolvo soluções sob medida utilizando Next.js para velocidade máxima, WordPress para gestão de conteúdo simplificada e Node.js para sistemas robustos. Entre em contato e solicite um orçamento para o seu projeto digital.",
  keywords: [
    "Desenvolvedor Web Full Stack",
    "Especialista em React",
    "Next.js",
    "WordPress",
    "Node.js",
    "Desenvolvimento de Sites Rápidos",
    "Soluções Sob Medida",
    "Otimização de Performance",
    "Gestão de Conteúdo Simplificada",
    "Sistemas Robustos",
    "Orçamento para Projetos Digitais"
  ].join(", "),
  openGraph: {
    images:[
      `${process.env.NEXT_PUBLIC_URL}/logometada.png`
    ],
    title: "DevFreitas - Desenvolvedor Web Full Stack & Especialista em React!",
    description: "Precisa de um site rápido e otimizado? Desenvolvo soluções sob medida utilizando Next.js para velocidade máxima, WordPress para gestão de conteúdo simplificada e Node.js para sistemas robustos. Entre em contato e solicite um orçamento para o seu projeto digital.",
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true,

    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <p style={{textAlign: "center", marginTop: 54, marginBottom: 24}}>
          Todos os direitos reservados DevFreitas ©{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
