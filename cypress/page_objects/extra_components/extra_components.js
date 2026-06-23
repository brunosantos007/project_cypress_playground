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

    moveTaskDoneForToDo(){
        this.moveTaskToDone()
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).last().trigger('dragstart')
        })
        cy.get('[data-source="items"]').then(todo => {
            cy.wrap(todo).last().trigger('drop')
        })
    }

    createNewTask(){
        cy.get('input[placeholder="add an item..."]').type('Teste')
        cy.get('.add-button').click()
    }

    deleteTaskToDo() {
        cy.get('[data-source="items"]').first().within(() => {
            cy.get('button[color="warn"]').click()
        })
        cy.get('[data-source="items"]').first().should('not.contain', 'Get groceries')
    }

    deleteTaskDone() {
        this.moveTaskToDone()
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).get('button[color="warn"]').last().click()
        })
    }

    completedIcon(){
        this.moveTaskToDone()
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).get('button[color="accent"]').first().should('exist')
        })
    }

}

export const extra_component_page = new extraComponentsPage()