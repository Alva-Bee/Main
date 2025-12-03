"use client";

import React, { useState, useEffect } from 'react'; // Importação de useState e useEffect

// === Constantes de Estilo Reutilizadas para Consistência ===
const PRIMARY_ORANGE = "bg-orange-600 hover:bg-orange-700 text-white"; 
const INACTIVE_GRAY = "text-gray-500 hover:text-orange-600";
// Cores para Light Mode
const BACKGROUND_LIGHT = "bg-gray-50"; // Fundo principal claro
const CARD_BACKGROUND_LIGHT = "bg-white"; // Fundo para elementos flutuantes (card do vídeo)
const TEXT_COLOR_LIGHT = "text-gray-800"; // Cor de texto principal (ajustado para melhor contraste)
const BORDER_LIGHT = "border-gray-200"; // Borda leve
// O retângulo de destaque na imagem de referência parece um tom avermelhado/rosa claro
const HIGHLIGHT_RED_LIGHT = "bg-red-50/70 border-2 border-red-300"; 


// Componente de Botão simples para reutilização (baseado no QuizApp original)
const ActionButton = ({ children, onClick, colorClass, className = "" }) => (
    <button
        onClick={onClick}
        className={`
            ${colorClass}
            px-8 py-3 font-bold text-lg rounded-lg transition duration-300 shadow-xl shadow-orange-300/50
            w-full sm:w-auto
            ${className}
        `}
    >
        {children}
    </button>
);

