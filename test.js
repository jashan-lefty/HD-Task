const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  let options = new chrome.Options();
  options.addArguments('--headless');  // Run Chrome in headless mode to speed up the test
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get('http://www.google.com');
    await driver.sleep(2000);  // Wait for 2 seconds to ensure the page is loaded
    let title = await driver.getTitle();
    if (title.includes('Google')) {
      console.log('Test Passed: Title contains "Google"');
    } else {
      console.log('Test Failed: Title does not contain "Google"');
    }
  } finally {
    await driver.quit();
  }
}

runTest();
