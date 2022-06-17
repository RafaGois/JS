import leia from 'readline-sync';

var salarioMinimo = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}, 
];

var tableInflacao = [
    {inflacao: 5.98, ano: 2010},
    {inflacao: 6.50, ano: 2011},
    {inflacao: 5.84, ano: 2012},
    {inflacao: 5.91, ano: 2013},
    {inflacao: 6.41, ano: 2014},
    {inflacao: 10.67, ano: 2015},
    {inflacao: 6.29, ano: 2016},
    {inflacao: 2.95, ano: 2017},
    {inflacao: 3.75, ano: 2018},
    {inflacao: 4.31, ano: 2019},
    {inflacao: 4.52, ano: 2020},
];

var retorna = false;

do {

console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial d o IPCA");

var op = leia.question("\nInforme o número de sua escolha: ");

if(op < 1 || op > 3) {
    console.log("\nOpção não encontrada...");
    console.log("Tente novamente: \n")
}

} while (op < 1 || op > 3);

op = Number(op);

switch(op) {
    case 1:
        console.log("Você escolheu a opção 1");

        for (var i = 0; i < salarioMinimo.length; i++) {
            var ano = salarioMinimo[i].ano;
            var salario = salarioMinimo[i].salario;
          
            console.log("\nAno: ".padEnd(31,".")+ ano);
            console.log("Salário mínimo: ".padEnd(30,".")+"R$"+salario.toString().replace(",","."));
        };

    break;

    case 2:
        console.log("Você escolheu a opção 2");

        for (var j = 0; j < tableInflacao.length; j++) {
            var anos = tableInflacao[j].ano;
            var inflacao = tableInflacao[j].inflacao;

            console.log("\nAno: ".padEnd(30,".")+ anos);
            console.log("Inflação: ".padEnd(29,".")+ inflacao.toString().replace(".",",")+"%");
            
        }
    break;

    case 3: 
    console.log("Você escolheu a opção 3");

    for (var i = 0; i < tableInflacao.length; i++) {
        
        var crescimento = "-";
        if(i != 0) {
            var dif = salarioMinimo[i].salario - salarioMinimo[i - 1].salario; 

            crescimento = (dif / salarioMinimo[i - 1].salario ) * 100;
        }

        console.log("\nAno: "+ tableInflacao[i].ano);
        console.log("Salário mínimo: "+ salarioMinimo[i].salario);
        console.log("Crescimento Salarial: "+ parseIn(crescimento).toFixed(2)+ "%");
        console.log("Inflação IPCA: "+ tableInflacao[i].inflacao);
        
    }

    break;
}