/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class windowPage {
   
    openWindowForm() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window form').click()
            cy.get('nb-window.full-screen').should('exist')
        })
    }

    openWindowWithoutBackdrop() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window without backdrop').click()
            cy.get('nb-window.full-screen').should('exist')
        })
    }
}

export const window_page = new windowPage()