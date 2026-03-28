/// <reference types="cypress" />

class formLayoutPage {
    /**
     * @param {string} name - It will valid the user email
     * @param {string} email - It will valid the user password
     */

    inlineForm(name, email) {
        cy.get('nb-card-body > form > input:nth-child(1)').type(`${name}`)
        cy.get('nb-card-body > form > input:nth-child(2)').type(`${email}`, { delay: 100 })
        cy.get('.form-inline > nb-checkbox.status-basic > .label > .custom-checkbox').click()
        cy.get('nb-card-body > form > input:nth-child(1)').invoke('prop', 'value').then(value => {
            console.log(value)
        })
            
    }

    gridForm(email, password) {
        cy.contains('nb-card', 'Using the Grid').then(allElements => {
            cy.wrap(allElements).find('[id="inputEmail1"]').type(email)
            cy.wrap(allElements).find('[id="inputPassword2"]').type(password)
            cy.wrap(allElements).find('[type="radio"]').eq(0).check({ force: true })
            cy.wrap(allElements).find('[status="primary"]').click()
        })
    }
}

export const form_layout_page = new formLayoutPage()