class LoginPage {
  // 1. Definisikan Selector (Elemen)
  get usernameInput() { return cy.get('#username'); }
  get passwordInput() { return cy.get('#password'); }
  get loginButton() { return cy.get('button[type="submit"]'); }
  get messageAlert() { return cy.get('#flash'); }

  // 2. Definisikan Action (Fungsi)
  visit() {
    cy.visit('https://the-internet.herokuapp.com/'); // Pergi ke home
  }

  clickLoginForm() {
    cy.contains('Form Authentication').click();
  }

  /**
   * Melakukan proses login
   * @param {string} username 
   * @param {string} password 
   */
  
  submitLogin(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();