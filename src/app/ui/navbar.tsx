"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed h-16 z-50 flex w-screen bg-white shadow-sm"> {/*bg-zinc-50 dark:bg-gray-900 */}
      <div className="flex py-4 items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">

          <Image
            src="/alva_titulo_cor.svg" // caminho da imagem na pasta /public
            alt="Logo da aplicação"
            width={80}
            height={80}
            className="rounded-full"
            priority
          />

          {/* <span className="font-bold text-xl text-orange-600"> dark:text-white Alva </span> */}

        </div>

        {/* Links */}
        <div className="flex gap-16 mr-8">
          <Link
            href="/"
            className="font-semibold text-black hover:text-orange-600 transition-colors " /*dark:text-white*/
          >
            Início
          </Link>
          
          <Link
            href="/ranking"
            className="font-semibold text-black hover:text-orange-600 transition-colors" /*dark:text-white*/
          >
            Ranking
          </Link>

          <Link
            href="/badges"
            className="font-semibold text-black hover:text-orange-600 transition-colors" /*dark:text-white*/
          >
            Badges
          </Link>

          <Link
            href="/perfil"
            className="font-semibold text-black hover:text-orange-600 transition-colors" /*dark:text-white*/
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}
