"use client";

import { HexagonoPerfil } from "@/app/ui/hexUser";

interface Usuario {
  nome: string;
  sala: string;
  pontos: number;
  foto: string;
}

export default function RankingPage() {
  // Simulando dados de usuários
  const usuarios: Usuario[] = [
    {
      nome: "Monique Moraes",
      sala: "Matemática",
      pontos: 1850,
      foto: "/perfil.jpg",
    },
    {
      nome: "Lucas Andrade",
      sala: "História",
      pontos: 1720,
      foto: "/perfil.jpg",
    },
    {
      nome: "Ana Clara Souza",
      sala: "3° A",
      pontos: 1600,
      foto: "/perfil.jpg",
    },
    {
      nome: "Rafael Lima",
      sala: "3° B",
      pontos: 1450,
      foto: "/perfil.jpg",
    },
    {
      nome: "Beatriz Oliveira",
      sala: "2° A",
      pontos: 1380,
      foto: "/perfil.jpg",
    },
    {
      nome: "João Pedro",
      sala: "3° A",
      pontos: 1270,
      foto: "/perfil.jpg",
    },
  ];

  // Ordena por pontuação
  const ranking = [...usuarios].sort((a, b) => b.pontos - a.pontos);
  const top3 = ranking.slice(0, 3);
  const resto = ranking.slice(3);

  // Tamanhos dos hexágonos para responsividade (o tamanho padrão é celular)
  const size1stMobile = 110; 
  const size2ndMobile = 90; 
  const size3rdMobile = 80; 

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 pt-16 sm:pt-20">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-zinc-800 mb-8 sm:mb-10">
        🏆 Ranking dos Alunos
      </h1>

      {/* === TOPO (3 melhores) - Mantém disposição horizontal no mobile e desktop === */}
      <div className="flex flex-row justify-center items-end gap-4 md:gap-8 mb-12 sm:mb-16">
        
        {/* 2º lugar */}
        <div className="flex flex-col items-center min-w-min">
          <HexagonoPerfil 
            src={top3[1].foto} 
            size={size2ndMobile} 
            className="md:w-[110px] md:h-[110px]"
          />
          <p className="font-semibold text-zinc-700 mt-2 text-center text-sm sm:text-base">{top3[1].nome}</p>
          <p className="text-xs sm:text-sm text-zinc-500">{top3[1].pontos} pts</p>
        </div>

        {/* 1º lugar */}
        <div className="flex flex-col items-center min-w-min">
          <HexagonoPerfil 
            src={top3[0].foto} 
            size={size1stMobile} 
            destaque 
            className="md:w-[140px] md:h-[140px]"
          />
          <p className="font-bold text-zinc-800 mt-3 text-center text-base sm:text-lg">{top3[0].nome}</p>
          <p className="text-zinc-600 font-medium text-sm sm:text-base">{top3[0].pontos} pts</p>
          <p className="text-xs text-yellow-600 font-semibold mt-1">🥇 1º Lugar</p>
        </div>

        {/* 3º lugar */}
        <div className="flex flex-col items-center min-w-min">
          <HexagonoPerfil 
            src={top3[2].foto} 
            size={size3rdMobile} 
            className="md:w-[100px] md:h-[100px]"
          />
          <p className="font-semibold text-zinc-700 mt-2 text-center text-sm sm:text-base">{top3[2].nome}</p>
          <p className="text-xs sm:text-sm text-zinc-500">{top3[2].pontos} pts</p>
        </div>
      </div>

    {/* === LISTA DOS DEMAIS - Tabela com Rolagem Horizontal e Conteúdo Justificado à Esquerda === */}
      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg overflow-x-auto border border-zinc-200">
        <table className="w-full min-w-[500px] bg-white">
          <thead className="bg-orange-200 sticky top-0">
            <tr className="text-left text-zinc-700 text-sm md:text-base whitespace-nowrap">
              {/* Ajuste de Largura: 2/12 */}
              <th className="py-3 px-4 md:py-4 md:px-6 text-left w-2/12">Posição</th> 
              {/* Ajuste de Largura: 3/12 */}
              <th className="py-3 px-4 md:py-4 md:px-6 text-left w-3/12">Pontuação</th>
              {/* Ajuste de Largura: 4/12 */}
              <th className="py-3 px-4 md:py-4 md:px-6 text-left w-4/12">Usuário</th>
              {/* Ajuste de Largura: 3/12 */}
              <th className="py-3 px-4 md:py-4 md:px-6 text-left w-3/12">Sala</th>
            </tr>
          </thead>
          <tbody>
            {resto.map((user, index) => (
              <tr
                key={user.nome}
                className="border-b border-zinc-100 hover:bg-orange-50/50 transition text-sm md:text-base whitespace-nowrap"
              >
                {/* 1. Posição */}
                <td className="py-3 px-4 md:py-4 md:px-6 text-left font-semibold text-zinc-500">
                  {index + 4}º
                </td>
                {/* 2. Pontuação */}
                <td className="py-3 px-4 md:py-4 md:px-6 text-left font-semibold text-zinc-700">
                  {user.pontos}
                </td>
                {/* 3. Usuário */}
                <td className="py-3 px-4 md:py-4 md:px-6 font-medium text-zinc-800">
                  {user.nome}
                </td>
                {/* 4. Sala */}
                <td className="py-3 px-4 md:py-4 md:px-6 text-zinc-600">{user.sala}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
