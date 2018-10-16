'use strict';
var seleniumWebdriver = require('selenium-webdriver');
var {setWorldConstructor} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');

function CustomWorld({attach}){
    this.attach = attach;

    // Set the Cucumber Steps timeout (default is only 5s)
    setDefaultTimeout(30 * 1000);

    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

    this.driver.manage()
    .setTimeouts( { implicit: 20000, 
        pageLoad: 60000, 
        script: 20000 } ); 
}

setWorldConstructor(CustomWorld);