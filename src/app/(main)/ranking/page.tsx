import { HexagonoPerfil } from "@/app/ui/hexUser";
import HexButton from "@/app/ui/hexFase";

export default function Page() {
  return (
    <div className="flex justify-center bg-white">
      {/* <HexButton/>Botão Hexágono com Modal */}
      <div className="relative min-h-screen w-full max-w-3xl bg-red-200 px-4 py-8 mt-10">
        {/* Linha/Trilha: posicione-a dentro do mesmo container.
            z-0 faz ela ficar atrás dos hexágonos (que devem ter z-10). */}
            
        <div className="absolute top-8 left-12 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} destaque />
        </div>

        <div className="absolute top-20 left-35 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>

        <div className="absolute top-35 left-12 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>

        <div className="absolute top-50 left-35 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>
        <div className="absolute top-65 left-12 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} destaque />
        </div>

        <div className="absolute top-80 left-35 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>

        <div className="absolute top-95 left-12 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>

        <div className="absolute top-110 left-35 z-10">
          <HexagonoPerfil src="/Alva_teste.png" size={100} />
        </div>
      </div>
    </div>
  )
}