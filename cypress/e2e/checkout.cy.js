///<reference types ="Cypress"/>

describe('Checkout', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Case 11: Add Products in Cart', () => {

        cy.contains('Products').click()

        cy.get(':nth-child(3) > .product-image-wrapper')
        .trigger('mouseover')//simula o hover no botão
        cy.get('[data-product-id="1"]').eq(0).click()// eq -> seleciona o primeiro elemento da coleção, coloquei ele p/ garantir que selecionaria o produto certo
        cy.contains('Continue Shopping').click()

        cy.get(':nth-child(4) > .product-image-wrapper')
        .trigger('mouseover')
        cy.get('[data-product-id="2"]').eq(0).click()// add ao carrinho 
        cy.contains('View Cart').click()

        cy.get('#cart_info').find('#product-1').should('exist') // find -> buscou dentro do elemento selecionado anteriormente (#cart_info) por um elemento que tenha o ID product-1
        cy.get('#cart_info').find('#product-2').should('exist')// should -> verificou que o elemento selecionado (no caso, cart_info dentro do product-2) existe 

        cy.valideProduct('product-1')
        cy.valideProduct('product-2')

    })

    it('Test Case 12: Verify Product quantity in Cart', ()  => {
        cy.get('a[href="/product_details/1"]').click()
        cy.get('#quantity').clear().type('4')// clear -> limpou o campo p/ 4
        cy.get(':nth-child(5) > .btn').click()
        cy.contains('View Cart').click()

        cy.url().should('eq', 'https://automationexercise.com/view_cart')

        cy.get('#product-1').within(() => {// olhe somente dentro do produto 1 e verifique tal informação
            cy.get('.cart_quantity').should('contain.text', '4')
        })
                  
    })

    it('Test Case 13: Place Order -> Register while Checkout', () => {
        cy.get('[data-product-id="4"]').first().click()
        cy.get('a[href="/view_cart"] u').click()

        cy.url().should('eq', 'https://automationexercise.com/view_cart')

        cy.contains('Proceed To Checkout').click()
        cy.get('a[href="/login"] u').click()

        cy.registerUser()
        cy.get('a:contains("Logged in as") b').should('contain.text', 'Testando')

        cy.contains('Cart').click()
        cy.contains('Proceed To Checkout').click()

        cy.get('#address_delivery').within(() => {
            cy.get('.address_firstname.address_lastname').should('contain.text', 'Mr. Lívia QA')
            cy.get('.address_address1.address_address2').eq(0).should('contain.text', 'Treinando')
            cy.get('.address_address1.address_address2').eq(1).should('contain.text', 'Aparecido Chaves')
            cy.get('.address_address1.address_address2').eq(2).should('contain.text', 'R. Joaquim Padilha, Vl. Lourinda')
            cy.get('.address_city.address_state_name.address_postcode').should('contain.text', 'Maravilhas São de Janeiro')
            cy.get('.address_country_name').should('contain.text','New Zealand')
            cy.get('.address_phone').should('contain.text','(52) 132657891' )
        }) 

        cy.get('#product-4').within(() =>{
            cy.get('.cart_price p').should('contain.text', 'Rs. 1500')
            cy.get('.cart_quantity').should('contain.text', '1')
            cy.get('.cart_total p').should('contain.text', 'Rs. 1500')
        })

        cy.get('.form-control').type('All set, thank you.')
        cy.get('a[href="/payment"]').click()

        cy.get('[data-qa="name-on-card"]').type('cartão da imaginação')
        cy.get('[data-qa="card-number"]').type('123456789')
        cy.get('[data-qa="cvc"]').type('566')
        cy.get('[data-qa="expiry-month"]').type('11')
        cy.get('[data-qa="expiry-year"]').type('HAHA')
        cy.get('[data-qa="pay-button"]').click()

        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
        cy.contains('Delete Account').click()
        cy.get('[data-qa="continue-button"]').click()
    })

})