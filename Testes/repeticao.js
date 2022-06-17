import leia from 'readline-sync';

var alunos = [
    'Rafael',
    'José',
    'Roberval',
    'Filipe',
    'Sandra',
];

console.log("Loop for...");
for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
};

console.log("\nLoop While...");
var j = 0;
while (alunos[j] != null) {
    console.log(alunos[j]);
    j++;
}

console.log("\n Break...");
var find = "Sandras";

var k = 0;

while (alunos[k] != null) {

    if(alunos[k] === find) {
        console.log("Encontrado...");
        break;
    }
    k++;
}

console.log("\nDo...While");
var l = 0;
do {
    console.log(alunos[l]);
    l++;
} while (alunos[l] != null);

console.log("For In...");

for (const obj in alunos) {
    console.log(alunos[obj]);
}

console.log("For Of...");

for (const obj of alunos) {
    console.log(obj);
}

var clientes = [
    {nome: 'Rafael', id: 1},
    {nome: 'Joe', id: 2},
    {nome: 'Thomas', id: 3},
];

for (const objeto of clientes) {

    var nome = objeto.nome;
    var id = objeto.id;
    console.log(nome + " " + id);
    
}