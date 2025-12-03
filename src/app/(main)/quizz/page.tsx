"use client";
/**
 * Componente principal da aplicação de Quiz, seguindo o estilo visual ALVA (laranja)
 * em modo claro (light mode) e layout de tela cheia sem scroll, com cabeçalho fixo.
 */
import React, { useState, useEffect, useCallback } from 'react';

// Constantes de Estilo para Light Mode
const PRIMARY_ORANGE = "bg-orange-600 hover:bg-orange-700 text-white"; 
const OUTLINE_LIGHT = "border border-gray-300 text-gray-700 hover:bg-gray-200"; 
const CORRECT_GREEN = "bg-green-600 hover:bg-green-700 text-white";
const INCORRECT_RED = "bg-red-600 hover:bg-red-700 text-white";
const BACKGROUND_LIGHT = "bg-gray-50"; // Fundo principal claro
const CARD_BACKGROUND_LIGHT = "bg-white"; // Fundo para elementos flutuantes (opções, cards)
const TEXT_COLOR_LIGHT = "text-gray-800"; // Cor de texto principal, escuro no light mode
const BORDER_LIGHT = "border-gray-200"; // Borda leve

// Estrutura de dados para as perguntas do quiz
const quizData = [
    {
        id: 1,
        question: "Qual é o melhor destino para seu primeiro investimento?",
        // Simulação do elemento visual (como o urso/emoji na imagem de referência)
        visualHint: "💰", 
        // Simulação da 'palavra' a ser traduzida (ou foco da pergunta)
        focus: "Renda Fixa", 
        options: [
            { text: "Ações de alto risco", isCorrect: false },
            { text: "CDB (Certificado de Depósito Bancário)", isCorrect: true },
            { text: "Criptomoedas (memecoin)", isCorrect: false },
            { text: "Ouro e commodities", isCorrect: false },
        ],
        explanation: "CDBs e outros títulos de Renda Fixa são ideais para iniciantes, oferecendo segurança e previsibilidade.",
    },
    {
        id: 2,
        question: "O que significa 'Diversificação' no mundo financeiro?",
        visualHint: "📊",
        focus: "Risco",
        options: [
            { text: "Comprar apenas um tipo de ativo", isCorrect: false },
            { text: "Aplicar 100% do seu capital em ações", isCorrect: false },
            { text: "Distribuir investimentos em diferentes classes de ativos", isCorrect: true },
            { text: "Gastar todo o seu salário em uma semana", isCorrect: false },
        ],
        explanation: "Diversificar é o ato de espalhar seus investimentos para reduzir a exposição a perdas em um único ativo ou setor.",
    }
];

