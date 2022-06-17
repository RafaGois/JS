import calcImc from "./calc.js"
import situacaoImc from './sutuacao.js';

let imc = calcImc(79,1.75).toFixed(1);

console.log(imc);
console.log(situacaoImc(imc));