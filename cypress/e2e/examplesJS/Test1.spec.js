/// <reference types="Cypress" />

describe('My first test suite',() => 
{
  it('My first test case', ()=> {
      //First test step
      cy.visit("https://www.google.co.uk")
      cy.contains('Accept all').click() 
      cy.get('.gLFyf').type('Justin Shek')
      cy.contains('Google Search').click() 
      cy.get('#rcnt').should('contain','Justin')
      cy.log('Automation is not too hard I guess')







  })
})
