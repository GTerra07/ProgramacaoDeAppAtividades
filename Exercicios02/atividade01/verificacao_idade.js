function verificar() {
    const idade = document.getElementById('idade').value;
    const possuiCarteira = document.getElementById('carteira').checked;
    const resultado = document.getElementById('resultado');

    if (idade >= 18 && possuiCarteira) {
        resultado.innerText = "Você pode dirigir.";
    } else {
        resultado.innerText = "Você não pode dirigir.";
    }
}
