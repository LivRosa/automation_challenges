///<reference types ="Cypress"/>

describe('Test Case 3: Login User with incorrect email and password', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/')
    })

    it('Log in with invalid email and password',  () => {
        cy.get('#header').should('be.visible')

        cy.get('a').contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste.teste@teste.com')
        cy.get('[data-qa="login-password"]').type('hello_word')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!').should('be.visible')

    })
})