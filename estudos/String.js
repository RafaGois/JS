var frase = "Olá mundo, meu nome é Rafaela.";

//Separando uma palavra da frase
var posicaoInicial = 22;
var posicaoFinal = 28;
var palavra = frase.substring(posicaoInicial,posicaoFinal);
console.log(palavra);

//acessando apenas uma palavra da string
console.log(frase[2]);

// template String
// Não precisa dar \n para quebrar linha, apenas continuar uma nova linha
var template =
`Rafael
fontana
Becker 
Gois`;

console.log(template);

// concatenando no template
var nome = "Rafael";
var template2 = `Meu nome é: ${nome}`;

// Tamanho de string
tamNome = nome.length;
console.log(tamNome);

// Deixando tudo minúsculo
var minusculo = "Rafael FOntana Becker Gois";
minusculo = minusculo.toLowerCase();
console.log(minusculo);

// Deixando tudo maiúsculo
var maiusculo = "Rafael FOntana Becker Gois";
maiusculo = maiusculo.toUpperCase();
console.log(maiusculo);

//Removendo os espaços em branco do começo e final da String
var teste = " Rafael  "
console.log(teste);
teste = teste.trim();
console.log(teste); 

// preenchendo caracteres
//começo da sting
console.log(nome.padStart(20," "));
console.log(nome.padStart(20,"-"));
// final da sting
console.log(nome.padEnd(20,"_"));
console.log(nome.padEnd(10,"z"));

// substituindo palavras em Stings
var texto = "Rafael Fontana atualmente é estudante de Inglês";
texto = texto.replace("Inglês","Programação");
console.log(texto);

// retirando partes da frase.
var str = "UM café da manhã descente deve contar no mínimo alguma proteína."

// buscando na frase.
var txtBrasil = "O Brasil é um dos maiores países do mundo, tanto quanto em território quanto em população e economia.";
var find = txtBrasil.indexOf("mundo");
// quando não encontra retorna -1.
console.log(find);

// colocando palavras de uma sting em um array.

var paises = "Brasil Portugal México Inglaterra";
array_paises = paises.split(" ");
console.log(array_paises);


