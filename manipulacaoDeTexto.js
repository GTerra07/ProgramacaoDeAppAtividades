const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite uma palavra: ", (palavra) => {
    console.log(`Maiúsculas: ${palavra.toUpperCase()}`);
    console.log(`Minúsculas: ${palavra.toLowerCase()}`);
    readline.close();
});
