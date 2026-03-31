const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://playground.bondaracademy.com/pages/iot-dashboard",
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
