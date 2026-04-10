/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class datePickerPage {
   
    openCalendar() {
        cy.contains('nb-card', 'Common Datepicker').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Form Picker"]').click()
            cy.get('nb-datepicker-container').should('be.visible')
        })
    }
}

export const date_picker_page = new datePickerPage()