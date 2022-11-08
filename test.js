const {By,Key,Builder, ChromiumWebDriver} = require('selenium-webdriver');// use these class in side selenium-webdriver function
require('chromedriver');

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build(); //make builder for chrome

    await driver.get('https://www.google.com/webhp') // get the url of browser will return a promise

    // using webdriver to find the element q and send the string hello,world to that element then hit enter by Key.RETURN
    await driver.findElement(By.name("q")).sendKeys("Hello",Key.RETURN)
    setInterval(function(){
        driver.quit()
    },10000)
}



test_case();

