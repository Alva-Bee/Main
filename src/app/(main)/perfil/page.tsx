"use client";

// import Image from "next/image";
import { HexagonoPerfil } from "@/app/ui/hexUser";


export default function PerfilPage() {
  // Dados do usuário
  const usuario = {
    nome: "Monique Moraes",
    idade: 16,
    ano: "2º ano do Ensino Médio",
    escola: "Colégio Horizonte Azul",
    foto: "/perfil.jpg", // imagem em /public/perfil.png
  };

  // Dados de desempenho
  const desempenho = {
    ranking: 3,
    media: 8.7,
    pontos: 1245,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300">
      {/* === SEÇÃO PRINCIPAL DE PERFIL (tela cheia com margem de 50px) === */}
      <div className="h-125 flex items-center justify-center p-[50px]">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl w-1080 h-50 sm:p-40">
          
        <div className="relative w-48 h-48 flex-shrink-0">
          <HexagonoPerfil 
          src={usuario.foto}
          size={200}
          alt={`Foto de ${usuario.nome}`}
          destaque 
          />
        </div>

          {/* Informações */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-3xl font-semibold text-zinc-800">
              {usuario.nome}
            </h1>
            <p className="text-lg text-zinc-600 mt-2">
              {usuario.idade} anos • {usuario.ano}
            </p>
            <p className="text-md text-zinc-500 mt-1">{usuario.escola}</p>
          </div>
        </div>
      </div>

      {/* === SEÇÃO DE ESTATÍSTICAS === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto p-[50px] -mt-25">
        {/* Ranking */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-zinc-500 text-sm font-medium">
            Sua posição no ranking
          </h2>
          <p className="text-5xl font-bold text-zinc-800 mt-2">
            #{desempenho.ranking}
          </p>
        </div>

        {/* Nota média */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-zinc-500 text-sm font-medium">Sua nota média</h2>
          <p className="text-5xl font-bold text-zinc-800 mt-2">
            {desempenho.media.toFixed(1)}
          </p>
        </div>

        {/* Total de pontos */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-zinc-500 text-sm font-medium">Total de pontos</h2>
          <p className="text-5xl font-bold text-zinc-800 mt-2">
            {desempenho.pontos}
          </p>
        </div>
      </div>
    </div>
  );
}
