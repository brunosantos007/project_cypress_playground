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
            cy.wrap(elementsOpenDialogWithDelay).should('have.text', 'Loading... (3s)')
        })
        // { delay: 100 }
    }
  

}

export const dialog_page = new dialogPage()