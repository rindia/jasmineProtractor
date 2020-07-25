exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
     maxInstances: 2,
    },

jasmineNodeOpts: {
    defaultTimeoutInterval: 25 * 60 * 1000,
    includeStackTrace: true
},
allScriptsTimeout: 30 * 60 * 1000,
SELENIUM_PROMISE_MANAGER: false,
beforeLaunch: function () {
    require('ts-node').register({
        project: 'tsconfig.json'
    });
},
    
    specs: ['./dist/*.js'],
      jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    onPrepare: async () => {     

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
    
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
      },
  };