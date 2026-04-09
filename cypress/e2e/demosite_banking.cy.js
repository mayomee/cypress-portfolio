describe('Portfolio QA - Banking Manager System', () => {
  beforeEach(() =>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('Skenario : Manager membuat Customer baru dan verifikasi', () => {
    //Login sebagai manager
    cy.contains('Bank Manager Login').click()

    //KLIK MENU ADD CUSTOMER
    cy.contains('Add Customer').click()

    //Siapkan pendengar alert (Tetap di sini)
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Customer added successfully')
    })

    //Baru isi form (Sekarang elemennya pasti sudah ada)
    cy.get('input[placeholder="First Name"]').type('May')
    cy.get('input[placeholder="Last Name"]').type('Frans')
    cy.get('input[placeholder="Post Code"]').type('222456')
    
    cy.get('button[type="submit"]').click()

    //asih jeda sedikit (Penting!)
    //Agar AngularJS sempat memasukkan "May" ke memori sebelum kita pindah halaman
    cy.wait(1000)

    //Buka Akun (Proses Transaksi)
    cy.contains('Open Account').click()
    cy.get('#userSelect').should('be.visible').select('May Frans')
    cy.get('#currency').select('Dollar')
    cy.get('button[type="submit"]').click()

    //Verifikasi di Tabel Customers
    cy.contains('Customers').click()

    cy.get('input[placeholder="Search Customer"]').type('May')
    cy.get('.table tbody tr').first().should('contain', 'May').and('contain', 'Frans').and('contain', '222456')
  })
})