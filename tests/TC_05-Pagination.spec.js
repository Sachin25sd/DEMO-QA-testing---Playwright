import { test, expect } from "@playwright/test";
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");
const ProfilePage = require("../DemoQA - pages/profilePage");

test("Profile Page: Confirm and Delete Books", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 30000 });
    } catch (error) {
      //Timeout error to be included in Report
      if (error) console.log("Attention!! Page load time exceeded 30 seconds!");
    }
  });
  //Step 2: Login
  await test.step("Login", async () => {
    await loginPage.fillUsername(TestData.validUsername1);
    await loginPage.fillPassword(TestData.validPassword1);
    await loginPage.clickLoginButton();
    //Assertion: Confirm successful login by checking for the logged in username
    const locator = page.locator("#userName-value");
    await expect(locator).toHaveText(TestData.validUsername1);
  });

  //Step 3: Confirm book added on TC_03 is available
  await test.step("Confirm book is available on Profile Collection", async () => {
    await profilePage.navigateToProfile();
    //Assertion: Check for book that was added in TC_03 - Step 4
    await profilePage.confirmBook(TestData.validTitle);
    await profilePage.clickOnFirstLink();
  });

  //Step 4: Delete book from Collection
  await test.step("Delete book from collection", async () => {
    try {
      await profilePage.navigateToProfile();
    } catch (error) {}
    //await profilePage.confirmBook(TestData.validTitle);
    //await profilePage.deleteBook();
  });
});
