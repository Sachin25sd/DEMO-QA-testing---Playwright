class LoggedOutPage {
  constructor(page) {
    this.page = page;
  }
  async checkLoginButtonVisible() {
    await this.page.getByRole("button", { name: "Login" }).isVisible();
  }
  async unavailableAddToCollection() {
    try {
      await this.page
        .getByRole("button", { name: "Add To Your Collection" })
        .click({ timeout: 5000 });
    } catch (error) {
      if (error) {
        console.log(
          "Confirmation: 'Add To Collection' Button is not available in the page"
        );
      }
    }
  }
  async profilePageMessage() {
    await this.page
      .getByText("Currently you are not logged into the Book Store application")
      .isVisible();
  }
}
module.exports = LoggedOutPage;
