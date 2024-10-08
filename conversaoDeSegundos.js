const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a quantidade de segundos: ", (segundosTotais) => {
    const segundos = parseInt(segundosTotais);

    const dias = Math.floor(segundos / (24 * 3600));
    const horas = Math.floor((segundos % (24 * 3600)) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;

    console.log(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segs} segundos.`);
    readline.close();
});
