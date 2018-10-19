'use strict';
var seleniumWebdriver = require('selenium-webdriver');
var {setWorldConstructor} = require('cucumber');

function CustomWorld({attach}){
    this.attach = attach;

    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

    this.driver.manage()
    .setTimeouts( { implicit: 20000, 
        pageLoad: 60000, 
        script: 20000 } ); 
}

setWorldConstructor(CustomWorld);