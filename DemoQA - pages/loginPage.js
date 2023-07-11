class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://demoqa.com/login");
  }

  async fillUsername(username) {
    await this.page.fill('input[placeholder="UserName"]', username);
  }

  async fillPassword(password) {
    await this.page.fill('input[placeholder="Password"]', password);
  }

  async clickLoginButton() {
    await this.page.click("#login");
  }

  async clickLogoutButton() {
    await this.page.click("#submit");
  }

  async getErrorMessage() {
    return await this.page.innerText("#name");
  }
}

module.exports = LoginPage;