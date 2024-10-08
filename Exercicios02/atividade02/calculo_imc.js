const usuarios = [];

function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso / (altura * altura)).toFixed(2);
    
    usuarios.push({ peso, altura, imc });
    atualizarListaIMCs();
}

function atualizarListaIMCs() {
    const listaImcs = document.getElementById('listaImcs');
    listaImcs.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.textContent = `Usuário ${index + 1} - Peso: ${usuario.peso}kg, Altura: ${usuario.altura}m, IMC: ${usuario.imc}`;
        listaImcs.appendChild(li);
    });
}
