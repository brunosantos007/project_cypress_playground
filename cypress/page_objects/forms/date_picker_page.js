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

    keepFieldEmptyNoSelection() {
        cy.contains('nb-card', 'Common Datepicker').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Form Picker"]').click()
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Form Picker"]').should('be.empty')
        })
    }

    datepickerRangeDateStart() {
        let todayDay = this.day.getDate()
        let todayMonth = this.month.toLocaleDateString('en-US', { month: 'short'})
        let todayYear = this.year.getFullYear()
        let dateToAssert = `${todayMonth} ${todayDay}, ${todayYear}`
        cy.contains('nb-card', 'Datepicker With Range').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Range Picker"]').click()
            cy.get('nb-calendar-range-day-cell.today').not('.bounding-month').click()
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Range Picker"]').should('have.value', dateToAssert)
        })
    }

    selectDateFromCurrentDay(day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonthLong = date.toLocaleDateString('en-US', { month: 'long'})
            let futureMonthShort = date.toLocaleDateString('en-US', { month: 'short'})
            let futureYear = date.getFullYear()
            let dateToAssert = `${futureMonthShort} ${futureDay}, ${futureYear}`

            cy.get('nb-calendar-view-mode').invoke('text').then(calendarMonthAndYear => {

                if (!calendarMonthAndYear.includes(futureMonthLong) || !calendarMonthAndYear.includes(futureYear)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDateFromCurrentDay(day)
                } else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                }

            })
    }

    datepickerRangeDateStartAndEnd() {
        cy.contains('nb-card', 'Datepicker With Range').then(elementsCommonDatePicker => {
            cy.wrap(elementsCommonDatePicker).find('[placeholder="Range Picker"]').click()
            cy.get('nb-calendar-range-day-cell.today').not('.bounding-month').click()

            const dateToAssert = selectDateFromCurrentDay(5)
            cy.contains('nb-calendar-range-day-cell', dateToAssert).click()
            ///cy.wrap(elementsCommonDatePicker).find('[placeholder="Range Picker"]').should('have.value', dateToAssert)
        })
    }

}

export const date_picker_page = new datePickerPage()