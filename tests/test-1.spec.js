import { test, expect } from "@playwright/test";
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");

test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  //Login to website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 30000 });
    } catch (error) {
      report.expectStatus({
        status: "Failed",
        message: "Page load time exceeded 30 seconds timeout",
      });
      report.endStep();
      throw error;
    }
  });

  // Invalid Login attempt
  await test.step("Invalid Test", async () => {
    await loginPage.fillUsername(TestData.invalidUsername);
    await loginPage.fillPassword(TestData.invalidPassword);
    await loginPage.clickLoginButton();
    expect(await loginPage.getErrorMessage()).toBe(
      "Invalid username or password!"
    );
  });

  // Valid login attempt
  await test.step("Valid Test", async () => {
    await loginPage.fillUsername(TestData.validUsername);
    await loginPage.fillPassword(TestData.validPassword);
    await loginPage.clickLoginButton();
    await loginPage.clickLogoutButton();
  });
});
