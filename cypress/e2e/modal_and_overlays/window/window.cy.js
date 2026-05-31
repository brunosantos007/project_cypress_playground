/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { window_page } from "../../../page_objects/modals_&_overlays/window/window";

describe('Window Form', () => {
    it('Open Window Form', () => {
        navigateTo.window_Page()
        window_page.openWindowForm()
    });

    it('Minimize Window Form', () => {
        navigateTo.window_Page()
        window_page.minimizeWindowForm()
    });

    it('Collapse Window Form', () => {
        navigateTo.window_Page()
        window_page.collapseWindowsForm()
    });

    it('Open Window Without Backdrop', () => {
        navigateTo.window_Page()
        window_page.openWindowWithoutBackdrop()
    });

    it('Minimize Window Without Backdrop', () => {
        navigateTo.window_Page()
        window_page.minimizeWindowWithoutBackdrop()
    });

    it('Collapse Window Without Backdrop', () => {
        navigateTo.window_Page()
        window_page.collapseWindowWithoutBackdrop()
    });

    it('Open Homepage in a New Tab', () => {
        navigateTo.window_Page()
        window_page.openHomePageInANewTab()
    });
})
