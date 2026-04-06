/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class authPage {
    
    registerCompleteForm() {
        const passwordRePass = `${faker.internet.password()}`

        cy.get('[id="input-name"]').type(`${faker.internet.username()}`)
        cy.get('[id="input-email"]').type(`${faker.internet.email()}`)
        cy.get('[name="password"]').type(passwordRePass)
        cy.get(`[name="rePass"]`).type(passwordRePass)
        cy.get('.native-input').check({ force: true })
        cy.get('[status="primary"]').click()
    }

    registerWithNoTermsAgreed() {
        const passwordRePass = `${faker.internet.password()}`

        cy.get('[id="input-name"]').type(`${faker.internet.username()}`)
        cy.get('[id="input-email"]').type(`${faker.internet.email()}`)
        cy.get('[name="password"]').type(passwordRePass)
        cy.get(`[name="rePass"]`).type(passwordRePass)
    }

    registerPasswordMismatch() {
        cy.get('[id="input-name"]').type(`${faker.internet.username()}`)
        cy.get('[id="input-email"]').type(`${faker.internet.email()}`)
        cy.get('[name="password"]').type('egg3454ergerg4', { delay: 100 })
        cy.get(`[name="rePass"]`).type('1234')
        cy.get('.native-input').check({ force: true })
        cy.get('[status="primary"]').click()
    }

    registerToComplete(name, email, password) {
        cy.get('[id="input-name"]').type(name)
        cy.get('[id="input-email"]').type(email)
        cy.get('[name="password"]').type(password)
        cy.get(`[name="rePass"]`).type(password)
        cy.get('.native-input').check({ force: true })
        //cy.get('[status="primary"]').click()
    }

}

export const auth_register_page = new authPage()