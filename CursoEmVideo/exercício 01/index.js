

const carregar = () => {
    var msg = window.document.getElementById("texto");
    var img = window.document.getElementById("imagem"); 

    let data = new Date();
    let hora = data.getHours(); 

    if(hora >= 0 && hora <= 12) {
        msg.innerHTML = `<p>Bom dia! São ${hora} horas.</p>`;
        document.body.style.backgroundColor = '#008471';
        img.src = "./assets/manha.jpg";
    }else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `<p>Boa tarde! São ${hora} horas.</p>`;
        document.body.style.backgroundColor = '#FFAC00';
        img.src = "./assets/tarde.jpg";
    } else {
        msg.innerHTML = `<p>Boa noite! São ${hora} horas.</p>`;
        document.body.style.backgroundColor = '#2F4858';
        img.src = "./assets/noite.jpg";
    }
}