/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";



describe('Iframe Dialog', () => {

    it('One way to test Iframes', () => {
        navigateTo.dialog_Page()
        cy.frameLoaded('[data-cy="esc-close-iframe"]')
        cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog with esc close').click()
        cy.contains('Dismiss Dialog')
    });

    it('Another way to test Iframes', () => {
        navigateTo.dialog_Page()
        cy.enter('[data-cy="esc-close-iframe"]').then(getBody => {
            getBody().contains('Open Dialog with esc close').click()
            cy.contains('Dismiss Dialog')
        })
    });
    
})