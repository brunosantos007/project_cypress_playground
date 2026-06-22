/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { extra_component_page } from "../../../page_objects/extra_components/extra_components";

beforeEach(() => {
    navigateTo.drag_and_drop_Page()
})

describe('To do List', () => {
    it('Move tasks from To do to Done', () => {
        extra_component_page.moveTaskToDone()
    });

    it('Task Done must have Icon Completed', () => {
        extra_component_page.moveTaskToDone()
        cy.get('button[color="accent"]').should('exist')
    });
})