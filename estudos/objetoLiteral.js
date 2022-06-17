var produto = {
    id: 001,
    nome: "Relógio cassio GShock",
    preco: 350.00
};

var verificaPreco = produto.preco > 200;

if(verificaPreco) {
    console.log(produto.nome + " é mais carooooo.");
} else {
    console.log(produto.nome + "é barato.");
};

var disciplinas = [
    {id: 1, nome: "Programação", cargaHoraria: 1200},
    {id: 2, nome: "POO", cargaHoraria: 800},
    {id: 3, nome: "Inglês", cargaHoraria: 600},
];

var primeiraDisciplina = disciplinas[0];

console.log(disciplinas[1]);

var clientes = {
    ids: [1,4,7],
    nomes: ["Rafael", "José", "Jose"],
    empresas: ["ae","Fazenda","latifúndio"],
}

console.log(clientes);

for (var obj of clientes.ids) {
    console.log(obj);
};