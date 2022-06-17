//if
var idade = 18;
if(idade > 18 ) {
    console.log("Você é maior de idade...");
} else {
    console.log("Você não é maior de idade...");
}

var idade1 = 18;
var idade2 = "18";

if(idade1 == idade2) {
    console.log("Idade igual");
}
if(idade1 === idade2) {
    console.log("Idade igual 2");
}

//if else ternário

var nota = 6;
var valida = nota > 7 ? "aprovado" : "reprovado";
console.log(valida);

// curto circuito

var aprovado = true;

aprovado && console.log("Parabéns");

//switch

var ddd = 49;

switch(ddd) {
    case 63:
        console.log("Tocantins");
        break;
    case 49:
    case 48:
    case 47:
        console.log("Santa Catarina");
        break;

    default: 
        console.log("Opção não encontrada...");
        break;
}

// continue

var nomes = [
    {nome: "Rafael", idade: 19},
    {nome: "Joseph", idade: 11},
    {nome: "Tom", idade: 17},
    {nome: "Gabriel", idade: 22},
];

for (var obj of nomes) {
    if(obj.idade < 18) {
        continue;
        // continue pula execução...
    }
    console.log(obj.nome + " é maior de idade...")
}

var num = 50;
num.toFixed(2);