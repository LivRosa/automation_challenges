 import home from "../fixtures/home.json";

 
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

Cypress.Commands.add('subscribeNewsletter', () => { //cy.scrollTo('bottom') -> final da página | cy.scrollTo('top') -> topo 
    cy.get('.single-widget > h2').scrollIntoView  
    cy.get('#susbscribe_email').type(registerUser.email)
    .should('have.value', registerUser.email)
    cy.get('#subscribe').click()
})