"use client";

import { useState } from "react";
import Image from "next/image";

// Definições de dados mockados para as listas
const mockSchools = ["COLLEMAN THE WORLD SCHOOL", "THERZINHA SARTORI PROFESSORA", "ANTONIO MESSIAS SZYMANSKI PROFESSOR", "LUIS WASHINGTON VITA PROFESSOR", "DELFINO RIBEIRO GUIMARAES", "MARILENE DE OLIVEIRA ACETTO PROFESSORA", "MAUA VISCONDE DE", "MARIA ELENA COLONIA PROFESSORA", "EMILIA CREM DOS SANTOS PROFESSORA", "MARCELINA MARIA DA SILVA OLIVEIRA DONA", "IRACEMA CREM PROFESSORA", "MIRNA LOIDE CORREIA FERLE PROFESSORA", "IRENE DA SILVA COSTA PROFESSORA", "MARIA JOSEFINA KUHLMANN FLAQUER PROFESSORA", "OLAVO HANSEN", "MARTA TERESINHA ROSA PROFESSORA", "JOAO PAULO II", "MARLENE CAMARGO RIBEIRO PROFESSORA", "SADA UMEIZAWA PROFESSORA", "MARIA APARECIDA DAMO FERREIRA", "SESI 397 CENTRO EDUCACIONAL", "SESI 079 CENTRO EDUCACIONAL", "ALEXANDRE VENANCIO ARMINAS MONS COLEGIO", "BARAO DE MAUA COLEGIO", "LEONARDO DA VINCI COLEGIO", "ELITE REDE DE ENSINO UNIDADE II", "METODO COLEGIO", "COLEGIO UNIVERSITARIO MAUA", "OBJETIVO MAUA CENTRO EDUCACIONAL", "RENIL COLEGIO", "JOAO RICARDO BORGES DE LIMA", "ETEC DE MAUA", "AFONSO PASCHOTTE PADRE", "JARDIM ZAIRA VIII", "DRUMMOND COLEGIO", "COLEGIO RS INSTITUTO EDUCACIONAL LTDA", "ANTONIO LAPATE NETTO PROFESSOR", "JOSE DANIEL DA SILVEIRA", "HANS GRUDZINSKI", "MERCEDES VALENTINA GIANNOCARIO PROFESSORA", "JARDIM ORATORIO", "MARIA EXPEDITA SILVA PROFESSORA", "VILA MAGINI II", "JARDIM CRUZEIRO", "Outra"];
const mockRooms = ["1º Ano A", "1º Ano B", "1º Ano C","2º Ano A", "2º Ano B", "2º Ano C","3º Ano A", "3º Ano B", "3º Ano C","Sala Especial"];

export default function RegisterPage() {
  // Estados para os campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  setSuccess("");

  if (password !== confirmPassword) {
    setError("As senhas não coincidem. Por favor, verifique.");
    setIsLoading(false);
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        senha: password,
        escola: school,
        sala: room,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Erro ao cadastrar.");
      setIsLoading(false);
      return;
    }

    setSuccess("Cadastro realizado com sucesso!");
    setIsLoading(false);

    // redirecionamento após 1,5s
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);

  } catch (err) {
    setError("Erro ao conectar com o servidor.");
    setIsLoading(false);
  }
};


  return (
    // Novo layout: Centralizado na tela com um fundo suave
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4 sm:p-8 font-sans">
      
      {/* Container do Formulário (Card)
          - Centralizado pelo container pai (flex items-center justify-center)
          - max-w-lg define o limite de largura
          - Mantém o estilo de card (bg-white, shadow-xl, border) em todas as telas
      */}
      <div className="
          w-full
          max-w-lg
          bg-white
          p-8 sm:p-10 lg:p-12
          shadow-xl border border-zinc-200 rounded-2xl
          transition-all duration-300
      ">
        
        {/* Logo/Imagem de Cabeçalho */}
        <div className="flex flex-col items-center mb-8 lg:mb-6">
          <a href="/landingpage" className="cursor-pointer mb-2">
            {/* Usando <img> padrão com placeholder para compatibilidade */}
            <Image 
            src="/alva_titulo_cor.svg" // caminho da imagem na pasta /public
            alt="Logo da aplicação"
            width={100}
            height={100}
            className="rounded-full"
            priority
            />
          </a>
          <h1 className="text-3xl font-bold text-zinc-600 mt-3">Cadastre-se</h1>
          <p className="text-md text-zinc-500 mt-1">Insira seus dados para criar uma conta.</p>
        </div>

        {/* Mensagens de Feedback */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-100 text-red-700 text-sm font-medium border border-red-300 transition-opacity duration-300">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 rounded-xl bg-green-100 text-green-700 text-sm font-medium border border-green-300 transition-opacity duration-300">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          {/* Input de Nome */}
          <InputGroup 
            id="name" 
            label="Nome Completo" 
            type="text" 
            placeholder="Seu nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          
          {/* Input de Email */}
          <InputGroup 
            id="email" 
            label="Email" 
            type="email" 
            placeholder="seu@email.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Senhas: Removido o grid de 2 colunas para manter o layout simples e uniforme em todas as telas */}
          <InputGroup 
            id="password" 
            label="Senha" 
            type="password" 
            placeholder="Mínimo 8 caracteres" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />

          <InputGroup 
            id="confirmPassword" 
            label="Confirme a Senha" 
            type="password" 
            placeholder="Repita sua senha" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
          />

          {/* Seletor de Escola */}
          <SelectGroup 
            id="school" 
            label="Escola" 
            value={school} 
            onChange={(e) => setSchool(e.target.value)} 
            options={mockSchools}
            placeholder="Selecione sua escola"
          />

          {/* Seletor de Sala */}
          <SelectGroup 
            id="room" 
            label="Sala" 
            value={room} 
            onChange={(e) => setRoom(e.target.value)} 
            options={mockRooms}
            placeholder="Selecione sua sala"
          />

          {/* Botão de Cadastro */}
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-6 w-full rounded-lg p-3 font-semibold text-white shadow-lg transition duration-200 cursor-pointer mb-2
              ${isLoading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300'}`}
          >
            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        {/* Link de Login */}
        <p className="mt-8 text-center text-sm text-zinc-600 lg:mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-orange-600 font-medium hover:underline cursor-pointer">
            Faça Login
          </a>
        </p>
      </div>
    </div>
  );
}

// Componente auxiliar para inputs
const InputGroup = ({ id, label, type, placeholder, value, onChange, minLength }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-zinc-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      minLength={minLength}
      className="mt-1 w-full rounded-lg border border-zinc-300 p-3 text-zinc-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition duration-150 shadow-sm"
    />
  </div>
);

// Componente auxiliar para selects
const SelectGroup = ({ id, label, value, onChange, options, placeholder }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-zinc-700">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full rounded-lg border border-zinc-300 p-3 text-zinc-800 bg-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none transition duration-150 shadow-sm"
        style={{
          paddingRight: '3rem', // Espaço para o ícone
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option: string) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {/* Ícone de seta customizado em SVG */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 mt-1">
        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  </div>
);