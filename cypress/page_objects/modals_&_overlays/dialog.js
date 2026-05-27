/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class dialogPage {
   
    openDialogWithComponents() {
        cy.contains('nb-card', 'Open Dialog').then(elementsOpenDialog => {
            cy.wrap(elementsOpenDialog).contains('button', 'Open Dialog with component').click()
        })
    }

    openDialogWithTemplate(){
        cy.contains('nb-card', 'Open Dialog').then(elementsOpenDialog => {
            cy.wrap(elementsOpenDialog).contains('button', 'Open Dialog with template').click()
        })
    }

    openDialogWithDelay3Seconds() {
        cy.contains('nb-card', 'Open Dialog With Delay').then(elementsOpenDialogWithDelay => {
            cy.wrap(elementsOpenDialogWithDelay).contains('button', 'Open with delay 3 seconds').click()
            cy.get('nb-dialog-container', { timeout: 3000 }).should('be.visible')
            cy.get('nb-dialog-container > nb-card > nb-card-body').should('have.text', 'Dialog opened with 3 seconds delay')
        })
    }

    openDialogWithDelay10Seconds() {
        cy.contains('nb-card', 'Open Dialog With Delay').then(elementsOpenDialogWithDelay => {
            cy.wrap(elementsOpenDialogWithDelay).contains('button', 'Open with delay 10 seconds').click()
            cy.get('nb-dialog-container', { timeout: 12000 }).should('be.visible')
            cy.get('nb-dialog-container > nb-card > nb-card-body').should('have.text', 'Dialog opened with 10 seconds delay')
        })
    }

    openDialogWithBackdropClick() {
        cy.contains('nb-card', 'Open Without Backdrop Click').then(elementsOpenWithoutBackdropClick => {
            cy.wrap(elementsOpenWithoutBackdropClick).contains('button', 'Open Dialog with backdrop click').click()
            cy.get('nb-dialog-container',).should('be.visible')
            cy.get('.cdk-overlay-backdrop').click({ force: true })
            cy.get('nb-dialog-container',).should('not.exist')
        })
    }
  
    openWithoutBackdropClick() {
        cy.contains('nb-card', 'Open Without Backdrop Click').then(elementsOpenWithoutBackdropClick => {
            cy.wrap(elementsOpenWithoutBackdropClick).contains('button', 'Open without backdrop click').click()
            cy.get('nb-dialog-container',).should('be.visible')
            cy.get('.cdk-overlay-backdrop').click({ force: true })
            cy.get('nb-dialog-container').should('exist')
        })
    }
    randomDialogEnterName() {
            cy.contains('nb-card', 'Random dialog').contains('button', 'Enter Name').click()
            const name = faker.person.firstName()

            cy.get('body').then($body => {
            const alertaExiste = $body.find('div:contains("Reminder, name should start with capital case!")').length > 0

                if (alertaExiste) {
                    cy.contains('button', 'OK').click()
                    cy.get('input[nbinput]').type(name)
                    cy.contains('button', 'Submit').click()
                    cy.contains('li', name).should('be.visible')
                } else {
                    cy.get('input[nbinput]').type(name)
                    cy.contains('button', 'Submit').click()
                    cy.contains('li', name).should('be.visible')
                }
            })
    }

}

export const dialog_page = new dialogPage()