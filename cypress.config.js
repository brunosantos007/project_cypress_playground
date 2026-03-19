const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://playground.bondaracademy.com/pages/iot-dashboard",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 6000,
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
});
