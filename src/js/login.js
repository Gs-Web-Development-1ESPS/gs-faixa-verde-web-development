var campoEmail = document.getElementById("campo-email");
var campoSenha = document.getElementById("campo-senha");
var botaoEntrar = document.getElementById("botao-entrar");

function validarLogin(evento) {
    var email = campoEmail.value;
    var senha = campoSenha.value;

    if (email == "" || senha == "") {
        evento.preventDefault();
        alert("Preencha o e-mail e a senha.");
    }
}

botaoEntrar.addEventListener("click", validarLogin);
