import leia from 'readline-sync';

const sorteia = (max) => {
    return Math.floor(Math.random() * max + 1)
}

const n1 = sorteia(50);

let vet = [];
let contador = 0;

console.log(`Número sorteado: ${n1}`);

for(let i = 0;i <= n1; i++) {
    if(n1 % i == 0) {
        console.log(n1+" / "+i+" = 0");
        vet[contador] = i;
        contador++;
    }
}


let n2 = 0;
if(vet.length > 2) {
    vet.shift();
    vet.pop();
}

console.info(vet);

n2 = vet[Math.floor(Math.random() * vet.length)];

console.log("Resposta: "+n1 / n2);
let resposta = leia.question(`Informe o resultado de ${n1} / ${n2}: `);
console.log((resposta == n1 / n2)? "Acertou" : "Errou!");