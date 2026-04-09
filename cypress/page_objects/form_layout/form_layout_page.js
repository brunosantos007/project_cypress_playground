/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class formLayoutPage {
    /**
     * @param {string} name - It will valid the user email
     * @param {string} email - It will valid the user password
     */

    inlineForm() {
        cy.get('nb-card-body > form > input:nth-child(1)').type(`${faker.internet.username()}`)
        cy.get('nb-card-body > form > input:nth-child(2)').type(`${faker.internet.email()}`, { delay: 100 })
        cy.get('.form-inline > nb-checkbox.status-basic > .label > .custom-checkbox').click()
        cy.get('nb-card-body > form > input:nth-child(1)').invoke('prop', 'value').then(value => {
            console.log(value)
        })   
    }

    inlineFormNoValidation() {
        cy.contains('nb-card', 'Using the Grid').then(allElements => {
            cy.wrap(allElements).find('[status="primary"]').click()
        })
    }

    gridForm() {
        cy.contains('nb-card', 'Using the Grid').then(allElements => {
            cy.wrap(allElements).find('[id="inputEmail1"]').type(`${faker.internet.email()}`)
            cy.wrap(allElements).find('[id="inputPassword2"]').type(`${faker.internet.password()}`)
            cy.wrap(allElements).find('[type="radio"]').eq(0).check({ force: true })
            cy.wrap(allElements).find('[status="primary"]').click()
        })
    }

    gridFormNoValidation() {
        cy.contains('nb-card', 'Using the Grid').then(allElements => {
            cy.wrap(allElements).find('[status="primary"]').click()
        })
    }

    basicForm() {
        cy.contains('nb-card', 'Basic form').then(elementsBasicForm => {
            cy.wrap(elementsBasicForm).find('[id="exampleInputEmail1"]').type(`${faker.internet.email()}`)
            cy.wrap(elementsBasicForm).find('[id="exampleInputPassword1"]').type(`${faker.internet.password()}`)
            cy.wrap(elementsBasicForm).find('[type="checkbox"]').check({ force: true })
            cy.wrap(elementsBasicForm).find('[class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]').click()
        })
    }

    basicFormNoValidation() {
        cy.contains('nb-card', 'Basic form').then(elementsBasicForm => {
            cy.wrap(elementsBasicForm).find('[class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]').click()
        })
    }

    formWithoutLabels() {
        cy.contains('nb-card', 'Form without labels').then(elementsformWithoutLabels => {
            cy.wrap(elementsformWithoutLabels).find('[placeholder="Recipients"]').type(`${faker.food.ingredient}`)
            cy.wrap(elementsformWithoutLabels).find('[placeholder="Subject"]').type(`${faker.food.description}`)
            cy.wrap(elementsformWithoutLabels).find('[placeholder="Message"]').type(`${faker.food.ethnicCategory}`)
            cy.wrap(elementsformWithoutLabels).find('nbbutton').click()
        })
    }

    formWithoutLabelsNoValidation() {
        cy.contains('nb-card', 'Form without labels').then(elementsformWithoutLabels => {
            cy.wrap(elementsformWithoutLabels).find('nbbutton').click()
        })
    }
}

export const form_layout_page = new formLayoutPage()