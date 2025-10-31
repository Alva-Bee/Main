"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HexagonoPerfilProps {
  src: string;           // caminho da imagem
  alt?: string;          // texto alternativo
  size?: number;         // tamanho em pixels
  destaque?: boolean;    // se for o top player
}

export function HexagonoPerfil({
  src,
  size,
  destaque,
  alt = "Perfil do Usuário",
}: HexagonoPerfilProps) {
    const borderSize = 6;

  return (
    <motion.div
      className="relative flex items-center justify-center z-10"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        clipPath:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        background: destaque
          ? "linear-gradient(135deg, #facc15, #f97316)" // gradiente dourado pro destaque
          : "linear-gradient(135deg, #6366f1, #a855f7)", // gradiente padrão (roxo)
        padding: `${borderSize}px`,
        borderRadius: "12px",
      }}
      whileHover={{ scale: 1.06}}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >

      {/* Imagem interna */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        }}
      >

      {/* Imagem */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        // sizes={`${size - borderSize * 2}px`} // sizes={`${size}px`}
      />

      {/* Borda de destaque */}
      {destaque && (
        <div className="absolute inset-0 ring-4 ring-yellow-400 animate-pulse" />
      )}

      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition" />
    </div>
    </motion.div>
  );
}
