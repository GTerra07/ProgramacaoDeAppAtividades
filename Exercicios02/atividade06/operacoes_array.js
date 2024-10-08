const nomes = ["Ana", "João", "Maria"];

// a. Adicionar três novos nomes ao final do array
nomes.push("Pedro", "Lucas", "Mariana");
console.log("Após adicionar três nomes:", nomes);

// b. Remover o primeiro nome do array
nomes.shift();
console.log("Após remover o primeiro nome:", nomes);

// c. Adicionar um nome no início do array
nomes.unshift("Fernanda");
console.log("Após adicionar um nome no início:", nomes);

// d. Localizar o índice de um nome específico
const indice = nomes.indexOf("Lucas");
console.log("Índice de Lucas:", indice);

// e. Unir todos os nomes em uma string separada por vírgula
const nomesString = nomes.join(", ");
console.log("Nomes unidos por vírgula:", nomesString);
