// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

//Minha forma em 14/03
// describe('Central de Atendimento ao Cliente TAT', function() {
//   beforeEach(() => cy.visit('./src/index.html'))
//     it('verifica o título da aplicação', function() {
//       cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
//     })
//   })

//Forma do curso:
  describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(function() {
      cy.visit('./src/index.html')
    })

      it('verifica o título da aplicação', function() {        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })

      it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Testando o preenchimento dos campos obrigatórios se utilizando da propridade de delay durante o preenchimento'
        cy.get('#firstName').type('NovoNome')
        .should('have.value', 'NovoNome')
        cy.get('#lastName').type('NovoSobreNome')
        .should('have.value', 'NovoSobreNome')
        cy.get('#email').type('teste@teste.com')
        .should('have.value', 'teste@teste.com')
        cy.get('#phone').type('1147736767')
        .should('have.value', '1147736767')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success > strong').should('be.visible')
       // cy.get('.sucess')
                
      })  
  })