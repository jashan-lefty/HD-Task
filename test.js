const {Builder, By, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium');
        await driver.findElement(By.name('btnK')).click();
        await driver.wait(until.titleIs('Selenium - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
}

example();
