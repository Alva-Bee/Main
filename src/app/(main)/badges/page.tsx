"use client";

import { useState } from "react";
// import { HexagonoPerfil } from "@/app/ui/hexUser";
// import HexButton from "@/app/ui/hexFase";

export default function BotoesPage() {
  const [popupAtivo, setPopupAtivo] = useState<number | null>(null);

  // Lista de textos para os 8 botões
  const textos = [
    "Primeiro botão clicado!",
    "Segundo botão clicado!",
    "Terceiro botão clicado!",
    "Quarto botão clicado!",
    "Quinto botão clicado!",
    "Sexto botão clicado!",
    "Sétimo botão clicado!",
    "Oitavo botão clicado!",
  ];

  // Fecha popup ao clicar fora
  const handleClickFora = () => setPopupAtivo(null);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300"
      onClick={handleClickFora}
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {textos.map((texto, index) => (
          <div key={index} className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() =>
                setPopupAtivo(popupAtivo === index ? null : index)
              }
              className="w-36 h-20 rounded-xl bg-zinc-800 text-white font-medium shadow-md hover:bg-zinc-700 transition"
            >
              Botão {index + 1}
            </button>

            {/* Popup estilo balão */}
            {popupAtivo === index && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-44 bg-white border border-zinc-300 text-zinc-700 rounded-xl p-3 text-sm shadow-lg animate-fadeIn">
                {texto}
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