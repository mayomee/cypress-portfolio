const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // TAMBAHKAN DI SINI:
    blockHosts: ["*.optimizely.com", "*.doubleclick.net", "*.google-analytics.com", "*.googlesyndication.com"]
  },
});
