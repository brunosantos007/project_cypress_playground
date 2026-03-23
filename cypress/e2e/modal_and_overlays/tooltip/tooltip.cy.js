/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()
    cy.get('div > a.sidebar-toggle').click()
})

describe('Tooltip Placements', () => {
    it('Top', () => {
        cy.contains('button', 'Top').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Right', () => {
        cy.contains('button', 'Right').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Bottom', () => {
        cy.contains('button', 'Bottom').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Left', () => {
        cy.contains('button', 'Left').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });
})

describe('Tooltip With Icon',() => {
    it('Show Tooltip', () => {
        cy.contains('button', 'Show Tooltip').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Show Tooltip 2', () => {
        cy.get('button[nbtooltipicon="alert-triangle"]').trigger('mouseenter')
        cy.get('nb-tooltip').should('be.visible')
    });

} )
