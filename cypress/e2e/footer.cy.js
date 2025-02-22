///<reference types ="Cypress"/>

describe('Footer', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 9: Verify subscription in home page', () => {
        cy.subscribeNewsletter()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })

    it('Test Case 10: Verify subscription in Cart page', () => {
        cy.contains('Cart').click()
        cy.subscribeNewsletter()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })
})