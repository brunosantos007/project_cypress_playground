/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
})


describe('Temperature', () => {

    it('Change the Temperature', () => {
        cy.get('[tabtitle="Temperature"] circle').invoke('attr', 'cx', '47.45')
        .invoke('attr', 'cy', '232.042')
        .click()
        cy.get('[class="value temperature h1"]').should('contain.text', '12')
    });

})