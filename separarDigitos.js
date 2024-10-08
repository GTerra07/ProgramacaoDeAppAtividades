const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite um número de 5 dígitos: ", (numeroCincoDigitos) => {
    if (numeroCincoDigitos.length === 5) {
        const digitosSeparados = numeroCincoDigitos.split("").join("   ");
        console.log(digitosSeparados);
    } else {
        console.log("Por favor, digite exatamente 5 dígitos.");
    }
    readline.close();
});