// === Componente de Navegação Inferior (Bottom Navbar) ===
const BottomNav = () => {
    // Icones usando SVG ou Emojis simples (adaptando-se ao estilo da imagem anexada)
    const navItems = [
        { name: "Início", icon: "🏠", active: true }, // Assumindo "Início" como ativo
        { name: "Ranking", icon: "🏆", active: false },
        { name: "Badges", icon: "🏅", active: false },
        { name: "Perfil", icon: "👤", active: false },
    ];

    return (
        // A navbar é fixa no fundo e visível apenas em telas pequenas (sm:hidden)
        // Note o z-index alto para garantir que fique acima de outros elementos
        <nav className={`fixed bottom-0 left-0 right-0 z-30 sm:hidden ${CARD_BACKGROUND_LIGHT} border-t ${BORDER_LIGHT} shadow-2xl p-2`}>
            <div className="flex justify-around items-center h-14">
                {navItems.map((item) => (
                    <div 
                        key={item.name} 
                        className={`flex flex-col items-center p-1 cursor-pointer transition duration-200 ${item.active ? 'text-orange-600' : INACTIVE_GRAY}`}
                    >
                        <span className="text-xl mb-0.5">{item.icon}</span>
                        <span className="text-xs font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </nav>
    );
};

// Dados simulados que seriam retornados da API
const mockVideoData = {
    title: "O QUE É DINHEIRO?", // Título principal
    videoId: "qqR15Cn5R7Y", // ID para o embed do YouTube
    textTitle: "Contexto do Vídeo", // Título da seção de texto
    textContent: [ // Conteúdo do texto (parágrafos)
        "Este vídeo (ID: qqR15Cn5R7Y) explora a definição e a evolução do dinheiro ao longo da história humana. Compreender o que dá valor ao dinheiro é o primeiro passo para uma gestão financeira eficaz, que é o tema central deste módulo.",
        "LOREM IPSUM: Pode-se referir a diversas coisas, como a forma como a sociedade define valor, os meios de troca aceitos universalmente, ou a reserva de valor ao longo do tempo. O conceito é fundamental para entender economia e investimento.",
    ],
    youtubeLink: "https://youtu.be/qqR15Cn5R7Y" // Link para o vídeo no YouTube
};


/**
 * Componente de Página de Visualização de Vídeo.
 * * Agora carrega dados de uma API simulada.
 */
function VideoPage() {
    const [videoData, setVideoData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Efeito para simular a busca de dados da API ao montar o componente
    useEffect(() => {
        const fetchVideoData = () => {
            // Simula um atraso de rede de 1.5 segundos
            setTimeout(() => {
                setVideoData(mockVideoData);
                setIsLoading(false);
            }, 1500);
        };

        fetchVideoData();
    }, []); // Array de dependências vazio garante que roda apenas na montagem

    // Função para o clique do botão QUIZ. Redireciona para /quizz.
    const handleQuizClick = () => {
        console.log("Navegando para /quizz...");
        // Usa window.location.pathname para mudar a rota, simulando a navegação
        window.location.pathname = "/quizz";
    };

    // A cor de destaque (HIGHLIGHT_RED_LIGHT) simula o retângulo rosa da imagem
    const videoContainerStyle = `${HIGHLIGHT_RED_LIGHT} rounded-xl shadow-2xl overflow-hidden`;

    // Exibir estado de carregamento
    if (isLoading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${BACKGROUND_LIGHT} p-4 pt-16 sm:p-8 sm:pt-24 font-sans`}>
                <p className="text-xl font-medium text-orange-600">Carregando conteúdo do vídeo...</p>
            </div>
        );
    }
    
    // Calcula o embedUrl do YouTube
    const embedUrl = `https://www.youtube.com/embed/${videoData.videoId}?rel=0`;

    // Renderiza o conteúdo da página depois que os dados são carregados
    return (
        // O padding inferior (pb-[calc(4rem+56px)]) é a soma do espaço para a BottomNav (56px)
        // mais o espaço para a Action Bar do QUIZ (aprox 4rem/64px) para mobile.
        <div className={`min-h-screen ${BACKGROUND_LIGHT} p-4 pt-16 sm:p-8 sm:pt-24 font-sans pb-[150px] sm:pb-8`}>
            
            <div className="max-w-4xl mx-auto">

                {/* Título da Seção (Usando dados da API) */}
                <h1 className={`text-4xl sm:text-5xl font-extrabold ${TEXT_COLOR_LIGHT} mb-12 uppercase`}>
                    {videoData.title}
                </h1>

                {/* Card do Vídeo */}
                <div className={`${videoContainerStyle} w-full`}>
                    
                    {/* Container responsivo para o iframe do YouTube. (Usando ID da API) */}
                    <div className="relative pt-[56.25%] w-full">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={embedUrl}
                            title={`YouTube video player - ${videoData.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

                {/* Conteúdo de Texto (Usando dados da API) */}
                <div className={`mt-10 ${TEXT_COLOR_LIGHT} ${CARD_BACKGROUND_LIGHT} p-6 rounded-xl shadow-lg border ${BORDER_LIGHT}`}>
                    <h2 className="text-xl font-bold mb-3 text-orange-600">{videoData.textTitle}</h2>
                    
                    {/* Renderiza cada parágrafo do conteúdo */}
                    {videoData.textContent.map((paragraph, index) => (
                        <p key={index} className={`text-gray-700 leading-relaxed ${index > 0 ? 'mt-4 text-sm' : ''}`}>
                            {paragraph}
                        </p>
                    ))}

                    <p className="text-right mt-4">
                         <a 
                            href={videoData.youtubeLink} // Link do YouTube (da API)
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`text-sm font-medium underline text-orange-600 hover:text-orange-700`}
                        >
                            Ver no YouTube
                        </a>
                    </p>
                </div>
                
                {/* Botão QUIZ para DESKTOP/TABLET (aparece no final do conteúdo) */}
                <div className="hidden sm:flex mt-8 mb-8 justify-end">
                    <ActionButton onClick={handleQuizClick} colorClass={PRIMARY_ORANGE}>
                        QUIZ
                    </ActionButton>
                </div>

            </div>
            
            {/* === Action Bar Fixo para Mobile (Botão QUIZ) === */}
            <div className={`fixed bottom-16 left-0 right-0 z-30 sm:hidden p-4 ${CARD_BACKGROUND_LIGHT} shadow-2xl`}>
                <ActionButton onClick={handleQuizClick} colorClass={PRIMARY_ORANGE}>
                    QUIZ
                </ActionButton>
            </div>
            
            {/* O BottomNav é renderizado fora do max-w-4xl para ocupar toda a largura em mobile */}
            <BottomNav />
            
        </div>
    );
}

export default VideoPage;