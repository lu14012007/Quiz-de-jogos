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
        correta: 1 // Giuseppe Farina é a alternativa correta
    },
    {
        enunciado: "Em que ano a Fórmula 1 introduziu a regra do DRS (Drag Reduction System)?",
        alternativas: [
            "2009",
            "2011"
        ],
        correta: 1 // 2011 é a alternativa correta
    },
    {
        enunciado: "Qual equipe detém o recorde de mais vitórias consecutivas em uma temporada?",
        alternativas: [
            "Mercedes",
            "Red Bull Racing"
        ],
        correta: 0 // Mercedes é a alternativa correta
    },
    {
        enunciado: "Quem é o único piloto a ter vencido corridas com cinco equipes diferentes?",
        alternativas: [
            "Lewis Hamilton",
            "Fernando Alonso"
        ],
        correta: 1 // Fernando Alonso é a alternativa correta
    },
    {
        enunciado: "Qual é o nome da pista que sediou o primeiro Grande Prêmio de Fórmula 1?",
        alternativas: [
            "Silverstone",
            "Monza"
        ],
        correta: 0 // Silverstone é a alternativa correta
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = '';
    
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPrincipal.style.display = 'none';
    caixaResultado.style.display = 'block';
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
    
    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostraPergunta();
    });
    
    caixaResultado.innerHTML = '';
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

mostraPergunta();
