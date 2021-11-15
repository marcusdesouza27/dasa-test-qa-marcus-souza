const faker = require('faker');

Cypress.Commands.add('cria_tarefa', () => {
  var randomTask = faker.random.word(1);
  var tarefa = `Tarefa ${randomTask}`;
  cy.writeFile('cypress/temp/nome_task.json', { randomTask: tarefa }).then(() => {
    return tarefa;
  });
});

Cypress.Commands.add('deleteTempFiles', () => {
  cy.exec('rm cypress/temp/*', { failOnNonZeroExit: false });
});
