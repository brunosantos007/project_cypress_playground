/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class datePickerPage {

    day = new Date()
    month = new Date()
    year = new Date()
   
    openCalendar() {
        cy.contains('nb-card', 'Common Datepicker').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Form Picker"]').click()
        })
    }

    selectCurrentDayOfMonthCommonDatepicker() {
        let todayDay = this.day.getDate()
        let todayMonth = this.month.toLocaleDateString('en-US', { month: 'short'})
        let todayYear = this.year.getFullYear()
        let dateToAssert = `${todayMonth} ${todayDay}, ${todayYear}`

        cy.contains('nb-card', 'Common Datepicker').then(elementsDate => {
            cy.wrap(elementsDate).find('[placeholder="Form Picker"]').click()
            cy.get('nb-calendar-day-cell').not('.bounding-month').contains(todayDay).click()
            cy.get('[placeholder="Form Picker"]').should('have.value', dateToAssert)
        })
    }

    selectPreviousFollowingDate(previousFollowingDate) {
        let todayDay = this.day.getDate()
        let todayYear = this.year.getFullYear()
        const previousFollowingMonthDate = new Date(this.month)
        if (previousFollowingDate == 'Previous') {
            previousFollowingMonthDate.setMonth(previousFollowingMonthDate.getMonth() - 1)
        } else {
            previousFollowingMonthDate.setMonth(previousFollowingMonthDate.getMonth() + 1)
        }
        const previousMonth = previousFollowingMonthDate.toLocaleDateString('en-US', { month: 'short' })

        cy.contains('nb-card', 'Datepicker With Disabled Min Max Values').then(elementsPreviousFollowingDate => {
            cy.wrap(elementsPreviousFollowingDate).find('[placeholder="Min Max Picker"]').type(`${previousMonth} ${todayDay}, ${todayYear}`)
            cy.get('nb-calendar-day-cell.disabled .cell-content').should('contain.text', todayDay)
        })
    }

    selectPreviousFollowingMonth(previousNextMonth) {
        const currentMonthIndex = this.month.getMonth()
        const year = this.year.getFullYear()

        const previousMonth = new Date(year, currentMonthIndex - 1)
            .toLocaleDateString('en-US', { month: 'long' })

        const nextMonth = new Date(year, currentMonthIndex + 1)
            .toLocaleDateString('en-US', { month: 'long' })

        cy.contains('nb-card', 'Common Datepicker').then(card => {
            cy.wrap(card).find('[placeholder="Form Picker"]').click()
        })

        if (previousNextMonth === 'Previous') {
            cy.get('.prev-month').click()
            cy.get('nb-calendar-view-mode')
            .should('have.text', ` ${previousMonth} ${year} `)
        } else {
            cy.get('.next-month').click()
            cy.get('nb-calendar-view-mode')
            .should('have.text', ` ${nextMonth} ${year} `)
        }
    }

}

export const date_picker_page = new datePickerPage()