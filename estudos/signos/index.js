import dados from './dados/dados.js';
import funcoes from './funcoes/funcoes.js';

let dataApp = new Date();

const nomeSigno = funcoes(dados,dataApp);
console.log(nomeSigno);