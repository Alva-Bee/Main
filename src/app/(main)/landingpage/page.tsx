"use client";

import React from 'react';
import { inter } from '@/app/ui/fonts';


// Classes de cor primária (Laranja, como no logo ALVA)
const PRIMARY_COLOR_CLASSES = "bg-orange-600 hover:bg-orange-700 text-white";
const OUTLINE_COLOR_CLASSES = "border-2 border-orange-600 text-orange-600 hover:bg-orange-50";

// Componente de Botão Estilizado
const Button = ({ children, className = "", outline = false, href = "#" }) => (
  <a
    href={href}
    className={`
      px-5 py-2 font-semibold text-sm rounded-lg transition duration-300 shadow-md
      ${outline ? OUTLINE_COLOR_CLASSES : PRIMARY_COLOR_CLASSES}
      ${className}
    `}
  >
    {children}
  </a>
);


// Componente auxiliar para as cartas de 'Sobre Nós'
const Card = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-orange-500">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function land() {
  const currentYear = new Date().getFullYear();

  // URL de placeholder para replicar o elemento visual da imagem
  const heroImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/041/164/104/small/ai-generated-golden-honeycomb-piece-free-png.png";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. Header Fixo (Estilo ALVA) */}
      <header className="fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo "ALVA" */}
          <div className="text-3xl font-bold tracking-tight text-orange-500">
            ALVA
          </div>

          {/* Botões de Ação (COMEÇAR preenchido, ENTRAR contorno) */}
          <div className="flex space-x-3">
            <Button href="/register">
              COMEÇAR
            </Button>
            <Button href="/login" outline={true} className="hidden sm:inline-flex">
              ENTRAR
            </Button>
          </div>
        </div>
      </header>

      {/* 2. Conteúdo Principal e Seção Hero (Estilo da Imagem) */}
      <main className="pt-24 pb-12 sm:pt-32 sm:pb-24 ">
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  ">
          
          {/* Conteúdo Esquerda - Adaptando o h1 e p originais */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-800 mb-6">
              A melhor forma de
              <br className="hidden sm:block" />
              aprender sobre finanças
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg">
              {/* Adaptação do texto original "Este é um exemplo simples..." para o contexto da Landing Page */}
              Somos uma plataforma que ensina educação financeira para jovens de forma simplificada e divertida.
            </p>
            {/* Botão de Call to Action principal */}
            <Button href="/login" className="text-lg py-3 px-8 shadow-xl">
              COMEÇAR
            </Button>
          </div>

          {/* Imagem Direita (Placeholder) */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImageUrl}
              alt="Ilustração de abelhas em um favo de mel, simbolizando trabalho em equipe e economia."
              className="w-full max-w-sm lg:max-w-lg rounded-xl "
              // Fallback simples em caso de erro no placeholder
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/400x400/F58332/FFFFFF?text=ALVA";
              }}
            />
          </div>
        </section>

        {/* 3. Seção 'Sobre Nós' (Conteúdo original, mas estilizado) */}
        <section id="sobre" className="mt-24 py-16  bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Sobre Nós</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Somos uma plataforma focada em garantir um futuro financeiro estável para os jovens brasileiros.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card title="Missão" description=" a educação financeira em algo acessível e envolvente para todos." />
              <Card title="Visão" description="Ser a plataforma líder em aprendizado financeiro na América Latina até 2028." />
              <Card title="Valores" description="Inovação, Transparência, Excelência e Foco no Sucesso do Aluno." />
            </div>
          </div>
        </section>

       

        {/* 5. Seção 'Entre em Contato' (Conteúdo original, estilizado como bloco de destaque) */}
        <section id="contato" className="py-20 bg-orange-500">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-4">Pronto para Começar?</h2>
            <p className="text-xl text-orange-200 mb-8">
              Tem alguma dúvida ou gostaria de saber mais sobre o nosso trabalho?
              Não hesite em nos contatar!
            </p>
            {/* Botão de contato (outline/inverted para contraste no fundo laranja) */}
            <Button href="#" outline={true} className="!bg-white !text-orange-600 hover:!bg-orange-50/90 !border-white text-lg py-3 px-8 shadow-xl">
              Fale Conosco Agora
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {currentYear} Sua Empresa (ALVA Style). Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default land;