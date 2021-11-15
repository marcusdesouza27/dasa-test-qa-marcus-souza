/* eslint-disable no-unused-vars */
import './commands';
require('cypress-plugin-tab');

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: (xhr) => {
    // handle custom logic for whitelisting
    return true;
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
});

Cypress.SelectorPlayground.defaults({
  selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'tag', 'nth-child']
});
