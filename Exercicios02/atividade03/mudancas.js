function mudarTexto() {
    document.getElementById('titulo').innerText = "Texto Alterado";
}

function mudarCor() {
    document.getElementById('titulo').style.color = "red";
}

function adicionarParagrafo() {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.innerText = "Este é um novo parágrafo.";
    document.body.appendChild(novoParagrafo);
}
