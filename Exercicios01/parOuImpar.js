const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite um número: ", (numero) => {
    const num = parseInt(numero);
    if (num % 2 === 0) {
        console.log(`${num} é par.`);
    } else {
        console.log(`${num} é ímpar.`);
    }
    readline.close();
});
