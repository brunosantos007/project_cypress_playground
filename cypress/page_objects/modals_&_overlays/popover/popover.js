/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class popoverPage {
   
    popoverPosition(position) {
        cy.contains('nb-card', 'Popover Position').then(elementsPopoverPosition => {
            cy.wrap(elementsPopoverPosition).contains('button', position).trigger('mouseenter')
            cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
        })
    }

    simplePopoverOnClick() {
        cy.contains('nb-card', 'Simple Popovers').then(elementsSimplePopover => {
            cy.wrap(elementsSimplePopover).contains('button', 'on click').click()
            cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
        })
    }

    simplePopoverOnHover() {
        cy.contains('nb-card', 'Simple Popovers').then(elementsSimplePopover => {
            cy.wrap(elementsSimplePopover).contains('button', 'on hover').trigger('mouseenter')
            cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
        })
    }

    simplePopoverOnHint() {
        cy.contains('nb-card', 'Simple Popovers').then(elementsSimplePopover => {
            cy.wrap(elementsSimplePopover).contains('button', 'on hint').click()
            cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
        })
    }

    templatePopoversWithTabs() {
        cy.contains('nb-card', 'Template Popovers').then(elementsTemplatePopover => {
            cy.wrap(elementsTemplatePopover).contains('button', 'With tabs').click()
            cy.contains('nb-tabset', 'Such a wonderful day!').should('exist')
        })
    }

    templatePopoversWithForm() {
        cy.contains('nb-card', 'Template Popovers').then(elementsTemplatePopover => {
            cy.wrap(elementsTemplatePopover).contains('button', 'With form').click()
            cy.get('nb-popover').should('contain.text', 'Send')
        })
    }

    templatePopoversWithCard() {
        cy.contains('nb-card', 'Template Popovers').then(elementsTemplatePopover => {
            cy.wrap(elementsTemplatePopover).contains('button', 'With card').click()
            cy.get('nb-popover').should('exist')
        })
    }

    componentPopoversWithTabs() {
        cy.contains('nb-card', 'Template Popovers').then(elementsComponentPopover => {
            cy.wrap(elementsComponentPopover).contains('button', 'With tabs').click()
            cy.contains('nb-tabset', 'Such a wonderful day!').should('exist')
        })
    }

    componentPopoversWithForm() {
        cy.contains('nb-card', 'Template Popovers').then(elementsComponentPopover => {
            cy.wrap(elementsComponentPopover).contains('button', 'With form').click()
            cy.get('nb-popover').should('contain.text', 'Send')
        })
    }

    componentPopoversWithCard() {
        cy.contains('nb-card', 'Template Popovers').then(elementsComponentPopover => {
            cy.wrap(elementsComponentPopover).contains('button', 'With card').click()
            cy.get('nb-popover').should('exist')
        })
    }

}

export const popover_page = new popoverPage()