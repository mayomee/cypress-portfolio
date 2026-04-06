describe('Portfolio QA Automation - The Iternet HerokuApp', () => {
  // Perintah ini agar Cypress mengabaikan error dari website aslinya
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    // Pergi ke website utama sebelum setiap tes dimulai
    cy.visit('https://the-internet.herokuapp.com/')
  })

  it('Skenario 1.a : Login Form Authentication Success', () => {
    // Klik link 'Form Authentication' menggunakan teks agar lebih stabil
    cy.contains('Form Authentication').click()
    
    // Proses login
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    
    // Assertion (Pengecekan)
    cy.get('#flash').should('be.visible').and('contain', 'You logged into a secure area!')
    cy.url().should('include', '/secure')
  })

  it('Skenario 1.b : Login Form Authentication Error', () => {
    // Klik link 'Form Authentication' menggunakan teks agar lebih stabil
    cy.contains('Form Authentication').click()
    
    // Proses login
    cy.get('#username').type('may')
    cy.get('#password').type('maimai')
    cy.get('button[type="submit"]').click()
    
    // Assertion (Pengecekan)
    cy.get('#flash').should('be.visible').and('contain', 'Your username is invalid!')
  })

  it('Skenario 2 : Dynamic Loading', () => {
    cy.contains('Dynamic Loading').click()
    cy.contains('Example 1').click()
    cy.get('#start button').click()

    // Menunggu loading bar hilang dan teks muncul (timeout 10 detik)
    cy.get('#finish', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Hello World!')
  }) 

})