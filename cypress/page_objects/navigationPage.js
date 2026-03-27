/// <reference types="cypress" />

function selectGroupMenuItem(groupItemName) {
    cy.contains('a', groupItemName).invoke('attr', 'aria-expanded').then( attr => {
        if (attr.includes('false')) {
            cy.contains('a', groupItemName).click()
        }
    })
}

class NavigationPage {

    iot_dashboard_Page(){
        cy.visit('/')
    }

    drag_and_drop_Page() {
        cy.visit('/')
        cy.contains('Extra Components').click()
        cy.contains('Drag & Drop').click()
        cy.get('div > a.sidebar-toggle').click()
    }

    datepicker_Page() {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.get('div > a.sidebar-toggle').click()
    }
   
    forms_layout_Page() {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('div > a.sidebar-toggle').click()
    }

    dialog_Page() {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()
        cy.get('div > a.sidebar-toggle').click()
    }
   
    toastr_Page() {    
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
        cy.get('div > a.sidebar-toggle').click()
    }

    tooltip_Page() {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()
        cy.get('div > a.sidebar-toggle').click()
    }

    smart_table_Page() {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('div > a.sidebar-toggle').click()
    }

}

export const navigateTo = new NavigationPage()