"use client";

import Link from "next/link";
import Image from "next/image";

// =================================================================
// 1. ÍCONES SVG PURAMENTE EM REACT (para evitar erros de importação)
// =================================================================

// Ícone Home
const HomeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

// Ícone Ranking
const BarChart3Icon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
);

// Ícone Badges (Gema/Diamante)
const GemIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v18h12V3z"/><path d="M6 3l6 6 6-6"/><path d="M6 15l6 6 6-6"/><path d="M6 9l6 6 6-6"/></svg>
);

// Ícone Perfil (Usuário)
const UserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);


// Componente auxiliar para os itens de navegação mobile
function MobileNavItem({ href, icon: Icon, label }) {
  // Cor do link padrão (gray-500) e hover (orange-600)
  return (
    <Link 
      href={href} 
      className="flex flex-col items-center justify-center w-full h-full p-2 text-gray-500 hover:text-orange-600 transition-colors"
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium mt-1">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      {/* 1. Navbar Superior (Logo e Links de Desktop/Tablet) */}
      <nav className="fixed top-0 left-0 right-0 h-16 z-50 flex w-screen bg-white shadow-sm">
        {/* Usamos 'justify-center' em mobile para centralizar o logo. 
            Em 'sm' (desktop), voltamos para 'justify-between' para dar espaço aos links. */}
        <div className="flex py-2 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                        justify-center sm:justify-between"> 
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/land"> 
              <Image
                src="/alva_titulo_cor.svg" 
                alt="Logo da aplicação"
                width={80}
                height={80}
                className="rounded-full"
                priority
              />
            </Link>
          </div>

          {/* Links de Desktop/Tablet - Ocultos em telas pequenas (mobile), exibidos a partir de 'sm' */}
          <div className="hidden sm:flex gap-12"> 
            <Link
              href="/trilha"
              className="font-semibold text-zinc-600 hover:text-orange-600 transition-colors py-2"
            >
              Início
            </Link>
            
            <Link
              href="/ranking"
              className="font-semibold text-zinc-600 hover:text-orange-600 transition-colors py-2"
            >
              Ranking
            </Link>

            <Link
              href="/badges"
              className="font-semibold text-zinc-600 hover:text-orange-600 transition-colors py-2"
            >
              Badges
            </Link>

            <Link
              href="/perfil"
              className="font-semibold text-zinc-600 hover:text-orange-600 transition-colors py-2"
            >
              Perfil
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. Navbar Inferior (Menu de Navegação Mobile com Ícones) */}
      {/* Oculta a partir de 'sm', Visível apenas em telas pequenas (mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 z-50 flex w-screen bg-white border-t border-gray-200 sm:hidden shadow-lg">
        <div className="flex items-center justify-around w-full max-w-7xl mx-auto">
          {/* Itens de navegação mobile usando os SVGs */}
          <MobileNavItem href="/trilha" icon={HomeIcon} label="Início" />
          <MobileNavItem href="/ranking" icon={BarChart3Icon} label="Ranking" />
          <MobileNavItem href="/badges" icon={GemIcon} label="Badges" />
          <MobileNavItem href="/perfil" icon={UserIcon} label="Perfil" />
        </div>
      </nav>
      
      {/* Espaçador para compensar as navbars fixas */}
      <div className="h-16 sm:h-16"></div>
    </>
  );
}