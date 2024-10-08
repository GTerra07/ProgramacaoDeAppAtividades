let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

function fazerPalpite() {
    const palpite = document.getElementById('palpite').value;
    const mensagem = document.getElementById('mensagem');

    if (tentativas > 0) {
        if (palpite == numeroAleatorio) {
            mensagem.innerText = "Parabéns! Você acertou o número!";
        } else if (palpite > numeroAleatorio) {
            mensagem.innerText = "Muito alto! Tente novamente.";
        } else {
            mensagem.innerText = "Muito baixo! Tente novamente.";
        }
        tentativas--;
    } else {
        mensagem.innerText = "Fim de jogo! Você perdeu.";
    }
}
