import { test, expect } from "@playwright/test";
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");

test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA Login Page", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 25000 });
    } catch (error) {
      if (error) console.log("Attention!! Page load time exceeded 25 seconds!");
    }
  });

  // Step 2: Invalid Login attempt
  await test.step("Invalid Test", async () => {
    // Fill in invalid username and password
    await loginPage.fillUsername(TestData.invalidUsername);
    await loginPage.fillPassword(TestData.invalidPassword);
    await loginPage.clickLoginButton();
    // Assertion: Check if the error message is displayed
    expect(await loginPage.getErrorMessage()).toBe(
      "Invalid username or password!"
    );
  });

  // Step 3: Valid login attempt
  await test.step("Valid Test", async () => {
    await loginPage.fillUsername(TestData.validUsername);
    await loginPage.fillPassword(TestData.validPassword);
    await loginPage.clickLoginButton();
    //Assertion: Logout option is only visible after a successful login
    await loginPage.clickLogoutButton();
  });
});
