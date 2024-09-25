const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

async function runTest() {
  let options = new chrome.Options();
  options.addArguments('--headless');  // Run Chrome in headless mode to speed up the test
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    // Change the URL to your React app's local URL
    await driver.get('http://localhost:3000');  // Assuming the React app runs on this port
    await driver.sleep(2000);  // Wait for 2 seconds to ensure the page is loaded

    // Check if the title includes "React App"
    let title = await driver.getTitle();
    if (title.includes('React App')) {
      console.log('Test Passed: Title contains "React App"');
    } else {
      console.log('Test Failed: Title does not contain "React App"');
    }

    // Verify if the Learn React link is present
    let learnReactLink = await driver.findElement(By.linkText('Learn React'));
    if (learnReactLink) {
      console.log('Test Passed: "Learn React" link is present');
    }
  } catch (error) {
    console.error('Test Failed:', error);
  } finally {
    await driver.quit();
  }
}

runTest();