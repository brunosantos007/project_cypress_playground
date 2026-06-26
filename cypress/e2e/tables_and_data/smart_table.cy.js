/// <reference types="cypress" />

import { navigateTo } from "../../page_objects/navigationPage";
import { faker } from '@faker-js/faker';

describe('Testing the Dialog Box', () => {
    
})

describe('Smart Table', () => {

    it('Create a new User', () => {
        navigateTo.smart_table_Page()
        cy.get('.nb-plus').click()
        cy.get('thead tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Ramirez')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Diaz')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then( tableCol => {
            cy.wrap(tableCol).eq(2).should('have.text', 'Ramirez')
            cy.wrap(tableCol).eq(3).should('have.text', 'Diaz')
        })
    });

    // const placeHolderName = ['ID', 'First Name', 'Last Name', 'Username', 'E-mail', 'Age']

    const placeHolderName = [
        { placeholder: 'ID', value: `${faker.number.int()}` },
        { placeholder: 'First Name', value: `${faker.person.firstName()}` },
        { placeholder: 'Last Name', value: `${faker.person.lastName()}` },
        { placeholder: 'Username', value: `${faker.internet.username()}`},
        { placeholder: 'E-mail', value: `${faker.internet.email()}`},
        { placeholder: 'Age', value: `${faker.number.int({ min: 10, max: 99 })}`}
    ]


    placeHolderName.forEach(holderName => {
        it(`Edit ${holderName.placeholder} on the table`, () => {
        navigateTo.smart_table_Page()
        cy.get('tbody tr').first().then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find(`[placeholder="${holderName.placeholder}"]`).clear().type(`${holderName.value}`)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).contains('td', holderName.value).should('be.visible')
        })
    });


    })
    
    it('Delete an User', () => {
        navigateTo.smart_table_Page()
        cy.window().then(win => {
            cy.stub(win, 'confirm').as('dialogBox').returns(false)
        })
        cy.get('.nb-trash').first().click()
        cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')
    });

    

        const searchForUserByAttribute = [
            { placeholder: 'ID', value: faker.number.int({ min: 1, max: 60 }) },
            { placeholder: 'First Name', value: 'Lou' },
            { placeholder: 'Last Name', value: 'Talley' },
            { placeholder: 'Username', value: '@Hendricks' },
            { placeholder: 'E-mail', value: 'friedacraig@comtours.com' },
            { placeholder: 'Age', value: faker.number.int({ min: 20, max: 47 }) }
        ]

        searchForUserByAttribute.forEach(field => {

            it(`Filter by ${field.placeholder}`, () => {
                navigateTo.smart_table_Page()
                cy.get(`[placeholder="${field.placeholder}"]`).clear().type(field.value)
                cy.wait(500)
                cy.get('tbody tr').each(row => {
                    cy.wrap(row).find('td').should('contain.text', field.value)
                })
            })
        })


});