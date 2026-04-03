const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://playground.bondaracademy.com/pages/iot-dashboard",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: { // It will executed the failure test how many times you want
      openMode: 0,
      runMode: 0
    },
  },
  defaultCommandTimeout: 6000,
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
});
