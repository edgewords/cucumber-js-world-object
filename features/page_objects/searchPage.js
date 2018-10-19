const { By, Key, until } = require('selenium-webdriver');

module.exports = {

    // Locators
    searchField : By.name("q"),

    // Actions
    searchProduct: async function (driver, strText) {
        await driver.findElement(this.searchField).click();
        await driver.findElement(this.searchField).sendKeys(strText + Key.RETURN);
    }

};