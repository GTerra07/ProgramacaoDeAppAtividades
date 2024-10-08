let segundos = 0;
let intervalo;

function formatarTempo(s) {
    const minutos = Math.floor(s / 60);
    const segundos = s % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function iniciar() {
    intervalo = setInterval(() => {
        segundos++;
        document.getElementById('tempo').innerText = formatarTempo(segundos);
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
}

function zerar() {
    clearInterval(intervalo);
    segundos = 0;
    document.getElementById('tempo').innerText = "00:00";
}
