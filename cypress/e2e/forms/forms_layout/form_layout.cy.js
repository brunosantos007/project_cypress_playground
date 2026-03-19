beforeEach('Open the App', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('div > a.sidebar-toggle').click()
})


describe('Inline Form', () => {
    const nameTest = 'Testador'
    it('Inline Form Completed', () => {
        cy.get('nb-card-body > form > input:nth-child(1)').type(`${nameTest}`)
        cy.get('nb-card-body > form > input:nth-child(2)').type('teste123@gmail.com', { delay: 100 })
        cy.get('.form-inline > nb-checkbox.status-basic > .label > .custom-checkbox').click()

        cy.get('nb-card-body > form > input:nth-child(1)').invoke('prop', 'value').then(value => {
            console.log(value)
        })
    })
})

describe('Using the Grid', () => {

    it.only('Grid', () => {
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(allRadioButtons => {
            cy.wrap(allRadioButtons).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(allRadioButtons).eq(2).check({ force: true }).should('be.disabled')
        })
    })


})