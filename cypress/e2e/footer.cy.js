///<reference types ="Cypress"/>

import '../support/commands/footerCommands.js';

describe('Footer', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 1: Verify subscription in home page', () => {
        cy.verifySubscriptionHome()
    })

    it('Test Case 2: Verify subscription in Cart page', () => {
        cy.verifySubscriptionCart()
    })
})