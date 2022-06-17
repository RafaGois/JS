var dataAtual = new Date();
var dataPostagem = new Date("2022-04-03T12:00");

dataAtual.getFullYear();

var timeAtual = dataAtual.getTime();

var timePostegem = dataPostagem.getTime();

var diferenca = timeAtual - timePostegem;

var segundos = diferenca / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
console.log(horas.toFixed(0));

const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    month: 'numeric',
    year: 'numeric',
    day: 'numeric'
};
console.log(dataAtual.toLocaleDateString('pt-BR',options));

if(timeAtual < 6 || timeAtual >= 18) {
    console.log("Boa Noite!");
} else if(timeAtual > 6 && timeAtual < 12) {
    console.log("Bom dia!");
} else {
    console.lof("Boa tarde!");
}

console.log(dataAtual.toLocaleTimeString());
var ano = dataAtual.getFullYear();
console.log(ano);

var hora = new Date();
hora.setHours(20);
hora.setMinutes(0);
hora.setSeconds(0);

console.log(hora);

const ingredientes = ['açúcar', 'farinha de trigo', 'ovo'];

for(let index in ingredientes) {

  console.log(index + ' - ' + ingredientes[index]);
}