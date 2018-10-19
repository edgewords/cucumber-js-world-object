'use strict';

const {BeforeAll, After, Status} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');

BeforeAll(function(){
    // Disable the Cucumber Steps timeout (default is only 5s)
    setDefaultTimeout(-1);
})

After(async function(testCase) {
    const world = this;
    //If the Scenario Fails, Take a Screenshot and attach to Results
    if (testCase.result.status === Status.FAILED) {
        var screenShot = await this.driver.takeScreenshot();
        world.attach(screenShot, 'image/png');
        }
    return await this.driver.quit();
});

