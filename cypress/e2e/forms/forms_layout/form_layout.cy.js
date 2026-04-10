/// <reference types="cypress" />

//import { describe } from "mocha";
import { form_layout_page } from "../../../page_objects/form_layout/form_layout_page"
import { navigateTo } from "../../../page_objects/navigationPage"
import { faker } from '@faker-js/faker';


describe('Inline Form', () => {

    it('Inline Form: no validation', () => {
        navigateTo.forms_layout_Page()
    });
    it('Inline Form: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.inlineForm()
    })
})

describe('Using the Grid', () => {

    it('Using the Grid: no validation', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.gridFormNoValidation()
    });
    it('Using the Grid: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.gridForm()
    })
})

describe('Basic Form', () => {

    it('Basic Form: no validation', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.basicFormNoValidation()
    });
    it('Basic Form: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.basicForm()
    });
})

describe('Form Without Labels', () => {
    it('Form Without Labels: no validation', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.formWithoutLabelsNoValidation()
    });

    it('Form Without Labels: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.formWithoutLabels()
    });
})


describe('Block Form', () => {
    it('Block Form: no validation', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.blockFormNoValidation()
    });

    it('Block Form: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.blockForm()
    });
})

describe('Horizontal Form', () => {
    it('Horizontal Form: no validation', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.horizontalFormNoValidation()
    });

    it('Horizontal Form: valid input (no submission)', () => {
        navigateTo.forms_layout_Page()
        form_layout_page.horizontalForm()
    });
})