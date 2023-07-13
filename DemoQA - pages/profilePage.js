class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProfile() {
    // Navigates to the profile page by clicking on the "Profile" link
    await this.page.getByRole("list").getByText("Profile").click();
  }

  async confirmBook(keyword) {
    // Fills the search input with the specified keyword to confirm the book
    await this.page.getByPlaceholder("Type to search").fill(keyword);
  }

  async clickOnFirstLink() {
    // Clicks on the first link in the table of books
    await this.page
      .locator(
        "#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2) > div"
      )
      .click();
  }

  async deleteBook() {
    // Deletes the book by clicking on the "Delete" button and confirming with "OK"
    await this.page
      .getByRole("gridcell", { name: "Delete" })
      .locator("path")
      .click();
    await this.page.getByRole("button", { name: "OK" }).click();
  }
}
module.exports = ProfilePage;
