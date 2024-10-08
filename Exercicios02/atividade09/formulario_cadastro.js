function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (!nome || !email || !senha) {
        mensagemErro.innerText = "Todos os campos devem ser preenchidos!";
        return;
    }

    if (!email.includes('@')) {
        mensagemErro.innerText = "O email deve conter '@'.";
        return;
    }

    if (senha.length < 6) {
        mensagemErro.innerText = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    mensagemErro.innerText = "Cadastro realizado com sucesso!";
}
