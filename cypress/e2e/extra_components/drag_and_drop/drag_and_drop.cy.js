/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Extra Components').click()
    cy.contains('Drag & Drop').click()
    cy.get('div > a.sidebar-toggle').click()
})

describe('To do List', () => {

    it('Move tasks from To do to Dome', () => {
        cy.get('[data-source="items"]').then(todo => {
            cy.wrap(todo).last().trigger('dragstart')
        })
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).last().trigger('drop')
        })
    });
})