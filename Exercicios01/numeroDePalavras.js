const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite uma frase: ", (frase) => {
    const palavras = frase.split(" ").length;
    console.log(`A frase tem ${palavras} palavras.`);
    readline.close();
});
