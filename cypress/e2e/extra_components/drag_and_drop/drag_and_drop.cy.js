/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";

describe('To do List', () => {
    it('Move tasks from To do to Dome', () => {
        navigateTo.drag_and_drop_Page()
        cy.get('[data-source="items"]').then(todo => {
            cy.wrap(todo).last().trigger('dragstart')
        })
        cy.get('[id="drop-list"]').then(done => {
            cy.wrap(done).last().trigger('drop')
        })
    });
})