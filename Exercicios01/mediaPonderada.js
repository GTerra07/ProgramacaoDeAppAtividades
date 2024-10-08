const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a primeira nota: ", (nota1) => {
    readline.question("Digite o peso da primeira nota: ", (peso1) => {
        readline.question("Digite a segunda nota: ", (nota2) => {
            readline.question("Digite o peso da segunda nota: ", (peso2) => {
                readline.question("Digite a terceira nota: ", (nota3) => {
                    readline.question("Digite o peso da terceira nota: ", (peso3) => {
                        const n1 = parseFloat(nota1), p1 = parseFloat(peso1);
                        const n2 = parseFloat(nota2), p2 = parseFloat(peso2);
                        const n3 = parseFloat(nota3), p3 = parseFloat(peso3);
                        
                        const mediaPonderada = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
                        console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
                        
                        readline.close();
                    });
                });
            });
        });
    });
});
