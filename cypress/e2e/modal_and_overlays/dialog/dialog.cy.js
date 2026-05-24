/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { dialog_page } from "../../../page_objects/modals_&_overlays/dialog";

describe('Open Dialog', () => {
    it('Component dialog opens', () => {
        navigateTo.dialog_Page()
        dialog_page.openDialogWithComponents()
    });

    it('Template dialog opens', () => {
        navigateTo.dialog_Page()
        dialog_page.openDialogWithTemplate()
    });
})

describe('Open Dialog With Delay', () => {
    it('Delayed dialog (3 seconds)', () => {
        navigateTo.dialog_Page()
        dialog_page.openDialogWithDelay3Seconds()
    });
})



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