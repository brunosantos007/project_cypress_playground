/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { extra_component_page } from "../../../page_objects/extra_components/extra_components";

beforeEach(() => {
    navigateTo.drag_and_drop_Page()
})

describe('To do List', () => {
    it('Move Task from To Do to Done', () => {
        extra_component_page.moveTaskToDone()
    });

    it('Move Task from Done to To Do', () => {
        extra_component_page.moveTaskDoneForToDo()
    });

    it('Create a New Task', () => {
        extra_component_page.createNewTask()
        cy.get('[data-source="items"]').then(todo => {
            cy.wrap(todo).first().should('contain.text', 'Teste')
        })
    });

    it('Delete a Task in To Do', () => {
        extra_component_page.deleteTaskToDo()
    });

    it('Delete a Task in Done', () => {
        extra_component_page.deleteTaskDone()
    });

    it('Completed Icon', () => {
        extra_component_page.completedIcon()
    });
})