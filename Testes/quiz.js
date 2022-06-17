import leia from 'readline-sync';

let perguntas = [
    { pergunta: "Qual o nome do criador deste programa?", respostaCorreta: "Rafael" },
    { pergunta: "Qual o sobrenome do Criador? ", respostaCorreta: "Fontana" },
    { pergunta: "Qual o nome da namorada do Criador? ", respostaCorreta: "Evellyn" },
    { pergunta: "Qual a idade do Criador? ", respostaCorreta: "19" },
];

let respostas = [
    ["Rafael", "José", "Sandra", "Filipe"],
    ["Albino", "Santana", "Fontana", "Zulu"],
    ["Joana", "Maria", "Evellyn", "Amanda"],
    ["19", "20", "30", "25"],
];

let posicao = 0;

while (posicao < perguntas.length) {

    console.log(perguntas[posicao].pergunta);
    for (let i = 0; i < 4; i++) {
        console.log("[" + i + "]" + respostas[posicao][i]);
    }

    let escolha = leia.question("Escolha um número: ");

    if (respostas[posicao][escolha] == perguntas[posicao].respostaCorreta) {
        console.log("Você acertou!");
        posicao++;
    } else {
        console.log("Você errou.");
    }
}



