///<reference types ="Cypress"/>

describe('Register User', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/login')
    })

    it('Check if the header is visible successfully', () => {
        cy.get('header').should('be.visible')

    })

    it('Click on "signup/login" button', () => {
        cy.contains('Signup / Login').click()
    })

    it('Verify "New User Signup!" is visible', () => {
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!')
            .should('be.visible')
    })


    it('Enter name and email address', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('Lívia')
        cy.get('[data-qa="signup-email"]').type('qa_livia@gmail.com')
    })

    it('Click "Signup" button', () => {
        cy.get('[data-qa="signup-name"]').type('Lívia')
        cy.get('[data-qa="signup-email"]').type('qa_livia@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
    })

    it('Verify that "ENTER ACCOUNT INFORMATION" is visible', () => {
        cy.fillInSignupFields()
        cy.contains('Enter Account Information')
            .should('be.visible')
    })

    it('Fill in the fields: Title, Name, Password, Date of birth', () => {
        cy.fillInSignupFields()
        cy.get('#id_gender1').check()
        cy.get('#name').type('Testando')
        cy.get('#password').type('teste@123')
        cy.get('select#days').select('25')
        cy.get('select#months').select('March')
        cy.get('select#years').select('2004')

    })

    it('Select checkbox "Sign up for our newsletter!"', () => {
        cy.fillInSignupFields()
        cy.get('#id_gender1').check()
        cy.get('#name').type('Testando')
        cy.get('#password').type('teste@123')
        cy.get('select#days').select('25')
        cy.get('select#months').select('March')
        cy.get('select#years').select('2004')
        cy.get('#newsletter').check()

    })

    it('Select checkbox "Receive special offers from our partners!"', () => {
        cy.fillInSignupFields()
        cy.get('#id_gender1').check()
        cy.get('#name').type('Testando')
        cy.get('#password').type('teste@123')
        cy.get('select#days').select('25')
        cy.get('select#months').select('March')
        cy.get('select#years').select('2004')
        cy.get('#newsletter').check()
        cy.get('#optin').check()

    })

    it('Fill in the fields: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number and click "Create Account button"', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.get('#first_name').type('Lívia')
        cy.get('#last_name').type('QA')
        cy.get('#company').type('Treinando')
        cy.get('#address1').type('R. Antonieto Chave')
        cy.get('#address2').type('R. Joaquim Padilha, Vl. Lourinda')
        cy.get('select#country').select('New Zealand')
        cy.get('#state').type('São de Janeiro')
        cy.get('#city').type('Maravilhas')
        cy.get('#zipcode').type('01153 000')
        cy.get('#mobile_number').type('(52) 132657891')
        cy.get('[data-qa="create-account"]').click()

        cy.deleteAccount()

    })
    
    it('Verify that "ACCOUNT CREATED" is visible', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.get('[data-qa="account-created"]')
            .should('be.visible')

        cy.deleteAccount()
    })

    it('Click "Continue" button', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.deleteAccount()
    })

    it('Verify that "Logged in as username" is visible', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('a').contains('Logged in as').should('be.visible')
        cy.get('a b').should('have.value', '')

        cy.contains('Delete Account').click()

        
    })

    it('Click "Delete Account" button', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.deleteAccount()
    })

    it('Verify that "ACCOUNT DELETED!"" is visible and click "Continue" button', () => {
        cy.fillInSignupFields()
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.deleteAccount()
        cy.get('[data-qa=account-deleted]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it('The complete flow of registering a new user', () => {
        cy.get('header').should('be.visible')
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.fillInSignupFields()
        cy.contains('Enter Account Information').should('be.visible')
        cy.enterAccountInformation()
        cy.addressInformation()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('a').contains('Logged in as').should('be.visible')
        cy.get('a b').should('have.value', '')
        cy.contains('Delete Account').click()
        cy.get('[data-qa=account-deleted]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

    })



})

