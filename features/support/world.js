'use strict';
var seleniumWebdriver = require('selenium-webdriver');
var { setWorldConstructor } = require('cucumber');
require('chromedriver');

function CustomWorld({ attach, parameters }) {
    this.attach = attach;
    this.parameters = parameters;

    console.log('Running Features against ' + this.parameters.browser);

    this.driver = new seleniumWebdriver.Builder()
        .forBrowser(this.parameters.browser)
        .build();

    this.driver.manage()
        .setTimeouts({
            implicit: 20000,
            pageLoad: 60000,
            script: 20000
        });
}

setWorldConstructor(CustomWorld);