function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    let resultado = 0;

    switch (origem) {
        case 'C':
            if (destino === 'F') resultado = (valor * 9/5) + 32;
            else if (destino === 'K') resultado = valor + 273.15;
            else resultado = valor;
            break;
        case 'F':
            if (destino === 'C') resultado = (valor - 32) * 5/9;
            else if (destino === 'K') resultado = ((valor - 32) * 5/9) + 273.15;
            else resultado = valor;
            break;
        case 'K':
            if (destino === 'C') resultado = valor - 273.15;
            else if (destino === 'F') resultado = ((valor - 273.15) * 9/5) + 32;
            else resultado = valor;
            break;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)} ${destino}`;
}
