/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class datePickerPage {
   
    openCalendar() {
        cy.contains('nb-card', 'Common Datepicker').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Form Picker"]').click()
        })
    }

    selectCurrentDayOfMonthCommonDatepicker() {
        let day = new Date()
        let month = new Date()
        let year = new Date()
        
        let todayDay = day.getDate()
        let todayMonth = month.toLocaleDateString('en-US', { month: 'short'})
        let todayYear = year.getFullYear()
        let dateToAssert = `${todayMonth} ${todayDay}, ${todayYear}`

        cy.contains('nb-card', 'Common Datepicker').then(elementsDate => {
            cy.wrap(elementsDate).find('[placeholder="Form Picker"]').click()
            cy.get('nb-calendar-day-cell').not('.bounding-month').contains(todayDay).click()
            cy.get('[placeholder="Form Picker"]').should('have.value', dateToAssert)
        })
    }

    selectPreviousDate() {
        let day = new Date()
        let month = new Date()
        let todayDay = day.getDate()
        const previousMonthDate = new Date(month)
        previousMonthDate.setMonth(previousMonthDate.getMonth() - 1)
        const previousMonth = previousMonthDate.toLocaleDateString('en-US', { month: 'short' })

        cy.contains('nb-card', 'Datepicker With Disabled Min Max Values').then(elementsPreviousDate => {
            cy.wrap(elementsPreviousDate).find('[placeholder="Min Max Picker"]').type(`${previousMonth} ${todayDay}, 2026`)
            cy.get('nb-calendar-day-cell.disabled .cell-content').should('contain.text', todayDay)

        })
    }
}

export const date_picker_page = new datePickerPage()