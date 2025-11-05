"use client";

import { useState } from "react";
import { HexButton } from "@/app/ui/hexFase";

export default function BotoesPage() {
  const [popupAtivo, setPopupAtivo] = useState<number | null>(null);

  // Tipos e textos diferentes para cada botão
  const botoes = [
    { tipo: "perfil", texto: "Este é o botão de perfil!" },
    { tipo: "fase", texto: "Este botão representa uma fase!" },
    { tipo: "bonus", texto: "Botão de bônus especial!" },
    { tipo: "alerta", texto: "Atenção: este é um alerta!" },
    { tipo: "neon", texto: "Um botão neon brilhante!" },
    { tipo: "imagem", texto: "Botão com imagem customizada!" },
    { tipo: "classico", texto: "O clássico hexágono!" },
    { tipo: "dourado", texto: "Botão dourado de destaque!" },
  ];

  // Fecha popup ao clicar fora
  const handleClickFora = () => setPopupAtivo(null);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-orange-100"
      onClick={handleClickFora}
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {botoes.map((botao, index) => (
          <div
            key={index}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <HexButton
              tipo={botao.tipo}
              onClick={() =>
                setPopupAtivo(popupAtivo === index ? null : index)
              }
              destaque
            />

            {/* Popup estilo balão */}
            {popupAtivo === index && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-28 w-44 bg-white border border-zinc-300 text-zinc-700 rounded-xl p-3 text-sm shadow-lg animate-fadeIn z-50">
                {botao.texto}
                {/* Triângulo do balão */}
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Animação simples */}
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
