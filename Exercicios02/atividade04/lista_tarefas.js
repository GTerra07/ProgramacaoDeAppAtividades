const tarefas = [];

function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa) {
        tarefas.push(tarefa);
        atualizarLista();
        document.getElementById('tarefa').value = '';
    }
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarLista();
}

function atualizarLista() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerTarefa(index);
        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    });
}
