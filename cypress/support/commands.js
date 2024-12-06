Cypress.Commands.add('registerUserLogout', () => {
    cy.visit('https://automationexercise.com/login')

    cy.contains('Signup / Login').click()
    
    cy.get('[data-qa="signup-name"]').type('Lívia')
    cy.get('[data-qa="signup-email"]').type('livia@teste.com.br')
    cy.get('[data-qa="signup-button"]').click()
        
    cy.get('#id_gender1').check()
    cy.get('#name').clear()
    cy.get('#name').type('Testando')
    cy.get('#password').type('teste@789')
    cy.get('select#days').select('25')
    cy.get('select#months').select('March')
    cy.get('select#years').select('2004')
    cy.get('#newsletter').check()
    cy.get('#optin').check()

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
    cy.get('[data-qa="continue-button"]').click()

    cy.contains(' Logout').click()
})

/*find -> buscou o cart dentro do product-1 
invoke('text') -> retornou o texto do elemento
then((precoUnitarioTexto) -> recebeu o valor do texto do invoke como argumento para o preço unitario do produto
.replace(/[^0-9,.]/g, '') -> para remover os caracteres não númericos, exceto n° 0-9, virgulas e ponto | serviu para limpar o R$ ou espaço
.replace(',', '.') -> usei para substituir as virgulas pelos pontos 
parseFloat => converte o texto em um número decimal | parseInt => converte o texto em um número inteiro
expect -> faz uma asserção; comparação 
expect(precoTotal).to.equal(precoUnitario * quantidade); -> verifica se o preço total é o preço uni x quantidade
*/
Cypress.Commands.add('valideProduct', (productId) => {
    cy.get(`#${productId}`).find('.cart_price').invoke('text').then((precoUnitarioTexto) => {
        const precoUnitario = parseFloat (precoUnitarioTexto.replace(/[^0-9,.]/g,'').replace(',','.'))

      cy.get(`#${productId}`).find('.cart_quantity').invoke('text').then((quantidadeTexto) => {
         const quantidade = parseInt(quantidadeTexto, 10)

        cy.get(`#${productId}`).find('.cart_total').invoke('text').then((precoTotalTexto) => {
            const precoTotal = parseFloat (precoTotalTexto.replace(/[^0-9,.]/g, '').replace(',','.'))

            expect(precoTotal).to.equal(precoUnitario * quantidade)

        })
      })
    })
})