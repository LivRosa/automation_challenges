///<reference types ="Cypress"/>

describe('PDP', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 6: Verify all products and product detail page', () => {
        cy.contains('Products').click()
        cy.contains('All Products').should('be.visible')

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('label').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')
    
    })

    it('Test Case 7: Search Product', () => {
        cy.contains('Products').click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.contains('All Products').should('be.visible')

        cy.get('#search_product').type('H&M')
        cy.get('#submit_search').click()
        cy.contains('Searched Products').should('be.visible')

        cy.get('.features_items').should('be.visible')
    })
    
})