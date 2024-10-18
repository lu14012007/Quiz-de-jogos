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
        correta: 1 // A primeira alternativa é a correta
    },
    {
        enunciado: "Em que ano a Fórmula 1 introduziu a regra do DRS (Drag Reduction System)?",
        alternativas: [
            "2009",
            "2011"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual equipe detém o recorde de mais vitórias consecutivas em uma temporada?",
        alternativas: [
            " Mercedes",
            "Red Bull Racing"
        ],
        correta: 0
    },
    {
        enunciado: "Quem é o único piloto a ter vencido corridas com cinco equipes diferentes?",
        alternativas: [
            " Lewis Hamilton",
            "Fernando Alonso"
        ],
        correta: 1
    },
    {
        enunciado: "Qual é o nome da pista que sediou o primeiro Grande Prêmio de Fórmula 1?",
        alternativas: [
            "Silverstone",
            "Monza"
        ],
        correta: 0
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões para as alternativas
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
    caixaPrincipal.style.display = 'none'; // Esconde a caixa de perguntas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Adiciona classe para animação
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove('mostrar');
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostraPergunta();
    });
    caixaResultado.innerHTML = ''; // Limpa conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializa a primeira pergunta
mostraPergunta();