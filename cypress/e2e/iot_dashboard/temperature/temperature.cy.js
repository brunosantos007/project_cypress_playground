/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";

describe('Temperature', () => {
    it('Change the Temperature', () => {
        navigateTo.iot_dashboard_Page()
        cy.get('[tabtitle="Temperature"] circle').invoke('attr', 'cx', '47.45')
        .invoke('attr', 'cy', '232.042')
        .click()
        cy.get('[class="value temperature h1"]').should('contain.text', '12')
    });

})