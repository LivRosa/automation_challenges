///<reference types ="Cypress"/>

describe('Test Case 1: Register User', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/')
    })

    it('Test Case 1: Register new user and delete', () => {
        cy.title().should('be.equal', 'Automation Exercise')

        cy.get('header').should('be.visible')
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')

        cy.fixture('registerUser').then((registerUser) => {

            cy.get('[data-qa="signup-name"]').type(registerUser.name)
            cy.get('[data-qa="signup-email"]').type(registerUser.email)
            cy.get('[data-qa="signup-button"]').click()
            
            cy.contains('Enter Account Information').should('be.visible')

            cy.get('#id_gender1').check()
            cy.get('#name').clear()
            cy.get('#name').type('Testando')
            cy.get('#password').type(registerUser.password)
            cy.get('select#days').select('25')
            cy.get('select#months').select('April')
            cy.get('select#years').select('1998')
            cy.get('#newsletter').check()
            cy.get('#optin').check()

            cy.get('#first_name').type('Lívia')
            cy.get('#last_name').type('QA')
            cy.get('#company').type('Treinando')
            cy.get('#address1').type(registerUser.address_1)
            cy.get('#address2').type(registerUser.address_2)
            cy.get('select#country').select('New Zealand')
            cy.get('#state').type(registerUser.state)
            cy.get('#city').type(registerUser.city)
            cy.get('#zipcode').type(registerUser.zipcode)
            cy.get('#mobile_number').type(registerUser.number)
            
            cy.get('[data-qa="create-account"]').click()
            cy.get('[data-qa="account-created"]').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
            cy.get('a').contains('Logged in as').should('be.visible')
            cy.get('a b').should('have.value', '')

            cy.contains('Delete Account').click()
            cy.get('[data-qa=account-deleted]').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
        })  
    })
       

    it('Test Case 2: Log in with valid email and password', () => {
        
        cy.get('#header').should('be.visible')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')


        cy.get('[data-qa="login-email"]').type('livia.qa@teste.com.br')
        cy.get('[data-qa="login-password"]').type('teste@456')
        cy.get('[data-qa="login-button"]').click()
    
        cy.get('a').contains('Logged in as').should('be.visible')
        cy.get('a b').should('have.value', '')

        cy.contains(' Logout').click()

        cy.get('body').should('be.visible')   
   })

   it('Test Case 3: Log in with invalid email and password',  () => {
        cy.get('#header').should('be.visible')

        cy.get('a').contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste.teste@teste.com')
        cy.get('[data-qa="login-password"]').type('hello_word')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Test Case 4: Register user with existing email', () => {
        cy.title().should('be.equal', 'Automation Exercise')

        cy.get('header').should('be.visible')
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')

        cy.fixture('registerUser').then((registerUser) => {

            cy.get('[data-qa="signup-name"]').type(registerUser.name)
            cy.get('[data-qa="signup-email"]').type('livia.qa@teste.com.br')
        })

        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
   

    it('Test Case 5: Using the contact form', () => {
        const longText = 'Não estou conseguindo finalizar a minha compra ao inserir uma peça das marcas "H&M","MADAME","BABYHUG" e "BIBA". Não estou conseguindo finalizar a minha compra ao inserir uma peça das marcas "H&M","MADAME","BABYHUG" e "BIBA".'

        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()

        cy.contains('Get In Touch').should('be.visible')

        cy.get('[data-qa="name"]').type('Rosária Aparecida')
        cy.get('[data-qa="email"]').type('rosaria.cida@teste.com')
        cy.get('[data-qa="message"]').type(longText, {delay:2})

        cy.get('input[type="file"]')
        .selectFile('cypress/upload_arquivo/sonhos.pdf')

        .should(input => {
            console.log(input) // para mostrar no console do navegador os valores do input 
            expect(input[0].files[0].name).to.equal('sonhos.pdf')// verificou pelos parametros se o nome do arquivo está correto 
        })

        cy.get('[data-qa="submit-button"]').click()
        
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
        cy.contains('Home').click()
    })

    it('Test Case 6: Verify the URL of the test case page', () => {
        cy.url().should('eq', 'https://automationexercise.com/')
        cy.contains('Test Cases').click()
        cy.url().should('eq', 'https://automationexercise.com/test_cases')
    })

    it('Test Case 7: Verify all products and product detail page', () => {
        cy.contains('Products').click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.contains('All Products').should('be.visible')

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

        cy.url().should('eq', 'https://automationexercise.com/product_details/1')

        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('label').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')
    
    })

    it('Test Case 8: Search Product', () => {
        cy.contains('Products').click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.contains('All Products').should('be.visible')

        cy.get('#search_product').type('H&M')
        cy.get('#submit_search').click()
        cy.contains('Searched Products').should('be.visible')

        cy.get('.features_items').should('be.visible')
    })

    it('Test Case 9: Verify subscription in home page', () => {
        //cy.scrollTo('bottom') -> final da página
        //cy.scrollTo('top') -> topo 
        cy.get('.single-widget > h2').scrollIntoView // scroll até o elemento em específico 
        cy.get('#susbscribe_email').type('rosaria.cida@teste.com')
        .should('have.value', 'rosaria.cida@teste.com')
        cy.get('#subscribe').click()

        cy.contains('You have been successfully subscribed!').should('be.visible')
    })

    it('Test Case 10: Verify subscription in Cart page', () => {
        cy.contains('Cart').click()
        cy.scrollTo('bottom')

        cy.get('.single-widget > h2').scrollIntoView // scroll até o elemento em específico 
        cy.get('#susbscribe_email').type('rosaria.cida@teste.com')
        .should('have.value', 'rosaria.cida@teste.com')
        cy.get('#subscribe').click()

        cy.contains('You have been successfully subscribed!').should('be.visible')
    })

    it('Test Case 11: Add Products in Cart', () => {

        cy.contains('Products').click()

        cy.get(':nth-child(3) > .product-image-wrapper')
        .trigger('mouseover')
        cy.get('[data-product-id="1"]').eq(0).click()
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

})

    



