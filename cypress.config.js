const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://rahulshettyacademy.com/locatorspractice/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
