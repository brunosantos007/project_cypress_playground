/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
    cy.get('div > a.sidebar-toggle').click()
})

describe('Toaster Configuration', () => {
    it('Checkboxes Toast', () => {
        // It select all the values
        cy.get('input[type=checkbox]').check({ force: true })
        // It takes out all the checkboxex checked
        cy.get('input[type=checkbox]').uncheck({ force: true })
        // It select the first checkbox
        cy.get('input[type=checkbox]').first().uncheck({ force: true })
        // It select what valeu you need
        cy.get('input[type=checkbox]').eq(1).check({ force: true })
    });
})

describe('Toaster Lists and Dropdowns', () => {
    it('Toast Type', () => {
        cy.get('select').select('danger').should('have.value', 'danger')
        cy.get('select').select('success').should('have.value', 'success')
    });

    it('Position', () => {
        //cy.contains('div', 'Position:').find('nb-select')
        ///cy.get('nb-option').eq(3).click()

        cy.contains('div', 'Position:').find('nb-select').then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get('nb-option').each((option, index, list) => {
                cy.wrap(option).click()
                if (index < list.length-1) {
                    cy.wrap(dropdown).click()
                }
            })
        })
    });
})