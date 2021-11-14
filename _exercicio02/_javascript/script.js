

function validar() {

    var dataNascimento = document.querySelector("input#dataNascimento");

    var spanMasculino = document.getElementById("spanMasculino");
    var spanFeminino = document.getElementById("spanFeminino");

    var sexoMasculino = document.getElementById("sexoMasculino").checked;
    var sexoFeminino = document.getElementById("sexoFeminino").checked;
    var imagem = document.querySelector("img#imagem");
    var nascimento = Number(dataNascimento.value);
    var dataValidador = new Date();
    var anoAtual = dataValidador.getFullYear();



    //validação dos campos
    if ((nascimento <= anoAtual && nascimento >= 1900) && (sexoMasculino || sexoFeminino)) {
        if (sexoMasculino) {
            let genero = 'masculino';
            verificaIdade(nascimento, genero);
        }
        else if (sexoFeminino) {
            let genero = 'feminino'
            verificaIdade(nascimento, genero);
        }

    }
    else if ((nascimento > anoAtual || nascimento < 1900)) {

        alert("Por Favor, Preencha o ano corretamente")

    }
    else if (!sexoMasculino && !sexoFeminino) {

        spanMasculino.style.animation = "campoInvalido";
        spanMasculino.style.animationDuration = ".7s";
        spanMasculino.style.animationIterationCount = "infinite";
        spanFeminino.style.animation = "campoInvalido";
        spanFeminino.style.animationDuration = ".7s";
        spanFeminino.style.animationIterationCount = "infinite";

        alert("Por favor, selecione o sexo!")
    }



}
//verifica a idade e classifica
function verificaIdade(nascimento, sexo) {
    let relogio = new Date();
    let idade = relogio.getFullYear() - nascimento;
    let img = document.querySelector("img#imagem");
    let paragrafo = document.querySelector("p#terceiroParagrafo");

    switch (sexo) {
        case "masculino":
            if (idade <= 5)//se for BEBE
            {
                img.src = "_image/baby_male.jpg";
                paragrafo.innerHTML = `detectamos um bebê`
                mostraImage();
            }
            else if (idade <= 12)//é criança
            {
                img.src = "_image/kid_male.jpg";
                paragrafo.innerHTML = `detectamos um menino de ${idade} anos`
                mostraImage();
            }
            else if (idade < 21)//é jovem
            {
                img.src = "_image/young_male.jpg";
                paragrafo.innerHTML = `detectamos um jovem de ${idade} anos`
                mostraImage();
            }
            else if (idade < 65)// é adulto
            {
                img.src = "_image/adult_male.jpg";
                paragrafo.innerHTML = `detectamos um adulto de ${idade} anos`
                mostraImage();
            }
            else if (idade >= 65)//idoso
            {
                img.src = "_image/oldman.jpg";
                paragrafo.innerHTML = `detectamos um idoso de ${idade} anos`
                mostraImage();
            }
            break;
        case "feminino":
            if (idade <= 5)//se for BEBE
            {
                img.src = "_image/baby_female.jpg";
                paragrafo.innerHTML = `detectamos uma bebê `
                mostraImage();
            }
            else if (idade <= 12)//é criança
            {
                img.src = "_image/kid_female.jpg";
                paragrafo.innerHTML = `detectamos uma menina de ${idade} anos`
                mostraImage();
            }
            else if (idade < 21)//é jovem
            {
                img.src = "_image/young_female.jpg";
                paragrafo.innerHTML = `detectamos uma jovem de ${idade} anos`
                mostraImage();
            }
            else if (idade < 65)// é adulto
            {
                img.src = "_image/adult_female.jpg";
                paragrafo.innerHTML = `detectamos bebê de ${idade} anos`
                mostraImage();
            }
            else if (idade >= 65)//idoso
            {
                img.src = "_image/oldwoman.jpg";
                paragrafo.innerHTML = `detectamos bebê de ${idade} anos`
                mostraImage();
            }
            break;
        default:
            break;






    }





}
function mostraImage() {
    imagem.style.display = "block";
    imagem.style.opacity = "1";
    imagem.style.margin = "10px auto 0 auto";

    
}

function checaRadio() {
    let spanMasculino = document.getElementById("spanMasculino");
    let spanFeminino = document.getElementById("spanFeminino");

    spanFeminino.style.animation = "";
    spanMasculino.style.animation = "";
}
