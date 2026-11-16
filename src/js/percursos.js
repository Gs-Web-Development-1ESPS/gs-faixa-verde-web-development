var pontosTopo = document.getElementById("pontos-topo");
var listaPercursos = document.getElementById("lista-percursos");
var campoModo = document.getElementById("campo-modo");
var radioCarro = document.getElementById("radio-carro");
var radioOutros = document.getElementById("radio-outros");
var campoOrigem = document.getElementById("campo-origem");
var campoDestino = document.getElementById("campo-destino");
var campoDistancia = document.getElementById("campo-distancia");
var campoDia = document.getElementById("campo-dia");
var campoFoto = document.getElementById("campo-foto");
var textoFoto = document.getElementById("texto-foto");
var caixaFoto = document.getElementById("caixa-foto");
var botaoSalvar = document.getElementById("botao-salvar");

var pontos = 640;

var textoFotoPadrao = "Do caminho, da bike estacionada ou do ponto. JPG ou PNG.";

function pontosDoModo(modo) {
    switch (modo) {
        case "A pé":
            return 15;
        case "Bike":
            return 12;
        case "Ônibus elétrico":
            return 10;
        case "Metrô":
            return 9;
        default:
            return 6;
    }
}

function mostrarFoto() {
    if (campoFoto.value != "") {
        textoFoto.innerHTML = "Foto selecionada";
        textoFoto.style.color = "#7ecb8b";
        caixaFoto.style.borderColor = "#7ecb8b";
    } else {
        textoFoto.innerHTML = textoFotoPadrao;
        textoFoto.style.color = "#9a9d98";
        caixaFoto.style.borderColor = "#6b6e6c";
    }
}

function salvarPercurso() {
    var modo = campoModo.value;
    var origem = campoOrigem.value;
    var destino = campoDestino.value;
    var distancia = campoDistancia.value;
    var dia = campoDia.value;

    if (origem == "" || destino == "" || distancia == "" || dia == "" || campoFoto.value == "") {
        alert("Preencha todos os campos e escolha uma foto antes de salvar.");
    } else {
        var normalmente = "aplicativo";

        if (radioCarro.checked) {
            normalmente = "carro próprio";
        } else if (radioOutros.checked) {
            normalmente = "outros";
        }

        var km = parseFloat(distancia);
        var ganho = parseInt(km * pontosDoModo(modo));

        var detalhe = distancia + " km · em vez de " + normalmente;
        var novoCartao = "<li class='container-percursos__cartao'>" +
            "<div class='container-percursos__topo'>" +
            "<span class='container-percursos__etiqueta'>" + modo + "</span>" +
            "<span class='container-percursos__dia'>" + dia + "</span>" +
            "</div>" +
            "<h3 class='container-percursos__nome'>" + origem + " → " + destino + "</h3>" +
            "<p class='container-percursos__detalhe'>" + detalhe + "</p>" +
            "<p class='container-percursos__pontos'>" +
            "<span class='container-percursos__pontos-numero'>+" + ganho + "</span>" +
            "<span class='container-percursos__pontos-texto'> pontos</span>" +
            "</p>" +
            "</li>";

        listaPercursos.innerHTML = novoCartao + listaPercursos.innerHTML;

        pontos = pontos + ganho;
        pontosTopo.innerHTML = pontos + " pts";

        campoOrigem.value = "";
        campoDestino.value = "";
        campoDistancia.value = "";
        campoDia.value = "";
        campoFoto.value = "";
        mostrarFoto();

        alert("Percurso salvo! Você ganhou +" + ganho + " pts.");
    }
}

botaoSalvar.addEventListener("click", salvarPercurso);
campoFoto.addEventListener("change", mostrarFoto);
