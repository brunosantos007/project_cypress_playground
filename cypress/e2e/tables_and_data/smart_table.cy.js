/// <reference types="cypress" />

beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
    cy.get('div > a.sidebar-toggle').click()
})


describe('Testing the Dialog Box', () => {
    it('Dialog Box for Delete', () => {
        //cy.get('.nb-trash').first().click()
        //cy.on('window:confirm', confirm => {
            //expect(confirm).to.equal('Are you sure you want to delete?')
        //})

        // With False we can guarantee that the dialob box will be clicled to become negative, then It will click on cancel
        cy.window().then(win => {
            cy.stub(win, 'confirm').as('dialogBox').returns(false)
        })
        cy.get('.nb-trash').first().click()
        cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')
    });
})

describe('Web Tables', () => {
    it('Edit values on the table', () => {
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').last().should('have.text', '35')
        })
    });

    it('Create a new User', () => {
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

    it.only('Filter Data from Web Table', () => {
        const ages = [20, 30, 40, 200]

        cy.wrap(ages).each(age => {
        cy.get('[placeholder="Age"]').clear().type(age)
        cy.wait(500)
        cy.get('tbody tr').last().each(tableRow => {
            if (age == 200) {
                cy.get('td').should('not.have.text', age)
            } else {
                cy.wrap(tableRow).find('td').last().should('have.text', age)
            }
        })
        })
    });
})