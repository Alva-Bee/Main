// export default function LoginPage() {
//   return (
//     <div className="flex min-h-screen bg-white">
//       <h1 className="m-auto text-3xl font-bold text-black">Login Page</h1>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui você pode adicionar a lógica de login/cadastro
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300 p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex justify-center mb-4">
          <Image
            src="/Alva_Logo.png" // caminho da imagem na pasta /public
            alt="Logo da aplicação"
            width={70}
            height={70}
            className="rounded-full"
            priority
          />
        </div>

        <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-800">
          Entrar na Conta
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Input de Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 p-2 text-zinc-800 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          {/* Input de Senha */}
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-zinc-600">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 p-2 text-zinc-800 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-zinc-800 p-2 font-medium text-white transition hover:bg-zinc-700"
          >
            Prosseguir
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-zinc-800 font-medium hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
