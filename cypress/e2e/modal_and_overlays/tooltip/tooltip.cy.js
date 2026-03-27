/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";



describe('Tooltip Placements', () => {
    it('Top', () => {
        navigateTo.tooltip_Page()
        cy.contains('button', 'Top').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Right', () => {
        navigateTo.tooltip_Page()
        cy.contains('button', 'Right').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Bottom', () => {
        navigateTo.tooltip_Page()
        cy.contains('button', 'Bottom').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Left', () => {
        navigateTo.tooltip_Page()
        cy.contains('button', 'Left').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });
})

describe('Tooltip With Icon',() => {
    it('Show Tooltip', () => {
        navigateTo.tooltip_Page()
        cy.contains('button', 'Show Tooltip').trigger('mouseenter')
        cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
    });

    it('Show Tooltip 2', () => {
        navigateTo.tooltip_Page()
        cy.get('button[nbtooltipicon="alert-triangle"]').trigger('mouseenter')
        cy.get('nb-tooltip').should('be.visible')
    });

} )
