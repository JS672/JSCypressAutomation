/// <reference types="Cypress" />

describe('My first test suite',() => 
{
  it('My first test case', ()=> {
      //First test step
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)

      // Parent child chaining
      cy.get('.products').find('.product').should('have.length',4)

      // Select 3rd product and click 'ADD TO CART' button
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      
      // Loop through the array of products and only click the add button when 'Cashews' is found
      cy.get('.products').find('.product').each(($el, index, $list) => 
      {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }
      
      })

      
 
      
      
    







  })
})