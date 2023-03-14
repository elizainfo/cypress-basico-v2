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
  describe('Central de Atendimento ao Cliente TAT', function() {
    
      it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })
    })