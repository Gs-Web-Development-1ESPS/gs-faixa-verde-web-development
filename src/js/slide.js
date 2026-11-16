var slideImagem = document.getElementById("slide-imagem");
var slideTitulo = document.getElementById("slide-titulo");
var slideTexto = document.getElementById("slide-texto");
var botaoAnterior = document.getElementById("botao-anterior");
var botaoProximo = document.getElementById("botao-proximo");

var imagensSlide = ["./src/img/slide-1.jpg", "./src/img/slide-2.jpg", "./src/img/slide-3.jpg"];
var titulosSlide = ["Avenida Paulista", "Pontos de ônibus", "Estações de metrô"];
var textosSlide = [
    "Vá a pé ou de bike pela Paulista e ganhe pontos.",
    "Troque o carro pelo ônibus e polua menos.",
    "O metrô leva você longe e ainda vira pontos."
];

var slideAtual = 0;

function mostrarSlide() {
    slideImagem.src = imagensSlide[slideAtual];
    slideTitulo.innerHTML = titulosSlide[slideAtual];
    slideTexto.innerHTML = textosSlide[slideAtual];
}

function proximoSlide() {
    slideAtual = slideAtual + 1;

    if (slideAtual == 3) {
        slideAtual = 0;
    }

    mostrarSlide();
}

function slideAnterior() {
    slideAtual = slideAtual - 1;

    if (slideAtual == -1) {
        slideAtual = 2;
    }

    mostrarSlide();
}

botaoAnterior.addEventListener("click", slideAnterior);
botaoProximo.addEventListener("click", proximoSlide);
