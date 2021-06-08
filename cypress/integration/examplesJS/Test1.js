/// <reference types="Cypress" />

describe('My first test suite',() => 
{
  it('My first test case', ()=> {
      //First test step
      cy.visit("https://www.google.co.uk")
      cy.contains('I agree').click() 
      cy.get('.gLFyf').type('Kelly Choi')
      cy.contains('Google Search').click() 
      cy.get('#rcnt').should('contain','@KELLYCHOI')
      cy.log('Automation is not too hard I guess')







  })
})
