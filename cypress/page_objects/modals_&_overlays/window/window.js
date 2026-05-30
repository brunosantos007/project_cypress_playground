/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class windowPage {
   
    openWindowForm() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window form').click()
            cy.get('nb-window.full-screen').should('exist')
        })
    }

    minimizeWindowForm() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window form').click()
            cy.get('nb-icon[icon="minus-outline"]').click()
            cy.get('.minimized').should('exist')
        })
    }

    collapseWindowsForm() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window form').click()
            cy.get('nb-icon[icon="collapse-outline"').click()
            cy.get('.maximized').should('exist')
        })
    }

    openWindowWithoutBackdrop() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window without backdrop').click()
            cy.get('.cdk-overlay-container').click({ force: true })
            cy.get('nb-window.full-screen').should('exist')
        })
    }

    minimizeWindowWithoutBackdrop() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window without backdrop').click()
            cy.get('nb-icon[icon="minus-outline"]').click()
            cy.get('.minimized').should('exist')
        })
    }

    collapseWindowWithoutBackdrop() {
        cy.contains('nb-card', 'Window Form').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open window without backdrop').click()
            cy.get('nb-icon[icon="collapse-outline"').click()
            cy.get('.maximized').should('exist')
        })
    }

    openHomePageInANewTab() {
        cy.contains('nb-card', 'New Tab').then(elementsOpenWindowForm => {
            cy.wrap(elementsOpenWindowForm).contains('button', 'Open homepage in a new tab').click()
        })
    }

}

export const window_page = new windowPage()