class PaginationPage {
  constructor(page) {
    this.page = page;
  }
  async clickNextButton() {
    await this.page.getByRole("button", { name: "Next" }).click();
  }
  async nextButtonVisible() {
    await this.page.getByRole("button", { name: "Next" }).isVisible();
  }
  async nextButtonDisabled() {
    await this.page.getByRole("button", { name: "Next" }).isDisabled();
  }
  async clickPreviousButton() {
    await this.page.getByRole("spinbutton", { name: "jump to page" }).click();
  }
  async previousButtonVisible() {
    await this.page
      .getByRole("spinbutton", { name: "jump to page" })
      .isVisible();
  }
  async previousButtonDisabled() {
    await this.page
      .getByRole("spinbutton", { name: "jump to page" })
      .isDisabled();
  }
  async updatePagniationPageNumber() {
    await this.page.getByRole("spinbutton", { name: "jump to page" }).fill("1");
    await this.page
      .getByRole("spinbutton", { name: "jump to page" })
      .press("Enter");
  }
}

module.exports = PaginationPage;
