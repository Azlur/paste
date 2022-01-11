/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const secrets = require('../../secrets.applitools.json');
const getBranchName = require('../../tools/utils/getBranchName');

if (!process.env.APPLITOOLS_API_KEY) {
  process.env.APPLITOOLS_API_KEY = !!secrets ? secrets.apiKey : '';
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if (process.env.GITHUB_BRANCH_NAME != null) {
    // this is when we are in a CI environment
    config.env.GITHUB_BRANCH_NAME = process.env.GITHUB_BRANCH_NAME;

    return config;
  }

  return getBranchName((name) => {
    if (name != null && typeof name === 'string') {
      config.env.GITHUB_BRANCH_NAME = name;
    }
    return config;
  });
};

require('@applitools/eyes-cypress')(module);
