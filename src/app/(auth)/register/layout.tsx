import { inter } from '@/app/ui/fonts';
import '@/app/globals.css';

export const metadata = {
  title: "Perfil - Alva",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}