const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o primeiro número: ", (num1) => {
    readline.question("Digite o segundo número: ", (num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        
        console.log(`Soma: ${n1 + n2}`);
        console.log(`Subtração: ${n1 - n2}`);
        console.log(`Multiplicação: ${n1 * n2}`);
        console.log(`Divisão: ${n1 / n2}`);
        
        readline.close();
    });
});
