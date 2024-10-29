Cypress.Commands.add('fillInSignupFields', () => {
    cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('Lívia')
        cy.get('[data-qa="signup-email"]').type('livia.teste@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
})