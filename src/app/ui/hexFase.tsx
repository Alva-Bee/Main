"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface HexagonoPerfilProps {
  src: string;           // caminho da imagem
  alt?: string;          // texto alternativo
  size?: number;         // tamanho em pixels
  destaque?: boolean;    // se for o top player
  textoPopup?: string;   // texto a ser exibido no popup
}

export function HexButton({
  src,
  size = 100,
  destaque,
  alt = "Perfil do Usuário",
  textoPopup = "Texto do popup",
}: HexagonoPerfilProps) {
  const borderSize = 6;
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Fecha o popup ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <div className="relative flex items-center justify-center z-10" ref={popupRef}>
      {/* Hexágono clicável */}
      <motion.div
        onClick={() => setShowPopup(!showPopup)}
        className="cursor-pointer relative flex items-center justify-center"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          background: destaque
            ? "linear-gradient(135deg, #facc15, #f97316)"
            : "linear-gradient(135deg, #6366f1, #a855f7)",
          padding: `${borderSize}px`,
          borderRadius: "12px",
        }}
        whileHover={{ scale: 1.06 }}
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
          <Image src={src} alt={alt} fill className="object-cover" />

          {destaque && (
            <div className="absolute inset-0 ring-4 ring-yellow-400 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition" />
        </div>
      </motion.div>

      {/* Popup (balão) */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-4 py-2 text-sm text-gray-700 border border-gray-200"
        >
          {textoPopup}
          <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-200"></div>
        </motion.div>
      )}
    </div>
  );
}
