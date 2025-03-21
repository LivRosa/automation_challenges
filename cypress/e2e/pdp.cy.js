///<reference types ="Cypress"/>

import '../support/commands/pdpCommands.js';

describe('PDP', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 1: Verify all products and product detail page', () => {
       cy.verifyProductDetailsPage()
    })

    it('Test Case 2: Search Product', () => {
        cy.searchProduct()
    })
    
})