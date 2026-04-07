describe('Portfolio QA Automation - Website DemoQA', () => {
  it('Skenario 1 : Fill Text Box Form', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').type('May Fransisca QA')
    cy.get('#userEmail').type('mayfransisca@mail.com')
    cy.get('#currentAddress').type('Kediri, Jawa Timur')
    cy.get('#permanentAddress').type('Kediri, Jawa Timur, Indonesia')
    cy.get('#submit').click()

    // Verifikasi output yang muncul setelah klik submit
    cy.get('#output').should('be.visible')
    cy.get('#name').should('contain', 'May Fransisca QA')
    cy.get('#email').should('contain', 'mayfransisca@mail.com')
    cy.get('#output #currentAddress').should('contain', 'Kediri, Jawa Timur')
    cy.get('#output #permanentAddress').should('contain', 'Kediri, Jawa Timur, Indonesia')
  })
})