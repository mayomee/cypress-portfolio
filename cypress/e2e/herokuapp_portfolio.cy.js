import LoginPage from '../pages/herokuapp/LoginPage'; // Tambahkan di baris paling atas
describe('Portfolio QA Automation - The Iternet HerokuApp', () => {
  // Perintah ini agar Cypress mengabaikan error dari website aslinya
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    // Pergi ke website utama sebelum setiap tes dimulai
    LoginPage.visit();
    cy.fixture('users').as('userData');
  })

  it('Skenario 1.a : Login Success menggunakan Data JSON', function() {
      LoginPage.clickLoginForm();
      LoginPage.submitLogin(this.userData.validUser.username, this.userData.validUser.password);
      
      // Assertion (Pengecekan)
      LoginPage.messageAlert.should('be.visible')
          .and('contain', 'You logged into a secure area!');
  });

  it('Skenario 1.b : Login Error menggunakan Data JSON', function() {
      LoginPage.clickLoginForm();
      LoginPage.submitLogin(this.userData.invalidUser.username, this.userData.invalidUser.password);
      
      // Assertion (Pengecekan)
      LoginPage.messageAlert.should('be.visible')
          .and('contain', 'Your username is invalid!');
  });

  it('Skenario 2 : Dynamic Loading', () => {
    cy.contains('Dynamic Loading').click()
    cy.contains('Example 1').click()
    cy.get('#start button').click()

    // Menunggu loading bar hilang dan teks muncul (timeout 10 detik)
    cy.get('#finish', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Hello World!')
  }) 

  it('Skenario 3: Checkboxes (Interaksi Elemen UI)', () => {
    cy.contains('Checkboxes').click()
    
    // Centang checkbox pertama, pastikan checkbox kedua sudah tercentang
    cy.get('input[type="checkbox"]').first().check().should('be.checked')
    cy.get('input[type="checkbox"]').last().should('be.checked')
  })

  it('Skenario 4 : Upload File', () => {
    cy.contains('File Upload').click()
    const fileName = 'contoh_file.jpg'
    cy.get('#file-upload').selectFile(`cypress/fixtures/${fileName}`)
    cy.get('#file-submit').click()
    cy.get('h3').should('have.text', 'File Uploaded!')
    cy.get('#uploaded-files').should('contain', fileName)
  })
})