import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';
import { inter } from '@/app/ui/fonts';
import Navbar from "@/app/ui/navbar"; // 👈 import aqui

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Alva - Educação Inteligente",
  description: "Serviço de educação financeira para jovens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}>
        <Navbar/> {/* 👈 navbar visível em todas as páginas */}
        {children}
      </body>
    </html>
  );
}
