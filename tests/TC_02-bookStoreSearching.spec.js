import { test, expect } from "@playwright/test";
const LoginPage = require("../DemoQA - pages/loginPage");
const TestData = require("../DemoQA - TestData/testData");
const BookStorePage = require("../DemoQA - pages/bookStorePage");

test("BookStore: Searching for Books", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);

  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 25000 });
    } catch (error) {
      if (error) console.log("Attention!! Page load time exceeded 25 seconds!");
    }
  });

  // Step 2: Login
  await test.step("Valid Test", async () => {
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

  //Step 4:Searching using Valid Author
  await test.step("Valid Search using Author", async () => {
    await bookStorePage.searchKeyword(TestData.validAuthor);
    //Assertion: Confirm page has returned author Search result
    await page.getByRole("gridcell", { name: TestData.validAuthor }).click();
    await bookStorePage.deleteKeyword();
  });
  //Step 5: Searching using Valid Publisher
  await test.step("Valid Search using Publisher", async () => {
    await bookStorePage.searchKeyword(TestData.validPublisher);
    //Assertion: Confirm page has returned Publisher Search result
    (await page.locator(".rt-tr-group > .rt-tr > div:nth-child(4)").first()
      .innerText) == TestData.validPublisher;
    await bookStorePage.deleteKeyword();
  });
  //Step 6: Searching using Valid Title
  await test.step("Valid Search using Title", async () => {
    await bookStorePage.searchKeyword(TestData.validTitle);
    //Assertion: Confirm page has returned Title Search result
    await page.getByRole("gridcell", { name: TestData.validTitle }).click();
    await bookStorePage.deleteKeyword();
  });
  //Start of Invalid Tests for Searching
  //Step 7:Searching using Invalid Author
  await test.step("Invalid Search using Author", async () => {
    await bookStorePage.searchKeyword(TestData.invalidSearchString1);
    //Assertion: Confirm page has returned author Search result
    (await page.getByRole("gridcell").innerText) == "";
    await bookStorePage.deleteKeyword();
  });
  //Step 8: Searching using Valid Publisher
  await test.step("Invalid Search using Publisher", async () => {
    await bookStorePage.searchKeyword(TestData.invalidSearchString2);
    //Assertion: Confirm page has returned Publisher Search result
    (await page.locator(".rt-tr-group > .rt-tr > div:nth-child(4)").first()
      .innerText) == "";
    await bookStorePage.deleteKeyword();
  });
});
