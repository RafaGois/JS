var carros = ["Ferrari SF80 Stradalle","Lamborghini Huracan", "Porsche 911S"];

carros.push("Dodge Ram 2500");
console.log(carros);
//remove o ultimo item do array
carros.pop();
console.log(carros);
//coloca um item no final do array
carros.push("Dodge Ram 2500");
//remove um elemento desejado
carros.splice(3,1)
console.log(carros);

// remove o primeiro elemento
carros.shift();
console.log(carros);

// adicionando um objeto a um array de objetos.
var produto = {nome: "Combo sushi 50 peças", quantidade: 1, preco: 100};

var cesta = [
    {nome: "Temaki Filadélfia", quantidade: 3, preco: 17},
    {nome: "Hot Filadélfia", quantidade: 3, preco: 18},
];

cesta.push(produto);

console.log(cesta);

// imprimindo com for each
console.log("\n");

function imp (produto,index) {
    console.log(index + "-" + produto.nome + "-"+ produto.preco);
}
cesta.forEach(imp)

// map - clona um array, podendo selecionar o que pode ser clonado

function retornaProduto (produto) {
    const produtoExibido = {
        nome: produto.nome,
        preco: produto.preco,
    }
    return produtoExibido;
};

const produtoExibido = cesta.map(retornaProduto);
console.log(produtoExibido);

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
//pode ser definido uma regra para passar os valores ao novo array através do map.
function abreviaMes(mes) {
    return mes.substr(0,3);
};

const mesesFormatados = meses.map(abreviaMes);
console.log("\n");
console.log(mesesFormatados);

//filter
//atribui a um novo array valores de um array que passaram por um filtro.

function verifica (obj) {
    if(obj.preco >= 100) {
        return obj;
    }
}

var vetorPolido = cesta.filter(verifica);
console.log(vetorPolido);


var boletos = [
    {id: 1, nome: "Água", valor: 100, pago: true},
    {id: 2, nome: "Energia", valor: 300, pago: false},
    {id: 3, nome: "Tênis", valor: 50, pago: false},
    {id: 4, nome: "Celular", valor: 200, pago: true},
];

function verificaPago (conta) {
    if(conta.pago == false) {
        return conta;
    }
    
};

var contasAPagar = boletos.filter(verificaPago);
console.log("\n");
console.log(contasAPagar);

// reduce - reduz um array a uma única variável
// concatena os valores passados como argumento.

function retornaValor (total, obj) {
    var valor = 0;
    if(obj.pago == false) {
        valor +=obj.valor;
    }
    

    return Number(total) + Number(valor);
}

var valorTotal = boletos.reduce(retornaValor,"");
console.log("Total a pagar-> " + valorTotal);

// sort- retorna um vetor ordenado.

var comida = ["Carne bovina", "Banana", "Frango","Arroz","Sassami"];

console.log("Vetor desordenado ->");
console.log(comida);

comida.sort();

console.log("Vetor ordenado em ordem alfabética ->");
console.log(comida);


var precos = [30,40,10,1,0,60];

console.log("Vetor desordenado ->");
console.log(precos);

function ordenaNumeros (a,b) {
    //ordem crescente
    //return a - b;

    //ordem decrescente
    return b - a;
}

precos.sort(ordenaNumeros);

console.log("Vetor ordenado em ordem Numérica ->");
console.info(precos);

console.log("\n");

var alunos = [
    {nome: "Rafael", media: 8},
    {nome: "Henry", media: 4},
    {nome: "José", media: 7},
    {nome: "Matheus", media: 5},
    {nome: "Luan", media: 7},
];

console.log("Array de objetos desordenado ->");
console.info(alunos);

function ordenaMedia (a,b) {
    return b.media - a.media;
}

alunos.sort(ordenaMedia);

console.log("Array de objetos ordenado ->");
console.info(alunos);




