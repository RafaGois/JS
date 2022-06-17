const valida = () => {
    const date = new Date();
    const ano = date.getFullYear();

    let res = document.getElementById('res');

    let anoNasc = document.getElementById('year');

    if(anoNasc.value > ano || anoNasc.value < 0) {
        window.alert("Verifique os dados e tente novamente.");
        return;
    };

    let idade = ano - (anoNasc.value);

    let fsexo = document.getElementsByName('sexo');

    let sexo = "";
    if(fsexo[0].checked) {
        sexo = 'Masculino';
    } else {
        sexo = 'Feminino';
    }

    var img = document.createElement('img');
    img.setAttribute('id','foto');

    if(sexo == 'Masculino') {
        if(idade <= 12){
            img.setAttribute('src','./assets/HomemCrianca.jpg');
        } else if (idade > 12 && idade < 45) {
            img.setAttribute('src','./assets/HomemAdulto.jpg');
        } else {
            img.setAttribute('src','./assets/HomemIdoso.jpg');
        }
    }
    if(sexo == 'Feminino') {
        if(idade <= 12){
            img.setAttribute('src','./assets/MulherCrianca.jpg');
        } else if (idade > 12 && idade < 45) {
            img.setAttribute('src','./assets/MulherAdulta.jpg');
        } else {
            img.setAttribute('src','./assets/MulherIdosa.jpg');
        }
    };
    res.innerHTML = `Você é ${sexo} e tem ${idade} anos`;
    res.style.textAlign = 'center';
    res.appendChild(img);
    
}