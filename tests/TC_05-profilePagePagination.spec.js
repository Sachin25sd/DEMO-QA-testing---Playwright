import { test, expect } from "@playwright/test";
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");
const ProfilePage = require("../DemoQA - pages/profilePage");
const PaginationPage = require("../DemoQA - pages/paginationPage");

test("Profile Page: Confirm and Delete Books", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  const paginationPage = new PaginationPage(page);

  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 10000 });
    } catch (error) {
      if (error) console.log("Attention!! Page load time exceeded 25 seconds!");
    }
  });
  //Step 2: Login
  await test.step("Login", async () => {
    await loginPage.fillUsername(TestData.collectionFullUser);
    await loginPage.fillPassword(TestData.collectionFullPassword);
    await loginPage.clickLoginButton();
    const locator = page.locator("#userName-value");
    await expect(locator).toHaveText(TestData.collectionFullUser);
  });

  //Step 3: Check Previous and Next buttons are functioning
  await test.step("Check Next button is enabled and Previous button is disabled", async () => {
    await profilePage.navigateToProfile();
    //Assertion: confirms previous button is disabled, returns false if true
    await paginationPage.previousButtonDisabled();
    await paginationPage.clickNextButton();
    //Assertion: confirms Previous button should now be visible
    await paginationPage.previousButtonVisible();
    await paginationPage.clickPreviousButton();
    //Assertion: confirms Next button is visible
    await paginationPage.nextButtonVisible();
  });

  //Step 4:
  await test.step("D", async () => {});
});
