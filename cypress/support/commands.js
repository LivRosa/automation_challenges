Cypress.Commands.add('fillInSignupFields', () => {
    cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('Lívia')
        cy.get('[data-qa="signup-email"]').type('qa_livia@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('enterAccountInformation', () => {
    cy.get('#id_gender1').check()
    cy.get('#name').type('Testando')
    cy.get('#password').type('teste@123')
    cy.get('select#days').select('25')
    cy.get('select#months').select('March')
    cy.get('select#years').select('2004')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
})

Cypress.Commands.add('addressInformation', () => {
    cy.get('#first_name').type('Lívia')
    cy.get('#last_name').type('QA')
    cy.get('#company').type('Treinando')
    cy.get('#address1').type('R. Antonieto Chave')
    cy.get('#address2').type('R. Joaquim Padilha, Vl. Lourinda')
    cy.get('select#country').select('New Zealand')
    cy.get('#state').type('São de Janeiro')
    cy.get('#city').type('Maravilhas')
    cy.get('#zipcode').type('01153 000')
    cy.get('#mobile_number').type('(52) 132657891')
    cy.get('[data-qa="create-account"]').click()

})

Cypress.Commands.add('deleteAccount', () => {
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Delete Account').click()

})