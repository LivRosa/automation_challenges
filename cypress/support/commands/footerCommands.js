import authMessages from "../../fixtures/authMessages.json";
import home from "../../fixtures/home.json"
import footerElements from "../page_elements/footerElements.js";
import homeElements from "../page_elements/homeElements.js";

Cypress.Commands.add('subscribeNewsletter', () => {
    cy.get(footerElements.subscriptionH2).scrollIntoView  
    cy.get(footerElements.inputSubscription).type(home.user1.email)
    .should('have.value', home.user1.email)
    cy.get(footerElements.btnSubscribe).click()
})

Cypress.Commands.add('verifySubscriptionHome', () => {
    cy.subscribeNewsletter()
    cy.contains(authMessages.subscribed_successfully).should('be.visible')

})

Cypress.Commands.add('verifySubscriptionCart', () => {
    cy.get(homeElements.cartLink).click()
    cy.subscribeNewsletter()
    cy.contains(authMessages.subscribed_successfully).should('be.visible')
})