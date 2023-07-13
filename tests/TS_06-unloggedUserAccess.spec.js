import { test, expect } from "@playwright/test";
const ProfilePage = require("../DemoQA - pages/profilePage");
const BookStorePage = require("../DemoQA - pages/bookStorePage");
const LoggedOutPage = require("../DemoQA - pages/loggedOutPage");

test("Checking for unavailability of features in an unlogged session", async ({
  page,
}) => {
  const profilePage = new ProfilePage(page);
  const bookStorePage = new BookStorePage(page);
  const loggedOutPage = new LoggedOutPage(page);
  //Step 1: Navigate to DemoQA website
  await test.step("Navigate to DemoQA", async () => {
    try {
      await page.goto("https://demoqa.com/login", { timeout: 10000 });
    } catch (error) {
      //Timeout error to be included in Report
      if (error) console.log("Attention!! Page load time exceeded 30 seconds!");
    }
  });
  //Step 2: Checking Bookstore page buttons visibility while not logged in
  await test.step("Check in Bookstore page for visible Login button and disabled Add to Collection Button", async () => {
    await bookStorePage.navigateToBookStore();
    // Assertion: Confirming Login option is visible
    await loggedOutPage.checkLoginButtonVisible();

    await bookStorePage.clickOnFirstLink();
    //Assertion: Checking for unavailable Add to Collection button
    await loggedOutPage.unavailableAddToCollection();
  });

  //Step 3:
  await test.step("Check Profile Page has message for user login", async () => {
    await profilePage.navigateToProfile();
    //Assertion: Confirming Login message is available
    await loggedOutPage.profilePageMessage();
  });
});
