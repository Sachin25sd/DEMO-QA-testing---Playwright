import { test, expect } from "@playwright/test";
const BookStorePage = require("../DemoQA - pages/bookStorePage");
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");

test("BookStore: Add Book to Collection", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 30000 });
    } catch (error) {
      //Timeout error to be included in Report
      if (error) console.log("Attention!! Page load time exceeded 30 seconds!");
    }
  });

  // Step 2: Login
  await test.step("Login", async () => {
    await loginPage.fillUsername(TestData.validUsername1);
    await loginPage.fillPassword(TestData.validPassword1);
    await loginPage.clickLoginButton();
    const locator = page.locator("#userName-value");
    await expect(locator).toHaveText(TestData.validUsername1);
  });

  //Step 3: Load Book Store
  await test.step("Load BookStore page", async () => {
    await bookStorePage.navigateToBookStore();
  });

  //Step 4: Search, Select and Add Book to Collection
  await test.step("Search book and add to Collection", async () => {
    await bookStorePage.searchKeyword(TestData.validTitle);
    await bookStorePage.clickOnFirstLink();
    await bookStorePage.addToCollection();
    //Assertoon: Handle Alert message that confirms book has been added to Collection
    const dialog = await page.waitForEvent("dialog");
    const message = dialog.message();
    console.log("Book Added Confirmation:", message);
    await dialog.accept();
  });
});
