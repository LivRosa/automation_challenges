///<reference types ="Cypress"/>

import '../support/commands/checkoutCommands'

describe('Checkout', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 1: Add Products in Cart', () => {
        cy.addProductsCard()
        cy.valideProduct('product-1', 'Rs. 500', '1', 'Rs. 500')
        cy.valideProduct('product-2', 'Rs. 400', '1','Rs. 400')
    })

    it('Test Case 2: Verify Product quantity in Cart', ()  => {
        cy.changeProductQuantity()
        cy.valideProduct('product-1', 'Rs. 500', '4', 'Rs. 2000')
       
                  
    })

    it('Test Case 3: Place Order -> Register while Checkout', () => {
        cy.registerAndPlaceOrder('Rs. 1000', '1', 'Rs. 1000')
    })

})