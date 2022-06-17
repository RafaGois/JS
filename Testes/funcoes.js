function soma (n1,n2) {
    return n1 + n2;
};

console.log(soma(4,4));

var notasAluno1 = [5,7,8,4,7,6];
var notasAluno2 = [4,5,4,3,6,8];

function media(array) {
    var total = 0;
    for (var obj of array) {
        total += obj; 
    }

    return (total / array.length).toFixed(1);
}

function valida(media) {
    return "Media aluno: " + media + " " + ((media >= 6 ) ? "Aprovado " : "Reprovado");
}

console.log(valida(media(notasAluno1)));
console.log(valida(media(notasAluno2)));

// Arrow Function
const impN = (nome, sobrenome) => {return nome + " " + sobrenome;} //código compacto

var nCompleto = impN("Rafael","Fontana");
console.log(nCompleto);

