"use client";

import { HexagonoPerfil } from "@/app/ui/hexUser";

interface Usuario {
  nome: string;
  escola: string;
  materia: string;
  pontos: number;
  foto: string;
}

export default function RankingPage() {
  // Simulando dados de usuários
  const usuarios: Usuario[] = [
    {
      nome: "Monique Moraes",
      escola: "Colégio Horizonte Azul",
      materia: "Matemática",
      pontos: 1850,
      foto: "/perfil.jpg",
    },
    {
      nome: "Lucas Andrade",
      escola: "Escola Estrela do Saber",
      materia: "História",
      pontos: 1720,
      foto: "/perfil.jpg",
    },
    {
      nome: "Ana Clara Souza",
      escola: "Instituto Alfa",
      materia: "Física",
      pontos: 1600,
      foto: "/perfil.jpg",
    },
    {
      nome: "Rafael Lima",
      escola: "Colégio Horizonte Azul",
      materia: "Química",
      pontos: 1450,
      foto: "/perfil.jpg",
    },
    {
      nome: "Beatriz Oliveira",
      escola: "Escola Estrela do Saber",
      materia: "Português",
      pontos: 1380,
      foto: "/perfil.jpg",
    },
    {
      nome: "João Pedro",
      escola: "Colégio Nacional",
      materia: "Biologia",
      pontos: 1270,
      foto: "/perfil.jpg",
    },
  ];

  // Ordena por pontuação
  const ranking = [...usuarios].sort((a, b) => b.pontos - a.pontos);
  const top3 = ranking.slice(0, 3);
  const resto = ranking.slice(3);

  return (
    <div className="min-h-screen bg-white p-10 pt-20">
      <h1 className="text-3xl font-bold text-center text-zinc-800 mb-10">
        🏆 Ranking dos Alunos
      </h1>

      {/* === TOPO (3 melhores) === */}
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-16">
        {/* 2º lugar */}
        <div className="flex flex-col items-center">
          <HexagonoPerfil src={top3[1].foto} size={110} />
          <p className="font-semibold text-zinc-700 mt-2">{top3[1].nome}</p>
          <p className="text-sm text-zinc-500">{top3[1].pontos} pts</p>
        </div>

        {/* 1º lugar */}
        <div className="flex flex-col items-center">
          <HexagonoPerfil src={top3[0].foto} size={140} destaque />
          <p className="font-bold text-zinc-800 mt-3">{top3[0].nome}</p>
          <p className="text-zinc-600 font-medium">{top3[0].pontos} pts</p>
          <p className="text-xs text-yellow-600 font-semibold mt-1">🥇 1º Lugar</p>
        </div>

        {/* 3º lugar */}
        <div className="flex flex-col items-center">
          <HexagonoPerfil src={top3[2].foto} size={100} />
          <p className="font-semibold text-zinc-700 mt-2">{top3[2].nome}</p>
          <p className="text-sm text-zinc-500">{top3[2].pontos} pts</p>
        </div>
      </div>

      {/* === LISTA DOS DEMAIS === */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-200">
            <tr className="text-left text-zinc-700">
              <th className="py-4 px-6">Posição</th>
              <th className="py-4 px-6 text-right">Pontuação</th>
              <th className="py-4 px-6">Usuário</th>
              <th className="py-4 px-6">Melhor Matéria</th>
              <th className="py-4 px-6">Escola</th>
            </tr>
          </thead>
          <tbody>
            {resto.map((user, index) => (
              <tr
                key={user.nome}
                className="border-b border-zinc-100 hover:bg-zinc-50 transition"
              >
                <td className="py-4 px-6 text-right font-semibold text-zinc-500">
                  {index + 4}º
                </td>
                <td className="py-4 px-6 text-left font-semibold text-zinc-700">
                  {user.pontos}
                </td>
                <td className="py-4 px-6 font-medium text-zinc-800">
                  {user.nome}
                </td>
                <td className="py-4 px-6 text-zinc-600">{user.escola}</td>
                <td className="py-4 px-6 text-zinc-600">{user.materia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
