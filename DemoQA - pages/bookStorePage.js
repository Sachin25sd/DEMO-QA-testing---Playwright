class BookStorePage {
  constructor(page) {
    this.page = page;
  }

  // Clicks on the "Book Store" link to navigate to the Book Store page
  async navigateToBookStore() {
    await this.page.getByText("Book Store", { exact: true }).click();
  }

  // Fills the search input field with the specified keyword
  async searchKeyword(keyword) {
    await this.page.fill("#searchBox", keyword);
  }

  // Clears the text in the search input field
  async deleteKeyword() {
    await this.page.getByPlaceholder("Type to search").click();
    await this.page.getByPlaceholder("Type to search").press("Control+a");
    await this.page.getByPlaceholder("Type to search").fill("");
  }

  // Clicks on the first link in the book list
  async clickOnFirstLink() {
    await this.page
      .locator(
        "#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2) > div"
      )
      .click();
  }

  // Clicks on the "Add To Your Collection" button
  async addToCollection() {
    await this.page
      .getByRole("button", { name: "Add To Your Collection" })
      .click();
  }
}

module.exports = BookStorePage;
