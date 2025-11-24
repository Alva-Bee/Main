"use client";

import { useState } from "react";

// Componente HexButton embutido
const HexButton = ({ tipo, onClick, destaque, corPersonalizada, className }) => {
  const size = 130; // Tamanho base para o hexágono
  const hoverScale = destaque ? "scale-105" : "hover:scale-105";
  
  // Cores padrão baseadas no tipo, com fallback para corPersonalizada
  let baseColor = corPersonalizada || 'bg-gray-300';
  
  if (tipo === 'perfil') baseColor = corPersonalizada || 'bg-orange-500';
  else if (tipo === 'fase') baseColor = corPersonalizada || 'bg-orange-300';
  
  // Estilo principal do hexágono usando clip-path
  const hexStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    width: `${size}px`,
    height: `${size * 1.15}px`, // Ajusta a altura para um hexágono regular
    transition: 'transform 0.2s ease-in-out',
    boxShadow: destaque ? '0 0 10px rgba(255, 140, 0, 0.7)' : 'none',
  };

  return (
    <div
      className={`relative flex items-center justify-center cursor-pointer ${hoverScale} active:scale-95 ${className}`}
      style={{ width: `${size * 1.5}px`, height: `${size * 1.5}px` }} // Container para área de clique
      onClick={onClick}
    >
      {/* Hexágono Visual */}
      <div 
        className={`${baseColor} absolute flex items-center justify-center text-white text-lg font-bold`}
        style={hexStyle}
      >
        {/* Conteúdo do Hexágono (ex: ícone, número) */}
        {tipo === 'perfil' ? (
          <svg className="w-1/2 h-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        ) : (
          <span className="text-xl">Fase</span>
        )}
      </div>
    </div>
  );
};


export default function BotoesPage() {
  const [popupAtivo, setPopupAtivo] = useState<number | null>(null);

  // 12 Botões
  const botoes = Array.from({ length: 12 }, (_, i) => ({
    tipo: i === 0 ? "perfil" : "fase",
    texto: `Este é o botão ${i + 1} - Detalhes aqui!`,
  }));

  // Fecha popup ao clicar fora
  const handleClickFora = () => setPopupAtivo(null);

  return (
    <div
      className="flex min-h-screen items-start md:items-center justify-center bg-white p-4 md:p-8"
      onClick={handleClickFora}
    >
      {/* Contêiner para agrupar o Título e o Card, mantendo o limite de largura e centralização */}
      <div className="w-full max-w-7xl mt-8 md:mt-0"> 
        
        {/* TÍTULO: Agora sempre CENTRALIZADO */}
        <h2 className="text-zinc-600 text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
          MINHAS CONQUISTAS
        </h2>
        
        {/* Container Principal do Conteúdo (O Cartão Branco) */}
        <div className="bg-yellow-50 p-4 md:p-16 rounded-xl border border-orange-300 shadow-xl w-full"> 
          
          {/* Grid de Hexágonos: Responsividade (3 colunas no mobile, 6 no desktop) */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 md:gap-x-12 gap-y-8 md:gap-y-16 justify-items-center">
            {botoes.map((botao, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <HexButton
                  // Rotação de 90 graus
                  className="rotate-360"
                  
                  tipo={botao.tipo}
                  onClick={() =>
                    setPopupAtivo(popupAtivo === index ? null : index)
                  }
                  destaque={index === 0}
                  // Cores para replicar o visual da imagem
                  corPersonalizada={index === 0 ? "bg-orange-600" : "bg-orange-400"} 
                  size={150}
                />

                {/* POPUP: Posição ajustada para ficar mais próxima do hexágono */}
                {popupAtivo === index && (
                  <div 
                    // Mudança de -top-32 para -top-20 e md:-top-36 para md:-top-24
                    className="absolute left-1/2 -translate-x-1/2 w-32 sm:w-48 bg-orange-200 text-zinc-600 rounded-lg p-3 text-xs sm:text-sm  animate-fadeIn z-50
                              -top-20 md:-top-22 text-center"
                  >
                    <p className="font-semibold mb-1 text-base">Fase {index + 1}</p>
                    <p className="font-light">{botao.texto}</p>
                    {/* Triângulo do balão, agora laranja escuro para combinar */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animação simples (Mantida) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}