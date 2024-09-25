const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  let options = new chrome.Options();
  options.addArguments('--headless');  // Run Chrome in headless mode (no UI)
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get('http://www.google.com');
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium', Key.RETURN);
    await driver.wait(until.titleContains('Selenium'), 1000);
  } finally {
    await driver.quit();
  }
}

runTest();