// Componente de Botão (Adaptado para o Quiz)
const QuizButton = ({ children, onClick, colorClass, disabled = false, fullWidth = false, className = "" }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            ${colorClass}
            ${fullWidth ? 'w-full' : 'w-auto'}
            px-6 py-3 font-semibold text-lg rounded-lg transition duration-300 shadow-lg
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
        `}
    >
        {children}
    </button>
);

// Componente de Opção de Resposta
const OptionButton = ({ text, index, isSelected, onClick, state, focus }) => {
    // Estilo base para modo claro
    let styleClass = OUTLINE_LIGHT;

    if (state === 'checked') {
        if (focus === 'correct') {
            styleClass = CORRECT_GREEN + " shadow-green-400/50"; 
        } else if (focus === 'incorrect') {
            styleClass = INCORRECT_RED + " shadow-red-400/50"; 
        }
    } else if (isSelected) {
        // Estilo de seleção (laranja primário)
        styleClass = PRIMARY_ORANGE + " ring-4 ring-orange-400/50 shadow-md";
    } else {
        // Estilo padrão (sem seleção, não verificado) - Light Mode
        styleClass = `${CARD_BACKGROUND_LIGHT} ${OUTLINE_LIGHT} shadow-sm`;
    }
    
    // Define a cor do texto e do círculo interno
    const internalTextColor = (styleClass.includes('text-white') || isSelected) ? 'text-white' : TEXT_COLOR_LIGHT;
    const circleClasses = isSelected || state === 'checked' 
        ? 'bg-white text-gray-800' // Círculo branco quando selecionado ou verificado
        : 'border border-gray-300 text-gray-500 bg-white'; // Círculo claro padrão


    return (
        <button
            onClick={onClick}
            disabled={state === 'checked'}
            className={`
                ${styleClass}
                w-full flex items-center text-left space-x-4
                p-4 rounded-xl transition duration-200 mb-3
            `}
        >
            {/* Círculo com o número da opção */}
            <div className={`
                h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold
                ${circleClasses}
            `}>
                {index + 1}
            </div>
            {/* O texto da opção usa a cor interna definida acima, ou branco se for botão de cor */}
            <span className={`${internalTextColor} text-lg flex-grow`}>{text}</span>
        </button>
    );
};


// Componente Principal
function QuizApp() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null); 
    const [quizState, setQuizState] = useState('initial'); 
    const [score, setScore] = useState(0);

    const currentQuestion = quizData[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quizData.length - 1;
    const totalQuestions = quizData.length; // Total de perguntas

    // Função para tratar a seleção de uma opção
    const handleOptionSelect = (index) => {
        if (quizState === 'initial') {
            setSelectedOption(index);
        }
    };

    // Função para verificar a resposta
    const handleCheckAnswer = () => {
        if (selectedOption === null) return;

        const isCorrect = currentQuestion.options[selectedOption].isCorrect;

        if (isCorrect) {
            setScore(score + 1);
        }
        
        setQuizState('checked');
    };

    // Função para avançar para a próxima pergunta ou finalizar
    const handleNext = () => {
        if (isLastQuestion) {
            setQuizState('completed'); // Finaliza o quiz
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setQuizState('initial');
        }
    };
    
    // Função para pular a pergunta
    const handleSkip = () => {
        handleNext(); 
    };

    // Barra inferior de feedback (Resposta Correta/Incorreta) - Light Mode
    const feedbackBar = quizState === 'checked' && (
        // Garante que a barra seja grande e que o conteúdo principal não a sobreponha.
        <div className={`fixed bottom-0 left-0 w-full ${CARD_BACKGROUND_LIGHT} border-t-4 border-gray-200 py-6 px-4 sm:px-8 shadow-2xl z-20`}>
            <div className="max-w-2xl mx-auto">
                {/* Linha 1: Feedback e Botão */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <div className={`text-xl font-bold mb-3 sm:mb-0 ${currentQuestion.options[selectedOption].isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {currentQuestion.options[selectedOption].isCorrect ? "Resposta Correta!" : "Incorreto."}
                    </div>
                    <QuizButton 
                        onClick={handleNext} 
                        colorClass={PRIMARY_ORANGE} 
                        className="w-full sm:w-auto"
                    >
                        {isLastQuestion ? "FINALIZAR QUIZ" : "CONTINUAR"}
                    </QuizButton>
                </div>
                {/* Linha 2: Mensagem de explicação (Fica visível) */}
                <p className="text-gray-600 text-sm">
                    **Dica:** {currentQuestion.explanation}
                </p>
            </div>
        </div>
    );

    // Renderização do Estado Final (Quiz Concluído) - Light Mode
    if (quizState === 'completed') {
        return (
            <div className={`h-screen flex items-center justify-center ${BACKGROUND_LIGHT} p-4`}>
                <div className={`text-center max-w-md ${CARD_BACKGROUND_LIGHT} p-8 rounded-xl shadow-2xl`}>
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">Quiz Finalizado!</h2>
                    <p className={`text-2xl ${TEXT_COLOR_LIGHT} mb-6`}>
                        Sua pontuação final é: <span className="font-extrabold text-orange-600">{score} / {quizData.length}</span>
                    </p>
                    <p className="text-gray-600 mb-8">
                        Parabéns! Você concluiu todas as perguntas e demonstrou um bom conhecimento em {currentQuestion.focus}.
                    </p>
                    <QuizButton onClick={() => window.location.reload()} colorClass={PRIMARY_ORANGE}>
                        Recomeçar
                    </QuizButton>
                </div>
            </div>
        );
    }
    
    // Renderização Principal do Quiz - Light Mode
    return (
        <div className={`h-screen flex flex-col ${BACKGROUND_LIGHT}`}>
            
           

            {/* Conteúdo do Quiz 
            pt-40: Aumentei o padding top (antes era pt-32) para empurrar o conteúdo mais para baixo, aumentando a distância do contador.
            pb-40: Mantido o espaço para o feedback bar no rodapé.
            items-start: Garante que o conteúdo comece no topo, permitindo que todas as opções caibam.
            */}
            <main className="flex-grow pt-40 pb-40 p-4 sm:p-6 flex flex-col items-center justify-start overflow-y-auto">
                <div className="w-full max-w-2xl">
                    
                    {/* Título da Pergunta - Light Mode */}
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${TEXT_COLOR_LIGHT} text-center mb-8`}>
                        {currentQuestion.question}
                    </h2>

                    {/* Foco Visual e Hint - Light Mode */}
                    <div className="text-center mb-10">
                        <span className="text-6xl sm:text-8xl block mb-4">{currentQuestion.visualHint}</span>
                        <div className={`inline-block px-4 py-2 bg-gray-200 ${TEXT_COLOR_LIGHT} font-bold rounded-lg shadow-sm border ${BORDER_LIGHT}`}>
                            {currentQuestion.focus}
                        </div>
                    </div>

                    {/* Opções de Resposta */}
                    <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                            <OptionButton
                                key={index}
                                index={index}
                                text={option.text}
                                isSelected={selectedOption === index}
                                onClick={() => handleOptionSelect(index)}
                                state={quizState}
                                focus={quizState === 'checked' ? (option.isCorrect ? 'correct' : (selectedOption === index ? 'incorrect' : '')) : 'initial'}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Rodapé Fixo (Botões de Ação) - Light Mode */}
            {quizState === 'initial' && (
                <footer className={`fixed bottom-0  left-0 w-full z-10 ${CARD_BACKGROUND_LIGHT} border-t ${BORDER_LIGHT} p-4 sm:p-6 shadow-2xl`}>
                    <div className="max-w-2xl mx-auto flex justify-between items-center space-x-4">
                        <QuizButton 
                            onClick={handleSkip} 
                            colorClass={`bg-gray-200 border border-gray-300 text-gray-700 hover:bg-gray-300`} 
                            className="shadow-md"
                        >
                            PULAR
                        </QuizButton>

                        <QuizButton 
                            onClick={handleCheckAnswer} 
                            colorClass={selectedOption !== null ? PRIMARY_ORANGE : "bg-gray-300 text-gray-500"}
                            disabled={selectedOption === null}
                            className="flex-grow sm:flex-grow-0"
                        >
                            VERIFICAR
                        </QuizButton>
                    </div>
                </footer>
            )}

            {feedbackBar}

        </div>
    );
}

export default QuizApp;