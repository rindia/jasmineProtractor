import { Config, browser } from "protractor";

// var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

// var prettyReporter = new PrettyReporter({
//     // required, there is no default
//    // path: './reports/',
//    path: './reports',
//     screenshotOnPassed: true
// });

export let config: Config = {
  directConnect: true,
  framework: "jasmine2",
  capabilities: {
    browserName: "chrome"
  },
  baseUrl:
    "http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
  specs: ["./Specs/*.js"],

  seleniumAddress: "http://localhost:4444/wd/hub",
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000 // Default time to wait in ms before a test fails.
  },

  onPrepare: async () => {
    browser
      .manage()
      .window()
      .maximize();
    var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
    await jasmine.getEnv().addReporter(
      await new Jasmine2HtmlReporter({
        savePath: "./reports/",
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true
      })
    );
  },
  noGlobals: true
};
