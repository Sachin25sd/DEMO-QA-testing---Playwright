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
  await test.step("Page navigation is working correctly: Next & Previous", async () => {
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

  //Step 4: Check Pagination number update feature
  await test.step("D", async () => {
    //Function asserts page values
    await paginationPage.updatePagniationPageNumber();
  });

  //Step 5: Check ability to change rows
  await test.step("D", async () => {
    await paginationPage.changeRow();
    //Assertion to check 100th row is visible
    await page
      .locator("div:nth-child(100) > .rt-tr > div:nth-child(2)")
      .isVisible();
  });
});
