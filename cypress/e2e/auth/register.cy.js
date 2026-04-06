/// <reference types="cypress" />

import { navigateTo } from "../../../cypress/page_objects/navigationPage"
import { faker } from '@faker-js/faker';
import { auth_register_page } from "../../../cypress/page_objects/auth/auth"

describe('Feature - Register', () => {
    const passwordUse = `${faker.internet.password()}`
    const testDataEmailValidation = [
            {fullname: `${faker.internet.username()}`, emailAddress: 'test', password: `${passwordUse}`, errorMessage: 'Email should be the real one!', errorIsDisplayed: true},
            {fullname: `${faker.internet.username()}`, emailAddress: 'test.com', password: `${passwordUse}`, errorMessage: 'Email should be the real one!', errorIsDisplayed: true},
            {fullname: `${faker.internet.username()}`, emailAddress: 'test@', password: `${passwordUse}`, errorMessage: 'Email should be the real one!', errorIsDisplayed: true},
    ]

    const testDataFieldsValidation = [
        {fullname: ' ', emailAddress: `${faker.internet.email()}`, password: `${faker.internet.password()}`, errorMessage: 'Full name should contains from 4 to 50 characters', errorIsDisplayed: true},
        {fullname: `${faker.internet.username()}`, emailAddress: 'test.com', password: `${passwordUse}`, errorMessage: 'Email should be the real one!', errorIsDisplayed: true},
        {fullname: `${faker.internet.username()}`, emailAddress: `${faker.internet.email()}`, password: `${faker.internet.password({ length: 3 })}`, errorMessage: 'Password should contain from 4 to 50 characters', errorIsDisplayed: true},
    ]

    testDataFieldsValidation.forEach( dataValidation => {
        it('Required fields validation', () => {
            navigateTo.register_page()
            auth_register_page.registerToComplete(dataValidation.fullname, dataValidation.emailAddress, dataValidation.password)
        });
    })

    testDataEmailValidation.forEach( data => {
        it('Invalid email validation', () => {
            navigateTo.register_page()
            auth_register_page.registerToComplete(data.fullname, data.emailAddress, data.password)
            cy.contains('p', data.errorMessage).should('be.visible')
        });
    })

    it('Password mismatch', () => {
        navigateTo.register_page()
        auth_register_page.registerPasswordMismatch()
        cy.get('[class="alert-message-list"]').click().should('have.text', 'Registration failed, please try again.')
    });

    it('Terms not accepted', () => {
        navigateTo.register_page()
        auth_register_page.registerWithNoTermsAgreed()
        cy.get('[aria-disabled="true"]').should('be.disabled')
    });

    it('Successful registration', () => {
        navigateTo.register_page()
        auth_register_page.registerCompleteForm()
    });
})