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
        cy.get('[data-qa="signup-email"]').type('livia.teste@gmail.com')
    })

    it('Click "Signup" button', () => {
        cy.get('[data-qa="signup-name"]').type('Lívia')
        cy.get('[data-qa="signup-email"]').type('livia.teste@gmail.com')
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
        cy.get('[data-qa="name"]').type('Testando')
        cy.get('[data-qa="password"]').type('teste@123')
        cy.get('select[data-qa="days"]').select('25')
        cy.get('select[data-qa="months"]').select('March')
        cy.get('select[data-qa="years"]').select('2004')

    })
})

