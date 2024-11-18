///<reference types ="Cypress"/>

describe('Test Case 2: Login User with correct email and password', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/')
    })

   it('Log in with valid email and password', () => {
        cy.get('#header').should('be.visible')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')


        cy.get('[data-qa="login-email"]').type('livia.qa@teste.com.br')
        cy.get('[data-qa="login-password"]').type('teste@456')
        cy.get('[data-qa="login-button"]').click()
    
        cy.get('a').contains('Logged in as').should('be.visible')
        cy.get('a b').should('have.value', '')

        cy.contains(' Logout').click()

        cy.get('body').should('be.visible')

        
   })

})