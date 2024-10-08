function alterarCor() {
    const cor = document.getElementById('cor').value;
    const paragrafos = document.querySelectorAll('p');

    paragrafos.forEach(paragrafo => {
        paragrafo.style.color = cor;
    });
}
