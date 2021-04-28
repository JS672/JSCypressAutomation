// STUFF.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My first test suite', () => {
    it('My first test case', () => {
        //First test step
        cy.visit("https://www.dunnhumby.com");
        cy.log('Mike roolz!');
    });
});