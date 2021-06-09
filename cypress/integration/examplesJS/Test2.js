/// <reference types="Cypress" />

describe('My first test suite',() => 
{
  it('My first test case', ()=> {
      //First test step
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
      
    







  })
})