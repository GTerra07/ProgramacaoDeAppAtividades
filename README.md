# ProgramacaoDeAppAtividades

## Atividades Realizadas (Exercícios 01)

1. **Mensagem de Boas-Vindas:**  
   Crie um script que exiba uma mensagem de boas-vindas ao usuário usando a função `alert`. A mensagem deve incluir o nome e sobrenome do usuário, que serão obtidos por meio da função `prompt`.

2. **Operações Matemáticas:**  
   Escreva um programa que peça ao usuário dois números por meio da função `prompt`, realize as operações de soma, subtração, divisão e multiplicação, e exiba o resultado em um `alert`.

3. **Verificação de Par ou Ímpar:**  
   Peça ao usuário um número e, em seguida, mostre uma mensagem indicando se o número é par ou ímpar.

4. **Contador de Palavras:**  
   Crie um programa que peça ao usuário para digitar uma frase e exiba o número de palavras dessa frase.

5. **Manipulação de Texto:**  
   Peça ao usuário que insira uma palavra e exiba a mesma palavra em letras maiúsculas e minúsculas.  
   *Dica:* Use os métodos `.toUpperCase()` e `.toLowerCase()` para manipular o texto.

6. **Cálculo de Média Ponderada:**  
   Peça ao usuário para inserir as três notas de um aluno e seus respectivos pesos, e calcule a média ponderada dessas notas. Exiba a média em um `alert`.

7. **Exibição de Texto em HTML:**  
   Crie um script que solicite ao usuário a inserção de um texto e exiba esse texto dentro de um elemento `<h1>` em uma página HTML.

8. **Cálculo de Juros Simples:**  
   Faça um programa que receba o valor de um depósito, a taxa de juros e o tempo, e calcule o rendimento com juros simples. Exiba o valor do rendimento e o valor total após o rendimento.

9. **Conversão de Segundos:**  
   Escreva um programa que leia uma quantidade de segundos e exiba o resultado em dias, horas, minutos e segundos dentro de um elemento `<p>`.

10. **Separação de Dígitos:**  
    Escreva um aplicativo que insira um número de cinco dígitos do usuário, separe o número em seus dígitos individuais e exiba os dígitos separados por três espaços dentro de um elemento `<p>`.  
    *Exemplo:* Se o usuário digitar o número `42339`, o programa deve imprimir: `4   2   3   3   9`.

## Atividades Realizadas (Exercícios 02)

1. **Verificação de Idade e Carteira de Motorista:**  
   Crie uma página HTML com dois campos de entrada (input): um para a idade e outro para indicar se o usuário possui carteira de motorista (checkbox). Adicione um botão que, ao ser clicado, verifica se o usuário pode dirigir com base na idade e na posse da carteira.  
   Requisitos:  
   - Utilize blocos condicionais `if` para verificar se a idade é maior ou igual a 18 e se a carteira de motorista está marcada.  
   - Exiba uma mensagem no DOM indicando se o usuário pode ou não dirigir.

2. **Cálculo de IMC para Múltiplos Usuários:**  
   Expanda o exemplo de cálculo de IMC para que ele permita o cadastro de múltiplos usuários. Cada usuário deve inserir seu peso e altura, e o sistema deve calcular e armazenar o IMC em um array.  
   Requisitos:  
   - Crie uma função que calcula o IMC e retorna o valor.  
   - Utilize arrays para armazenar os dados dos usuários.  
   - Exiba a lista de usuários com seus respectivos IMCs na página.

3. **Mudança de Texto, Cor e Adição de Parágrafo:**  
   Desenvolva uma página HTML que contenha um título (`<h1>`) e três botões: "Mudar Texto", "Mudar Cor" e "Adicionar Parágrafo". Cada botão deve realizar uma ação específica ao ser clicado.  
   Requisitos:  
   - "Mudar Texto": Altere o texto do `<h1>` para um texto de sua escolha.  
   - "Mudar Cor": Altere a cor do texto do `<h1>`.  
   - "Adicionar Parágrafo": Adicione um novo parágrafo (`<p>`) abaixo do título com um texto qualquer.  
   - Utilize eventos (`onclick`) para associar as funções aos botões.

