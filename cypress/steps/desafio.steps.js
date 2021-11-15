const {
  Given, When, Then
} = require('cypress-cucumber-preprocessor/steps');

const { DesafioTodo } = require('../pages/todo.page');
const todo = new DesafioTodo();

Given('eu acesso a página inicial da apicação', () => {
  todo.load_home();
});

When('eu insiro uma nova tarefa', () => {
  todo.incluir_tarefa();
});

When('confirmo a ação', () => {
  todo.confirma_tarefa();
});

When('eu marco a tarefa como concluída', () => {
  todo.concluir_tarefa();
});

When('eu confirmo uma tarefa como concluída', () => {
  todo.incluir_tarefa();
  todo.confirma_tarefa();
  todo.concluir_tarefa();
});

When('eu pesquiso uma tarefa na lista de tarefas concluídas', () => {
  todo.load_done();
  todo.pesquisar_tarefa();
});

When('eu insiro múltiplas tarefas', () => {
  todo.incluir_multi_tarefas();
});

When('eu excluo uma tarefa da lista', () => {
  todo.excluir_sec_task();
});

When('eu pesquiso uma tarefa inexistente', () => {
  todo.load_done();
  todo.pesquisar_tarefas('Inexistente');
});

When('eu excluo uma tarefa da lista de tarefas concluídas', () => {
  todo.load_done();
  todo.excluir_tarefa_concluída();
});

Then('vejo a nova tarefa criada', () => {
  todo.confirma_tarefa_criada();
});

Then('vejo a tarefa ser removida da lista', () => {
  todo.confirma_tarefa_concluida();
});

Then('eu visualizo a tarefa concluída no resultado da pesquisa', () => {
  todo.confirma_tarefa_criada();
});

Then('vejo a lista atualizada após a remoção da tarefa', () => {
  todo.validar_tarefa_excluida();
});

Then('eu visualizo a tela sem a tarefa indicada', () => {
  todo.validar_filtro_inexistente('inexistente');
});

Then('vejo a lista atualizada após a remoção da tarefa concluída', () => {
  todo.validar_exclusao_task_concluida();
});
