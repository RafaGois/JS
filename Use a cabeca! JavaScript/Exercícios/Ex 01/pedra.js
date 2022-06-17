const bemVindo = () => {
    window.alert("Olá, eu sou a pedrinha! Vamos ser amigos?");
    //alert exibe um popup na tela do navegador.
};

const pegaNome = () => {
    let nomeUser = window.prompt("Qual seu nome?");
    window.alert("Olá "+ nomeUser + " tudo bem?");

    document.getElementById('rockImg').src = "./assets/rocha.png"
};