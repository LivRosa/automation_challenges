
import pdpElements from "../page_elements/pdpElements";

Cypress.Commands.add('verifyProductDetailsPage', () => {
    cy.get(pdpElements.productsLink).click()
    cy.get(pdpElements.titleProducts).should('be.visible')

    cy.get(pdpElements.btnViewProduct).click()

    cy.get(pdpElements.productName).should('be.visible')
    cy.get(pdpElements.productCategory).should('be.visible')
    cy.get(pdpElements.productPrice).should('be.visible')
    cy.get(pdpElements.productQuantity).should('be.visible')
    cy.get(pdpElements.productCondition).should('be.visible')
    cy.get(pdpElements.productStyle).should('be.visible')
})

Cypress.Commands.add('searchProduct', () => {
    cy.get(pdpElements.productsLink).click()
    cy.get(pdpElements.titleProducts).should('be.visible')

    cy.get(pdpElements.searchProduct).type('H&M')
    cy.get(pdpElements.btnSearch).click()
    cy.get(pdpElements.titleProducts).should('be.visible')

    cy.get(pdpElements.productBlock).should('be.visible')
})