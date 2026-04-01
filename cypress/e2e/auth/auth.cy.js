/// <reference types="cypress" />

import { navigateTo } from "../../../cypress/page_objects/navigationPage"
import { faker } from '@faker-js/faker';
import { auth_register_page } from "../../../cypress/page_objects/auth/auth"



describe('Register', () => {

    const passwordRepeat = `${faker.internet.password()}`
        const testData = [
            {fullname: 'jj', emailAddress: `${faker.internet.email()}`, password: `${passwordRepeat}`, errorMessage: 'Full name should contains from 4 to 50 characters', errorIsDisplayed: true},
            {fullname: `${faker.internet.username()}`, emailAddress: 'jj', password: `${passwordRepeat}`, errorMessage: 'Email should be the real one!', errorIsDisplayed: true},
            {fullname: `${faker.internet.username()}`, emailAddress: `${faker.internet.email()}`, password: 'jj', errorMessage: 'Password should contain from 4 to 50 characters', errorIsDisplayed: true},
        ]

    it('Register an User', () => {
        navigateTo.register_page()
        //form_layout_page.inlineForm()
        auth_register_page.registerCompleteForm()
        cy.url().should('include', 'https://playground.bondaracademy.com/pages/iot-dashboard')
    })

    testData.forEach( data => {
        it('Test cases for Errors', () => {
            navigateTo.register_page()
            auth_register_page.registerToComplete(data.fullname, data.emailAddress, data.password)
            if (data.errorIsDisplayed) {
                cy.contains('p', data.errorMessage).click()
                cy.contains('p', data.errorMessage).should('be.visible')
            } else {
                cy.get('p[_ngcontent-evh-c167]').should('not.contain.text', data.errorMessage)
            }
    });
    })
})