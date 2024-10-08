const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite um texto: ", (texto) => {
    console.log(`<h1>${texto}</h1>`);
    readline.close();
});
