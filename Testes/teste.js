import leia from 'readline-sync';

var peso = leia.question("Informe seu peso:");
var altura = leia.question("Informe sua altura:");

//Number(valor) só é necessário quando se faz adição.

var imc = peso/ (altura * altura);
console.log("Seu IMC é:"+ imc.toFixed(2));



