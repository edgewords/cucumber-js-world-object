'use strict';
var {Given,When,Then} = require('cucumber');
const { expect } = require('chai')
const {By,Key,until} = require('selenium-webdriver');

     Given('I am on the Google Website', async function () {
       return await this.driver.get('https://www.google.co.uk');
     });

     When('I search for {string}', async function (searchString) {
       await this.driver.findElement(By.name("q")).click();
       await this.driver.findElement(By.name("q")).sendKeys(searchString + Key.RETURN);
     });

     Then('{string} appears in list', async function (searchString) {
      var bodyText = await this.driver.findElement(By.tagName('Body')).getText();
      expect(bodyText).to.include(searchString);
     });