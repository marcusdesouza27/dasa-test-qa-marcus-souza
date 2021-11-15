/* eslint-disable no-unused-vars */
/// <reference types="cypress" />

const faker = require('faker');
const cucumber = require('cypress-cucumber-preprocessor').default;

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  // Json files path
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
