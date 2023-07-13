class LoginPage {
  constructor(page) {
    this.page = page;
  }
  // Navigates to the specified URL
  async navigateTo() {
    await this.page.goto("https://demoqa.com/login");
  }

  // Fills the username input field with the specified username
  async fillUsername(username) {
    await this.page.getByPlaceholder("UserName").fill(username);
  }

  // Fills the password input field with the specified password
  async fillPassword(password) {
    await this.page.getByPlaceholder("Password").fill(password);
  }

  // Clicks on the login button
  async clickLoginButton() {
    await this.page.click("#login");
  }

  // Clicks on the logout button
  async clickLogoutButton() {
    await this.page.click("#submit");
  }

  // Returns the error message text
  async getErrorMessage() {
    return await this.page.innerText("#name");
  }
}

module.exports = LoginPage;
