/// <reference types="cypress" />

//import { describe } from "mocha";
import { date_picker_page } from "../../../page_objects/forms/date_picker_page";
import { navigateTo } from "../../../page_objects/navigationPage";


describe('Common Datepicker', () => {

    it('Open the calendar', () => {
        navigateTo.datepicker_Page()
        date_picker_page.openCalendar()
        cy.get('nb-datepicker-container').should('be.visible')
    });

    it('Select a date from the current day/month', () => {
        navigateTo.datepicker_Page()
        date_picker_page.selectCurrentDayOfMonthCommonDatepicker()
    });

    it('Selecting Date', () => {
        navigateTo.datepicker_Page()
        let date = new Date()
        // Example of how to find an exactly day that we could need
        //date.setDate(date.getDate() + 3)
        let todaysDate = date.getDate()
        let dateToAssert = `Apr ${todaysDate}, 2026`

        cy.get('[placeholder="Form Picker"]').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-cell').not('.bounding-month').contains(todaysDate).click()
            cy.wrap(input).should('have.value', dateToAssert)
        })
    });

    it('Selecting Date from other Months', () => {
        navigateTo.datepicker_Page()
        function selectDateFromCurrentDay(day) {
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
            return dateToAssert
        }

        
        cy.get('[placeholder="Form Picker"]').then(input => {
            cy.wrap(input).click()
            const dateToAssert = selectDateFromCurrentDay(20)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    });

})

describe('Datepicker With Disabled Min Max Values', () => {
    it('Prevent selecting dates from the previous month', () => {
        navigateTo.datepicker_Page()
        date_picker_page.selectPreviousDate()
    });
})