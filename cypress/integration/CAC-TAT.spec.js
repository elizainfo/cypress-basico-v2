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

      //Exercício extra 1
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
                
      })  

      //Exercício extra 2
      it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('NovoNome')
        .should('have.value', 'NovoNome')
        cy.get('#lastName').type('NovoSobreNome')
        .should('have.value', 'NovoSobreNome')
        cy.get('#email').type('teste@testecom')
        cy.get('#open-text-area').type('Testando campo email')
        cy.get('button[type="submit"]').click()

        cy.get('.error > strong').should('be.visible')
      })

      //Exercício extra 3
      it('campo telefone continua vazio quando preenchido com valor não-numérico', function(){
        cy.get('#phone')
          .type('etestess')
            .should('have.value', '')

      })

      //Exercício extra 4
      it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('NovoNome')
        .should('have.value', 'NovoNome')
        cy.get('#lastName').type('NovoSobreNome')
        .should('have.value', 'NovoSobreNome')
        cy.get('#email').type('teste@teste.com')
        .should('have.value', 'teste@teste.com')
        
        //cy.get('#phone-checkbox').check() -> Forma também válida para checar o checkbox
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Testes')
        cy.get('button[type="submit"]').click()

        cy.get('.error > strong').should('be.visible')
                
      })

      //Exercício extra 5
      it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
        .type('NovoNome')
          .should('have.value', 'NovoNome')
            .clear().should('have.value', '')
        cy.get('#lastName')
        .type('NovoSobreNome')
          .should('have.value', 'NovoSobreNome')
            .clear().should('have.value', '')
        cy.get('#email')
        .type('teste@teste.com')
          .should('have.value', 'teste@teste.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
        .type('1147736767')
          .should('have.value', '1147736767')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
        .type('Teste limpando os campos após digitação')
          .should('have.value', 'Teste limpando os campos após digitação')
            .clear()
            .should('have.value', '')
      })

      //Exercício extra 6
      it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
      })

      //Exercício extra 7
      it.only('envia o formuário com sucesso usando um comando customizado', function(){

      })

  })