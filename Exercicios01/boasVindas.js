const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite seu nome: ", (nome) => {
    readline.question("Digite seu sobrenome: ", (sobrenome) => {
        console.log(`Bem-vindo, ${nome} ${sobrenome}!`);
        readline.close();
    });
});
