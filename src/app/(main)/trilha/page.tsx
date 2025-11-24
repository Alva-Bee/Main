"use client";

import React from 'react';
// IMPORTAÇÕES ORIGINAIS DO USUÁRIO (COMENTADAS/SUBSTITUÍDAS POR SIMULAÇÃO PARA COMPILAR)
// import { HexagonoPerfil } from "@/app/ui/hexUser";
// import { HexButton } from "@/app/ui/hexFase";

// ===================================================
// SIMULAÇÃO DOS COMPONENTES PARA PERMITIR A COMPILAÇÃO
// A simulação inclui as personalizações de cor e cursor solicitadas:
// - Laranja claro (bg-orange-200) para não concluído.
// - Cursor de bloqueio (cursor-not-allowed) para não concluído.
// =================================================== 

const HexButton = ({ size = 150, destaque, alt, children }) => {
  const sizeClass = `w-[${size}px] h-[${size}px]`; 
  
  // Customização solicitada: laranja claro para não concluído e cursor bloqueado.
  const colorClass = destaque 
    ? "bg-orange-500 border-orange-700 hover:bg-orange-600 cursor-pointer" 
    : "bg-orange-300 border-orange-400 cursor-not-allowed opacity-80";

  return (
    <div 
      className={`relative ${sizeClass} ${colorClass} rounded-md shadow-lg flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300`}
      style={{
        // Simulação de um hexágono com clip-path
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        width: `${size}px`,
        height: `${size}px`,
        // Revertendo o rotate-45 original para que o clip-path funcione como um hexágono
        transform: 'rotate(0deg)', 
      }}
      title={alt}
    >
      <div 
        className="absolute w-full h-full flex items-center justify-center"
        // Sem rotação inversa, pois o container principal não está rotacionado
      >
        {children || <span className="text-sm">Nível</span>}
      </div>
    </div>
  );
};

// URL de placeholder para a imagem da colmeia/abelha
const BEE_IMAGE_URL = "https://placehold.co/120x80/f7d04e/000?text=🐝+Favo";

export default function TrilhaPage() {
  const usuario = {
    nome: "Monique",
    pontos: 12850,
    posicao: 4,
  };

  const niveis = [
    { id: 1, label: "Introdução", concluido: true, numero: 1 },
    { id: 2, label: "Fundamentos", concluido: true, numero: 2 },
    { id: 3, label: "Desafios", concluido: false, numero: 3 },
    { id: 4, label: "Estatística", concluido: false, numero: 4 },
    { id: 5, label: "Inferência", concluido: false, numero: 5 },
    { id: 6, label: "Final", concluido: false, numero: 6 },
    { id: 7, label: "Estatística", concluido: false, numero: 7 },
    { id: 8, label: "Inferência", concluido: false, numero: 8 },
    { id: 9, label: "Final", concluido: false, numero: 9 },
    { id: 10, label: "Estatística", concluido: false, numero: 10 },
    { id: 11, label: "Inferência", concluido: false, numero: 11 },
    { id: 12, label: "Em Construção", concluido: false, numero: 12 },
  ];

  return (
    <div className="min-h-screen flex bg-white relative overflow-hidden">
      
        {/* Painel fixo do usuário (Ajustado para começar abaixo da navbar em mobile e desktop, e layout compacto) */}
      <div className="fixed bg-white shadow-xl z-30 transition-all p-4 rounded-2xl border-2 border-orange-300
                /* Posição Mobile (Fixo Top-Center, abaixo da navbar) */
                top-24 left-1/2 -translate-x-1/2 w-11/12 max-w-400px
                /* Posição Desktop (Fixo Top-Right, abaixo da navbar) */
                md:top-24 md:right-10 md:left-auto md:translate-x-0 md:w-80 md:max-w-md 
                text-center md:text-left">
    
        <h2 className="text-xl font-semibold text-zinc-600">
          Olá, <span className="text-orange-400">{usuario.nome}</span> 👋
        </h2>
        
        {/* Conteúdo compacto: Pontos e Posição na mesma linha */}
        <div className="mt-2 text-gray-600 text-sm md:text-base flex justify-center md:justify-start space-x-6">
            
            {/* Pontos */}
            <p className="flex items-center">
                🏆{" "}
                <span className="font-semibold text-zinc-600 ml-1 mr-1">
                    {usuario.pontos}
                </span>{" "}
                pontos
            </p>

            {/* Posição */}
            <p className="flex items-center">
                📊 Posição:{" "}
                <span className="font-semibold text-orange-400 ml-1">
                    #{usuario.posicao}
                </span>
            </p>
        </div>
      </div>

      {/* Trilha principal - Ajustado padding-top para corresponder ao novo top do painel */}
      <div className="flex-1 flex flex-col items-center pt-[150px] pb-48 overflow-y-auto w-full">
        
        {/* Contêiner da Trilha - Estrutura do usuário mantida (space-y-[5px] e bg-orange-600) */}
        <div className="relative flex flex-col items-center space-y-[5px]">
            {/* Linha Central tracejada removida */}

          {niveis.map((nivel, index) => {
                // Lógica de posicionamento (original do usuário)
                let offsetX = "0";
                if (index % 4 === 0) {
                    offsetX = "-60px"; // esquerda
                } else if (index % 4 === 2) {
                    offsetX = "60px"; // direita
                }

                // Lógica de Imagem Alternada (Adição)
                const showImage = index % 4 === 0 || index % 4 === 2;
                const isImageOnLeft = index % 4 === 2; 

                return (
            <div
              key={nivel.id}
              className="relative flex flex-col items-center z-20"
              style={{
                transform: `translateX(${offsetX})`,
              }}
            >
                {/* Imagem Alternada (Lado Esquerdo - Posição ajustada) */}
                {showImage && isImageOnLeft && (
                    <img
                        src="https://pngimg.com/d/honey_PNG86262.png"
                        alt="Colmeia com Abelhas"
                        // Posição ajustada para mais distante: -320px e tamanho w-40. Oculta em mobile.
                      className="absolute -left-[600px] top-1/2 -translate-y-1/2 w-64 h-auto object-contain hidden lg:block "
                    />
                )}
                
              <HexButton
                    // Conteúdo do Hexágono - Adicionado o número do nível para clareza
                    children={<span className="text-2xl">{nivel.numero || index + 1}</span>}
                src="/perfil.svg"
                alt={nivel.label}
                size={130}
                destaque={nivel.concluido}
              />

                {/* Imagem Alternada (Lado Direito - Posição ajustada) */}
                {showImage && !isImageOnLeft && (
                    <img
                        src="https://image.similarpng.com/file/similarpng/original-picture/2020/08/Honey-jar-and-honey-stick-Premium-vector-PNG.png"
                        alt="Colmeia com Abelhas"
                        // Posição ajustada para mais distante: -320px e tamanho w-40. Oculta em mobile.
                        className="absolute -right-[600px] top-1/2 -translate-y-1/2 w-64 h-auto object-contain hidden lg:block"
                    />
                )}
                
                {/* Adicionado o rótulo do nível para clareza visual */}
                <p className={`text-center text-sm font-bold mt-2 ${nivel.concluido ? 'text-orange-500' : 'text-zinc-600'}`}>
                    {nivel.label}
                </p>
            </div>
          );
           })}
        </div>
      </div>
    </div>
  );
}
