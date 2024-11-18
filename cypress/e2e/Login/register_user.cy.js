///<reference types ="Cypress"/>

describe('Test Case 1: Register User', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/login')
    })

    it('Register new user and delete', () => {
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
       

    it('Register new user', () => {

        cy.fixture('registerUser').then((registerUser) => {

            cy.contains('Signup / Login').click()

            cy.get('[data-qa="signup-name"]').type(registerUser.name)
            cy.get('[data-qa="signup-email"]').type('qateste@teste.com.br')
            cy.get('[data-qa="signup-button"]').click()
    
            cy.contains('Enter Account Information').should('be.visible')

            cy.get('#id_gender1').check()
            cy.get('#name').clear()
            cy.get('#name').type('Lívia QA')
            cy.get('#password').type(registerUser.password)
            cy.get('select#days').select('25')
            cy.get('select#months').select('March')
            cy.get('select#years').select('2004')
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

        })
        
    })

})






