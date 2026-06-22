/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class tooltipPage {
   
    buttonMouseEnter(position) {
        cy.contains('button', position).trigger('mouseenter')
    }

    buttonShouldShowTooltip(label, expectedText = 'This is a tooltip') {
        this.buttonMouseEnter(label)
        cy.get('nb-tooltip').should('have.text', expectedText)
    }


}

export const tooltip_page = new tooltipPage()