class BookStorePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToBookStore() {
    await this.page.getByText("Book Store", { exact: true }).click();
  }

  async searchKeyword(keyword) {
    await this.page.fill("#searchBox", keyword);
  }

  async deleteKeyword() {
    await this.page.getByPlaceholder("Type to search").click();
    await this.page.getByPlaceholder("Type to search").press("Control+a");
    await this.page.getByPlaceholder("Type to search").fill("");
  }

  async clickOnFirstLink() {
    await this.page
      .locator(
        "#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(2) > div"
      )
      .click();
  }

  async addToCollection() {
    await this.page
      .getByRole("button", { name: "Add To Your Collection" })
      .click();
  }
}

module.exports = BookStorePage;
