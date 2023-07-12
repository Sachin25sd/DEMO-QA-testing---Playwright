class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProfile() {
    await this.page.getByText("Profile", { exact: true }).click();
  }

  async confirmBook() {}

  async deleteBook() {}
}
module.exports = ProfilePage;
