class PaginationPage {
  constructor(page) {
    this.page = page;
  }
  async clickNextButton() {
    // Clicks on the "Next" button
    await this.page.getByRole("button", { name: "Next" }).click();
  }

  async nextButtonVisible() {
    // Checks if the "Next" button is visible on the page
    await this.page.getByRole("button", { name: "Next" }).isVisible();
  }

  async nextButtonDisabled() {
    // Checks if the "Next" button is disabled on the page
    await this.page.getByRole("button", { name: "Next" }).isDisabled();
  }

  async clickPreviousButton() {
    // Clicks on the "Previous" button
    await this.page.getByRole("button", { name: "Previous" }).click();
  }

  async previousButtonVisible() {
    // Checks if the "Previous" button is visible on the page
    await this.page.getByRole("button", { name: "Previous" }).isVisible();
  }

  async previousButtonDisabled() {
    // Checks if the "Previous" button is disabled on the page
    await this.page.getByRole("button", { name: "Previous" }).isDisabled();
  }

  async updatePaginationPageNumber() {
    // Updates the pagination page number by filling the input and pressing Enter
    await this.page.getByRole("spinbutton", { name: "jump to page" }).fill("2");
    await this.page
      .getByRole("spinbutton", { name: "jump to page" })
      .press("Enter");

    await this.page.getByRole("spinbutton", { name: "jump to page" }).fill("1");
    await this.page
      .getByRole("spinbutton", { name: "jump to page" })
      .press("Enter");
  }

  async changeRow() {
    // Changes the number of rows displayed per page by selecting options from the dropdown
    await this.page
      .getByRole("combobox", { name: "rows per page" })
      .selectOption("10");
    await this.page
      .getByRole("combobox", { name: "rows per page" })
      .selectOption("20");

    await this.page
      .getByRole("combobox", { name: "rows per page" })
      .selectOption("50");
    await this.page
      .getByRole("combobox", { name: "rows per page" })
      .selectOption("100");
  }
}

module.exports = PaginationPage;
