/// <reference types="cypress" />

import { form_layout_page } from "../../../page_objects/form_layout/form_layout_page"
import { navigateTo } from "../../../page_objects/navigationPage"
import { faker } from '@faker-js/faker';


describe('Inline Form', () => {
    const nameTest = 'Testador'
    it('Inline Form Completed', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.inlineForm()
    })
})

describe('Using the Grid', () => {

    it('Grid', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.gridForm()
    })


})