import homeCommands from  "../commands/homeCommands.js";
import home from "../../fixtures/home.json";
import checkoutElements from "../page_elements/checkoutElements.js";
import homeElements from "../page_elements/homeElements.js";
import paymentCard from "../../fixtures/paymentCard.json"
import authMessages from "../../fixtures/authMessages.json"


Cypress.Commands.add('addProductsCard', () => {
    cy.get(homeElements.productLink).click()

    cy.get(checkoutElements.ContainerProduct).eq(0)
    .trigger('mouseover')
    cy.get(checkoutElements.btnAddCard).eq(0).click()
    cy.get(checkoutElements.btnContinueShopping).click()

    cy.get(checkoutElements.ContainerProduct).eq(1)
    .trigger('mouseover')
    cy.get(checkoutElements.btnAddCard).eq(2).click()
    cy.get(checkoutElements.viewCartLink).click()

    cy.get(checkoutElements.cardInfo).find('#product-1').should('exist')
    cy.get(checkoutElements.cardInfo).find('#product-2').should('exist')
})

Cypress.Commands.add('valideProduct', (productId, price, quantity, total) => {
    cy.get(`#${productId}`).within(() => {
        cy.get(checkoutElements.priceCheckout).should('contain.text', price);
        cy.get(checkoutElements.quantityCheckout).should('contain.text', quantity);
        cy.get(checkoutElements.totalCheckout).should('contain.text', total);
    });
})

Cypress.Commands.add('changeProductQuantity', () => {
    cy.get(checkoutElements.viewProdcut).eq(0).should('be.visible').click()
    cy.get(checkoutElements.quantityPdp).clear().type('4')
    cy.get(checkoutElements.btnaddCardPdp).click()
    cy.get(checkoutElements.modalAddCard).find(checkoutElements.viewCartLink).click()
})

Cypress.Commands.add('registerAndPlaceOrder', (productPrice, productQuantity, productTotal) => {
    cy.get(checkoutElements.btnAddCard).eq(4).click()
    cy.get(checkoutElements.viewCartLink).first().click()
    cy.get(checkoutElements.btnProceedToCheckout).click()
    cy.get(checkoutElements.registerLoginLink).click()

    
    cy.registerUser()
    cy.loggedInUserNameIsCorrect()

    cy.get(homeElements.cartLink).click()
    cy.get(checkoutElements.btnProceedToCheckout).click()

    cy.get(checkoutElements.containerAddress).within(() => {
        cy.get(checkoutElements.firstlastNameCheckout).should('contain.text', home.user1.name)
        cy.get(checkoutElements.addressCheckout).eq(0).should('contain.text', home.user1.company)
        cy.get(checkoutElements.addressCheckout).eq(1).should('contain.text', home.user1.address_1)
        cy.get(checkoutElements.addressCheckout).eq(2).should('contain.text', home.user1.address_2)
        cy.get(checkoutElements.countryCheckout).should('contain.text',home.user1.country)
        cy.get(checkoutElements.phoneCheckout).should('contain.text', home.user1.number)
    }) 

    cy.valideProduct('product-3', productPrice, productQuantity, productTotal)
    cy.get(checkoutElements.payment).click()

    cy.get(checkoutElements.nameCard).type(paymentCard.nameCard)
    cy.get(checkoutElements.cardNumber).type(paymentCard.cardNumber)
    cy.get(checkoutElements.inputcvc).type(paymentCard.inputcvc)
    cy.get(checkoutElements.expirationMonth).type(paymentCard.expirationMonth)
    cy.get(checkoutElements.expirationYear).type(paymentCard.expirationYear)
    cy.get(checkoutElements.btnPay).click()

    cy.contains(authMessages.order_confirmed).should('be.visible')
    cy.deleteAccount()
})