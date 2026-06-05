/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";


// describe('Toaster Configuration', () => {
//     it('Checkboxes Toast', () => {
//         navigateTo.toastr_Page()
//         // It select all the values
//         cy.get('input[type=checkbox]').check({ force: true })
//         // It takes out all the checkboxex checked
//         cy.get('input[type=checkbox]').uncheck({ force: true })
//         // It select the first checkbox
//         cy.get('input[type=checkbox]').first().uncheck({ force: true })
//         // It select what valeu you need
//         cy.get('input[type=checkbox]').eq(1).check({ force: true })
//     });
// })


describe('Toaster Configuration', () => {

    const statuses = ['primary', 'success', 'info', 'warning', 'danger']

    statuses.forEach(status => {
        it(`Validate top-right + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'top-right').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate top-left + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'top-left').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate bottom-left + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'bottom-left').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate bottom-right + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'bottom-right').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate top-end + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'top-end').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

         it(`Validate top-start + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'top-start').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate bottom-end + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'bottom-end').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

        it(`Validate bottom-start + ${status}`, () => {
            navigateTo.toastr_Page()
            cy.contains('div', 'Position:').find('nb-select').click()
            cy.contains('nb-option', 'bottom-start').click()
            cy.get('select').select(status).should('have.value', status)
            cy.contains('button', 'Show toast').click()
            cy.get('nb-toast').should('have.class', `status-${status}`).and('be.visible')
        })

    })

})

describe('Random Toast', () => {

    const statuses = ['status-primary', 'status-success', 'status-info', 'status-warning', 'status-danger']
    it('Validate Random Toast', () => {
        navigateTo.toastr_Page()
        cy.contains('button', 'Random toast').click()
         cy.get('nb-toast')
            .should('be.visible')
            .invoke('attr', 'class')
            .then(classes => {
                expect(
                    statuses.some(s => classes.includes(s))
                ).to.be.true
            })
    });
})