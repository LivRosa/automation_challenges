///<reference types ="Cypress"/>

import '../support/commands/homeCommands.js';

describe('Home', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 1: Register new user and delete', () => {
        cy.title().should('be.equal', 'Automation Exercise')

        cy.clickSignupLogin()
        cy.registerUser()
        cy.loggedInUserNameIsCorrect()
        cy.deleteAccount()  
    })

    it('Test Case 2: Log in with valid email and password', () => {
        cy.clickSignupLogin()
        cy.loginWithValidCredentials()
        cy.loggedInUserNameIsCorrect()
        cy.logout()
   })

   it('Test Case 3: Log in with invalid email and password',  () => {
        cy.clickSignupLogin()
        cy.loginWithInvalidCredentials()
    })

    it('Test Case 4: Register user with existing email', () => {
        cy.clickSignupLogin()
        cy.registerWithExistingEmail()
    })

    it('Test Case 5: Using the contact form', () => {
        cy.useContactForm()
    })

    it('Test Case 6: Search Product', () => {
       cy.searchProduct()
    })
})