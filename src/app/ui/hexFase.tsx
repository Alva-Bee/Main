"use client";

import { useState } from "react";

export default function HexButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      {/* Hexágono botão */}
      <button
        className="relative w-32 h-32 bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center justify-center
                   clip-path-hexagon transition-transform transform hover:scale-105"
        onClick={() => setOpen(true)}
      >
        Clique Aqui
      </button>

      {/* Modal de mensagem */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
            <p className="text-black font-medium text-center">Parabéns! Você clicou no hexágono!</p>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
              onClick={() => alert("Botão dentro da mensagem clicado!")}
            >
              Botão Interno
            </button>
            <button
              className="mt-2 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
