describe('My first test suite',() => {
    it('My first test case', ()=> {
        //First test step
        cy.visit("https://www.dunnhumby.com");
        cy.log('Mike roolz!');
    });
});