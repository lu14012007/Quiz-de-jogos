const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi o primeiro piloto a vencer um campeonato mundial de Fórmula 1?",
        alternativas: [
            "Juan Manuel Fangio",
            "Giuseppe Farina"
        ],
        correta: 1 // Giuseppe Farina is the correct answer
    },
    {
        enunciado: "Em que ano a Fórmula 1 introduziu a regra do DRS (Drag Reduction System)?",
        alternativas: [
            "2009",
            "2011"
        ],
        correta: 1 // 2011 is the correct answer
    },
    {
        enunciado: "Qual equipe detém o recorde de mais vitórias consecutivas em uma temporada?",
        alternativas: [
            "Mercedes",
            "Red Bull Racing"
        ],
        correta: 0 // Mercedes is the correct answer
    },
    {
        enunciado: "Quem é o único piloto a ter vencido corridas com cinco equipes diferentes?",
        alternativas: [
            "Lewis Hamilton",
            "Fernando Alonso"
        ],
        correta: 1 // Fernando Alonso is the correct answer
    },
    {
        enunciado: "Qual é o nome da pista que sediou o primeiro Grande Prêmio de Fórmula 1?",
        alternativas: [
            "Silverstone",
            "Monza"
        ],
        correta: 0 // Silverstone is the correct answer
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = '';
}
    perguntaAtual.alternativas.forEach((alternativa, index) =>