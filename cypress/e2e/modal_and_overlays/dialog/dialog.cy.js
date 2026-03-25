/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()
    cy.get('div > a.sidebar-toggle').click()
})

describe('Iframe Dialog', () => {

    it('One way to test Iframes', () => {
        cy.frameLoaded('[data-cy="esc-close-iframe"]')
        cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog with esc close').click()
        cy.contains('Dismiss Dialog')
    });

    it('Another way to test Iframes', () => {
        cy.enter('[data-cy="esc-close-iframe"]').then(getBody => {
            getBody().contains('Open Dialog with esc close').click()
            cy.contains('Dismiss Dialog')
        })
    });
    
})