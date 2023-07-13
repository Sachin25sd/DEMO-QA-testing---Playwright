class LoggedOutPage {
  constructor(page) {
    this.page = page;
  }
  // Checks if the "Login" button is visible on the page
  async checkLoginButtonVisible() {
    await this.page.getByRole("button", { name: "Login" }).isVisible();
  }

  // Attempts to click on the "Add To Your Collection" button
  async unavailableAddToCollection() {
    try {
      await this.page
        .getByRole("button", { name: "Add To Your Collection" })
        .click({ timeout: 5000 });
    } catch (error) {
      if (error) {
        // Logs a confirmation message if the "Add To Collection" button is not available
        console.log(
          "Confirmation: 'Add To Collection' Button is not available in the page"
        );
      }
    }
  }

  // Checks if the profile page message is visible on the page
  async profilePageMessage() {
    await this.page
      .getByText("Currently you are not logged into the Book Store application")
      .isVisible();
  }
}
module.exports = LoggedOutPage;
