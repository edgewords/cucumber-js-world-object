'use strict';
var { Given, When, Then } = require('cucumber');
const { expect, assert } = require('chai')
const { By, Key, until } = require('selenium-webdriver');

const homePage = require('./../page_objects/searchPage.js');

Given('I am on the Google Website', async function () {
  return await this.driver.get('https://www.google.co.uk');
});

When('I search for {string}', async function (searchString) {
  //await this.driver.findElement(By.name("q")).click();
  //await this.driver.findElement(By.name("q")).sendKeys(searchString + Key.RETURN);
  await homePage.searchProduct(this.driver, searchString);
});

Then('{string} appears in list', async function (searchString) {
  assert.isTrue(await this.driver.findElement(By.partialLinkText(searchString)).isDisplayed());
});