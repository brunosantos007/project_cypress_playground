/// <reference types="cypress" />

import { form_layout_page } from "../../../page_objects/form_layout/form_layout_page"
import { navigateTo } from "../../../page_objects/navigationPage"


describe('Inline Form', () => {
    const nameTest = 'Testador'
    it('Inline Form Completed', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.inlineForm('Test', 'test@gmail.com')
    })
})

describe('Using the Grid', () => {

    it('Grid', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.gridForm('test@gmail.com', '12345')
    })


})