import home from "../../fixtures/home.json";
import authMessages from "../../fixtures/authMessages.json"
import homeElements from "../page_elements/homeElements.js";

Cypress.Commands.add('registerUser', () => {
    cy.contains(authMessages.new_user_signup).should('be.visible')

    cy.get(homeElements.inputSignupName).type(home.user1.name)
    cy.get(homeElements.inputSignupEmail).type(home.user1.email)
    cy.get(homeElements.btnSignup).click()
            
    cy.contains(authMessages.account_information_signup).should('be.visible')

    cy.get(homeElements.checkTitle).check()
    cy.get(homeElements.inputNameSignup).clear().type(home.user1.name)
    cy.get(homeElements.inputPasswordSignup).type(home.user1.password)
    cy.get(homeElements.selectDaySignup).select(home.user1.day)
    cy.get(homeElements.selectMonthSignup).select(home.user1.month)
    cy.get(homeElements.selectYearSignup).select(home.user1.year)
    cy.get(homeElements.newsletterSignup).check()

    cy.get(homeElements.firstNameSignup).type(home.user1.name)
    cy.get(homeElements.lastNameSignup).type(home.user1.last_name)
    cy.get(homeElements.companySignup).type(home.user1.company)
    cy.get(homeElements.address1Signup).type(home.user1.address_1)
    cy.get(homeElements.address2Signup).type(home.user1.address_2)
    cy.get(homeElements.countrySignup).select(home.user1.country)
    cy.get(homeElements.stateSignup).type(home.user1.state)
    cy.get(homeElements.citySignup).type(home.user1.city)
    cy.get(homeElements.zipCodeSignup).type(home.user1.zipcode)
    cy.get(homeElements.mobileNumberSignup).type(home.user1.number)
            
    cy.get(homeElements.btncreateAccountSignup).click()
    cy.get(homeElements.btnContinueSignup).click()        
})

Cypress.Commands.add('deleteAccount', () => {
    cy.get(homeElements.deleteAccountLink).click()
    cy.get(homeElements.btnContinueSignup).click()
})

Cypress.Commands.add('clickSignupLogin', () => { 
    cy.get(homeElements.signupLoginLink).click()
})

Cypress.Commands.add('loginWithValidCredentials', () => {
    cy.get(homeElements.inputLoginEmail).type(home.user2.email)
    cy.get(homeElements.inputLoginPassword).type(home.user2.password)
    cy.get(homeElements.btnLogin).click()
})

Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.get(homeElements.inputLoginEmail).type(home.user1.email)
    cy.get(homeElements.inputLoginPassword).type(home.user1.password)
    cy.get(homeElements.btnLogin).click()
    cy.contains(authMessages.login_incorrect).should('be.visible')
})

Cypress.Commands.add('loggedInUserNameIsCorrect', () => { 
    cy.get('a').contains('Logged in as').should('be.visible')
    cy.get('a b').should('have.value', '')
})

Cypress.Commands.add('logout', () => {
    cy.get(homeElements.logoutLink).click()
})

Cypress.Commands.add('registerWithExistingEmail', () => {
    cy.get(homeElements.inputSignupName).type(home.user2.name)
    cy.get(homeElements.inputSignupEmail).type(home.user2.email)
    cy.get(homeElements.btnSignup).click()
    cy.contains(authMessages.email_already_registered).should('be.visible')
})

Cypress.Commands.add('useContactForm', () => {
    const longText = home.user2.name

    cy.get(homeElements.contactUsLink).click()

    cy.contains('Get In Touch').should('be.visible')

    cy.get(homeElements.inputNameContactUs).type(home.user1.name)
    cy.get(homeElements.inputEmailContactUs).type(home.user1.email)
    cy.get(homeElements.inputMessageContactUs).type(longText, {delay:2})

    cy.get(homeElements.selectFile)
    .selectFile('cypress/upload_arquivo/sonhos.pdf')
    .should(input => {
        console.log(input) // para mostrar no console do navegador os valores do input 
        expect(input[0].files[0].name).to.equal('sonhos.pdf')// verificou pelos parametros se o nome do arquivo está correto 
    })

    cy.get(homeElements.btnSubmitContactUs).click()
    cy.get(homeElements.statusContactUs).should('have.text', authMessages.file_submission_success)
    cy.get(homeElements.homePageLink).click()
})

Cypress.Commands.add('searchProduct', () => {
    cy.get(homeElements.productLink).click()

    cy.get(homeElements.searchProducts).type('H&M')
    cy.get(homeElements.btnSubmitSearch).click()
    cy.get(homeElements.containerProducts).should('be.visible')
})