4. **Lista de Tarefas:**  
   Crie uma aplicação simples de lista de tarefas. O usuário deve poder adicionar tarefas através de um campo de entrada e visualizar a lista de tarefas adicionadas. Também deve ser possível remover tarefas da lista.  
   Requisitos:  
   - Utilize um array para armazenar as tarefas.  
   - Crie funções para adicionar e remover tarefas.  
   - Atualize o DOM para refletir as alterações na lista de tarefas.  
   - Utilize loops para exibir todas as tarefas na página.

5. **Jogo de Adivinhação de Números:**  
   Desenvolva um jogo onde o computador escolhe um número aleatório entre 1 e 100, e o usuário tem 10 tentativas para adivinhar o número. Após cada tentativa, informe se o palpite foi muito alto ou muito baixo. Ao final do jogo, exiba uma mensagem indicando se o usuário venceu ou perdeu.  
   Requisitos:  
   - Utilize a função `Math.random()` para gerar o número aleatório.  
   - Utilize estruturas condicionais para verificar o palpite.  
   - Implemente um contador de tentativas usando `for` ou `while`.  
   - Utilize `setTimeout` para exibir mensagens com pequenos atrasos entre as tentativas.

6. **Operações em Array de Nomes:**  
   Crie um script que realiza as seguintes operações em um array de nomes:  
   a. Adicione três novos nomes ao final do array.  
   b. Remova o primeiro nome do array.  
   c. Adicione um nome no início do array.  
   d. Localize o índice de um nome específico no array.  
   e. Una todos os nomes em uma string separados por vírgula e exiba no console.  
   Requisitos:  
   - Utilize métodos como `push()`, `pop()`, `shift()`, `unshift()`, `indexOf()` e `join()`.  
   - Exiba o estado do array após cada operação no console.

7. **Conversor de Temperaturas:**  
   Desenvolva uma aplicação que converte temperaturas entre Celsius, Fahrenheit e Kelvin. O usuário deve selecionar a unidade de origem e a unidade de destino, inserir o valor, e o sistema deve exibir o resultado da conversão.  
   Requisitos:  
   - Crie funções separadas para cada tipo de conversão (Celsius para Fahrenheit, Fahrenheit para Kelvin, etc.).  
   - Utilize uma estrutura `switch` para determinar qual função de conversão executar com base na seleção do usuário.  
   - Atualize o DOM para exibir o resultado da conversão.

8. **Cronômetro:**  
   Implemente um cronômetro que conta o tempo em segundos desde que o usuário inicia o cronômetro. Inclua botões para iniciar, pausar e zerar o cronômetro.  
   Requisitos:  
   - Utilize `setInterval` para atualizar o tempo a cada segundo.  
   - Armazene o identificador do intervalo em uma variável para poder pausá-lo com `clearInterval`.  
   - Atualize o DOM para exibir o tempo em formato de minutos e segundos.

9. **Formulário de Cadastro:**  
   Crie um formulário de cadastro com campos para nome, email e senha. Antes de submeter o formulário, valide se todos os campos foram preenchidos corretamente.  
   Requisitos:  
   - Utilize o evento `onsubmit` para interceptar a submissão do formulário.  
   - Implemente funções de validação para cada campo (por exemplo, verificar se o email contém "@" e se a senha tem pelo menos 6 caracteres).  
   - Exiba mensagens de erro no DOM caso algum campo esteja inválido.  
   - Utilize `preventDefault()` para impedir o envio do formulário caso haja erros.

10. **Alteração da Cor dos Parágrafos:**  
    Desenvolva uma página com múltiplos parágrafos. Crie um botão que, ao ser clicado, altera a cor de todos os parágrafos para uma cor escolhida pelo usuário.  
    Requisitos:  
    - Utilize `document.querySelectorAll` para selecionar todos os parágrafos.  
    - Crie uma função que percorre a lista de parágrafos e altera o estilo de cor.  
    - Utilize um evento (`onclick`) para associar a função ao botão.  
    - Adicione um campo de entrada (`input`) para que o usuário possa escolher a cor desejada (pode ser do tipo `color`).
