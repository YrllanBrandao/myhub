function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    hora = 22;


    msg.innerHTML = `Agora são ${hora} horas`;


    if (hora >= 0 && hora <= 12) {
        imagem.src = '_image/morning.jpg';
        document.body.style.background = "#C57566";
    }
    else if (hora >= 12 && hora <= 18) {
        imagem.src = '_image/afternoon.jpg';
        document.body.style.background = "#FEEE70";
    }
    else {
        imagem.src = "_image/night.jpg";
        document.body.style.background = "#232E41";
    }

}