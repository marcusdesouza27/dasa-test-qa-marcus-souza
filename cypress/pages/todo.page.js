const input_task = '[type="text"]';
const icon_submit = '[type="submit"] > .material-icons';
const checkbox_concluida = 'input[type="checkbox"';
const lista_tarefas = '#app > section > ul';
const btn_done = 'a[href="/done"]';
const input_search = 'input[type="search"]';
const btn_delete = '[type="button"] > .material-icons';

export class DesafioTodo {
  load_home() {
    cy.visit('/');
  }

  incluir_tarefa() {
    cy.cria_tarefa().then((task) => {
      const word = task;
      cy.get(input_task).type(word);
    });
  }

  incluir_multi_tarefas() {
    cy.get(input_task).type('Tarefa 01; Tarefa 02; Tarefa 03');
  }

  pesquisar_tarefa() {
    cy.readFile('cypress/temp/nome_task.json').then((task) => {
      cy.get(input_search).type(task.randomTask);
    });
  }

  pesquisar_tarefas(task) {
    cy.get(input_search).type(task);
  }

  confirma_tarefa() {
    cy.get(icon_submit).click();
  }

  concluir_tarefa() {
    cy.get(checkbox_concluida).click();
  }

  confirma_tarefa_criada() {
    cy.readFile('cypress/temp/nome_task.json').then((task) => {
      cy.get(lista_tarefas)
        .find('li')
        .first()
        .should('contain.text', task.randomTask);
    });
  }

  confirma_tarefa_concluida() {
    cy.readFile('cypress/temp/nome_task.json').then((task) => {
      cy.contains(task.randomTask).should('not.exist');
    });
  }

  load_done() {
    cy.get(btn_done).click();
  }

  excluir_task() {
    cy.get(btn_delete).eq(1).click();
  }

  excluir_tarefa_concluída() {
    cy.readFile('cypress/temp/nome_task.json').then((task) => {
      cy.contains(task.randomTask)
        .should('be.visible')
        .parent()
        .find(btn_delete)
        .click();
    });
  }

  excluir_sec_task() {
    cy.contains('Tarefa 02')
      .should('be.visible')
      .parent()
      .find(btn_delete)
      .click();
  }

  validar_tarefa_excluida() {
    cy.contains('Tarefa 02').should('not.exist');
  }

  validar_filtro_inexistente(tarefa) {
    cy.contains(tarefa).should('not.exist');
  }

  validar_exclusao_task_concluida() {
    cy.readFile('cypress/temp/nome_task.json').then((task) => {
      cy.contains(task.randomTask).should('not.exist');
    });
  }
}
