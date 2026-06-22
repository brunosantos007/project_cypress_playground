/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class extraComponentsPage {
   
    moveTaskToDone() {
        cy.get('[data-source="items"]').then(todo => {
            cy.wrap(todo).last().trigger('dragstart')
        })
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).last().trigger('drop')
        })
    }

}

export const extra_component_page = new extraComponentsPage()