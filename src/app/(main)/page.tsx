"use client";

import { HexagonoPerfil } from "@/app/ui/hexUser";
import { HexButton } from "@/app/ui/hexFase";

export default function TrilhaPage() {
  const usuario = {
    nome: "Monique",
    pontos: 12850,
    posicao: 4,
  };

  const niveis = [
    { id: 1, label: "Introdução", concluido: true },
    { id: 2, label: "Fundamentos", concluido: true },
    { id: 3, label: "Desafios", concluido: false },
    { id: 4, label: "Estatística", concluido: false },
    { id: 5, label: "Inferência", concluido: false },
    { id: 6, label: "Final", concluido: false },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white to-orange-100 relative overflow-hidden">
      {/* Painel fixo do usuário */}
      <div className="fixed top-25 right-10 bg-white shadow-lg rounded-2xl p-6 w-80 border border-orange-200 z-20">
        <h2 className="text-xl font-semibold text-gray-800">
          Olá, <span className="text-indigo-600">{usuario.nome}</span> 👋
        </h2>
        <div className="mt-4 space-y-1 text-gray-600">
          <p>
            🏆{" "}
            <span className="font-semibold text-gray-800">
              {usuario.pontos}
            </span>{" "}
            pontos
          </p>
          <p>
            📊 Posição:{" "}
            <span className="font-semibold text-indigo-600">
              #{usuario.posicao}
            </span>
          </p>
        </div>
      </div>

      {/* Trilha principal */}
      <div className="flex-1 flex flex-col items-center justify-center py-24">
        <div className="relative flex flex-col items-center space-y-[5px]">
          {niveis.map((nivel, index) => (
            <div
              key={nivel.id}
              className="relative flex flex-col items-center"
              style={{
                transform:
                  index % 4 === 0
                    ? "translateX(-40px)" // esquerda
                    : index % 4 === 2
                    ? "translateX(40px)" // direita
                    : "translateX(0px)", // centro
              }}
            >
              <HexButton
                src="/perfil.svg"
                alt={nivel.label}
                size={100}
                destaque={nivel.concluido}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
