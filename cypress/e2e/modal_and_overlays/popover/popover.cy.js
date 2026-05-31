/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { popover_page } from "../../../page_objects/modals_&_overlays/popover/popover";

describe('Popover Position', () => {
    it('Popover Position Left', () => {
        navigateTo.popover_Page()
        popover_page.popoverPosition('Left')
    });

    it('Popover Position Top', () => {
        navigateTo.popover_Page()
        popover_page.popoverPosition('Top')
    });

    it('Popover Position Bottom', () => {
        navigateTo.popover_Page()
        popover_page.popoverPosition('Bottom')
    });

    it('Popover Position Right', () => {
        navigateTo.popover_Page()
        popover_page.popoverPosition('Right')
    });
})

describe('Simple Popovers', () => {
    it('Simple Popovers - On Click', () => {
        navigateTo.popover_Page()
        popover_page.simplePopoverOnClick()
    });

    it('Simple Popovers - On Hover', () => {
        navigateTo.popover_Page()
        popover_page.simplePopoverOnHover()
    });

    it('Simple Popovers - On Hint', () => {
        navigateTo.popover_Page()
        popover_page.simplePopoverOnHint()
    });
})

describe('Template Popover', () => {
    it('Template Popover - With Tabs', () => {
        navigateTo.popover_Page()
        popover_page.templatePopoversWithTabs()
    });

    it('Template Popover - With Form', () => {
        navigateTo.popover_Page()
        popover_page.templatePopoversWithForm()
    });

    it('Template Popover - With Card', () => {
        navigateTo.popover_Page()
        popover_page.templatePopoversWithCard()
    });
})

describe('Component Popovers', () => {
    it('Component Popovers - With Tabs', () => {
        navigateTo.popover_Page()
        popover_page.componentPopoversWithTabs()
    });

    it('Component Popovers - With Form', () => {
        navigateTo.popover_Page()
        popover_page.componentPopoversWithForm()
    });

    it('Component Popovers - With Card', () => {
        navigateTo.popover_Page()
        popover_page.componentPopoversWithCard()
    });
})