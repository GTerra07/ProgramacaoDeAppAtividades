const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o valor do depósito: ", (deposito) => {
    readline.question("Digite a taxa de juros (%): ", (taxaJuros) => {
        readline.question("Digite o tempo (em anos): ", (tempo) => {
            const depositoValor = parseFloat(deposito);
            const taxa = parseFloat(taxaJuros) / 100;
            const anos = parseFloat(tempo);
            
            const rendimento = depositoValor * taxa * anos;
            const valorTotal = depositoValor + rendimento;
            
            console.log(`Rendimento: R$ ${rendimento.toFixed(2)}`);
            console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
            
            readline.close();
        });
    });
});
