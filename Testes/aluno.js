import leia from 'readline-sync';

var nome = leia.question("Informe o nome do aluno: ");
var nota1 = leia.question("Informe a nota 1 do aluno "+ nome +" :");
var nota2 = leia.question("Informe a nota 2 do aluno "+ nome +" :");
var nota3 = leia.question("Informe a nota 3 do aluno "+ nome +" :");

var aluno = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3
};

var media = (Number(aluno.nota1) + Number(aluno.nota2) + Number(aluno.nota3)) / 3;

console.log("A média do aluno "+ aluno.nome + " é: "+ media.toFixed(2));

if(media > 7) {
    console.log("Aluno aprovado...");
} else if (media >= 5 && media < 7) {
    console.log("Aluno de recuperação...");
} else {
    console.log("Reprovado...");
}