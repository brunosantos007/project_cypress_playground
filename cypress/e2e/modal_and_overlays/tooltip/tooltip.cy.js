/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { tooltip_page } from "../../../page_objects/modals_&_overlays/tooltip/tooltip";

beforeEach(() => {
    navigateTo.tooltip_Page()
})

describe('Tooltip With Icon',() => {
    it('Show Tooltip', () => {
        tooltip_page.buttonShouldShowTooltip('Show Tooltip')
    })

    it('Show Tooltip 2', () => {
        navigateTo.tooltip_Page()
        cy.get('button[nbtooltipicon="alert-triangle"]').trigger('mouseenter')
        cy.get('nb-tooltip').should('be.visible')
    });
} )


describe('Tooltip Placements', () => {
    const placements = ['Top', 'Right', 'Bottom', 'Left']
    
    placements.forEach(place => {
        it(`Tooltip appears on ${place}`, () => {
            tooltip_page.buttonShouldShowTooltip(place)
        })
    })
})

describe('Colored Tooltips', () => {
   const coloredToolTips = ['Default', 'Primary', 'Success', 'Danger', 'Info', 'Warning']
    
    coloredToolTips.forEach(place => {
        it(`Tooltip color ${place}`, () => {
            tooltip_page.buttonShouldShowTooltip(place)
        })
    })
})