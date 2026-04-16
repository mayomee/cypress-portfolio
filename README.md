Cypress Automation Testing Portfolio
Repositori ini berisi kumpulan skenario pengujian otomatis menggunakan Cypress untuk berbagai platform web. Proyek ini dibuat untuk mendemonstrasikan keahlian dalam Quality Assurance (QA), mulai dari pembuatan test case, penggunaan Page Object Model (POM), hingga validasi data.

🚀 Projects Included
Dalam repositori ini, terdapat beberapa skenario pengujian utama:

Banking Manager System (demosite_banking.cy.js)

Pengujian alur kerja manajemen bank.

Fitur utama: Login Manager, pendaftaran nasabah baru (Add Customer), pembukaan akun (Open Account), dan validasi transaksi.

HerokuApp Portfolio (herokuapp_portfolio.cy.js)

E2E Testing pada berbagai elemen input dan fungsionalitas web.

DemoQA Element Testing (demoqa_element.cy.js)

Validasi elemen UI seperti form, buttons, dan verifikasi teks.


🛠️ Tech Stack & Tools
Framework: Cypress

Language: JavaScript

Pattern: Page Object Model (POM) – terlihat pada folder pages/

Data Management: JSON Fixtures – terlihat pada folder fixtures/

Version Control: Git & GitHub


📂 Project Structure
Struktur folder diatur agar scalable dan mudah dipelihara:

Plaintext
cypress/
├── e2e/              # Kumpulan file test script (.cy.js)
├── fixtures/         # Data statis (JSON) untuk testing input
├── pages/            # Page Object Model (POM) untuk abstraksi elemen UI
├── support/          # Custom commands dan konfigurasi global
└── cypress.config.js # Konfigurasi utama Cypress
⚙️ Cara Menjalankan Project
1. Clone repositori ini:
git clone https://github.com/mayfransisca01/cypress-portfolio.git
2. Install dependencies:
npm install
3.Buka Cypress Runner:
npx cypress open
Atau jalankan via terminal (headless mode):
npx cypress run
