var pontosTopo = document.getElementById("pontos-topo");
var pontosDisponiveis = document.getElementById("pontos-disponiveis");
var mensagemCupom = document.getElementById("mensagem-cupom");
var listaResgatados = document.getElementById("lista-resgatados");
var botaoCupom1 = document.getElementById("botao-cupom-1");
var botaoCupom2 = document.getElementById("botao-cupom-2");
var botaoCupom3 = document.getElementById("botao-cupom-3");
var botaoCupom4 = document.getElementById("botao-cupom-4");
var botaoCupom5 = document.getElementById("botao-cupom-5");
var botaoCupom6 = document.getElementById("botao-cupom-6");

var pontos = 640;

function trocarCupom(custo, nome, loja, codigo) {
    if (pontos >= custo) {
        pontos = pontos - custo;
        pontosTopo.innerHTML = pontos + " pts";
        pontosDisponiveis.innerHTML = pontos;

        mensagemCupom.innerHTML = "Cupom resgatado: " + nome + ". Código " + codigo + ".";
        mensagemCupom.style.display = "block";

        var novoCupom = "<div class='container-cupons__resgatado'>" +
            "<div>" +
            "<p class='container-cupons__resgatado-nome'>" + nome + "</p>" +
            "<p class='container-cupons__resgatado-loja'>" + loja + " · mostre o código no caixa</p>" +
            "</div>" +
            "<p class='container-cupons__codigo'>" + codigo + "</p>" +
            "</div>";

        listaResgatados.innerHTML = novoCupom + listaResgatados.innerHTML;
    } else {
        alert("Você não tem pontos suficientes para esse cupom.");
    }
}

botaoCupom1.addEventListener("click", function () {
    trocarCupom(150, "Um café coado grátis", "Café do Trianon", "FV-7KQ2M");
});

botaoCupom2.addEventListener("click", function () {
    trocarCupom(300, "10% no café da manhã", "Padaria Bela Vista", "FV-3PM8X");
});

botaoCupom3.addEventListener("click", function () {
    trocarCupom(400, "5% de desconto nas compras", "Mercado Verde", "FV-9TD4R");
});

botaoCupom4.addEventListener("click", function () {
    trocarCupom(500, "R$ 15 de desconto", "Livraria da Esquina", "FV-2HB6N");
});

botaoCupom5.addEventListener("click", function () {
    trocarCupom(600, "Revisão de freios grátis", "Pedal Paulista Bikes", "FV-5WC1Z");
});

botaoCupom6.addEventListener("click", function () {
    trocarCupom(800, "R$ 10 de crédito", "Recarga de transporte", "FV-8LJ7Y");
});
