import { test, expect } from "@playwright/test";
const BookStorePage = require("../DemoQA - pages/bookStorePage");
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");

test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 10000 });
    } catch (error) {
      //Timeout error to be included in Report
      if (error) console.log("Page load time exceeded 30 seconds!");
    }
  });

  // Step 2: Login
  await test.step("Valid Test", async () => {
    await loginPage.fillUsername(TestData.validUsername1);
    await loginPage.fillPassword(TestData.validPassword1);
    await loginPage.clickLoginButton();
    //Assertion: Confirm successful login by checking for the logged in username
    const locator = page.locator("#userName-value");
    await expect(locator).toHaveText(TestData.validUsername1);
  });

  //Step 3: Load Book Store
  await test.step("Load BookStore page", async () => {
    await bookStorePage.navigateToBookStore();
  });

  //Step 4: Search, Select and Add Book to Collection
  await test.step("Search book and add to Collection", async () => {
    await bookStorePage.searchKeyword(TestData.validAuthor);
    await bookStorePage.clickOnFirstLink();
    //Alert message to be logged to the report
    await bookStorePage.addToCollection();
    const dialog = await this.page.waitForEvent("dialog"); // Wait for the alert dialog
    const message = dialog.message(); // Get the message from the alert
    console.log(message); // Log the message to the default Playwright report
    await dialog.accept();
  });
});
