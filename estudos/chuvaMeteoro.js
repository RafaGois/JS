var data = new Date();
var mes = data.getMonth();

console.log(mes);

if(mes >= 0 && mes < 3) {
    console.log("Primeiro trimestre");
} else if(mes >=3 && mes < 6) {
    console.log("Segundo trimestre");
} else if(mes >= 6 && mes < 9) {
    console.log("Terceiro trimestre");
} else if(mes >= 9 && mes < 12) {
    console.log("Quarto trimestre");
} else {
    console.log("Valor não encontrado");
}