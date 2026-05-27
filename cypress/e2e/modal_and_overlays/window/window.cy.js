/// <reference types="cypress" />

import { navigateTo } from "../../../page_objects/navigationPage";
import { window_page } from "../../../page_objects/modals_&_overlays/window/window";

describe('Window Form', () => {
    it('Open Window Form', () => {
        navigateTo.window_Page()
        window_page.openWindowForm()
    });

    it('Open Window Without Backdrop', () => {
        navigateTo.window_Page()
        window_page.openWindowWithoutBackdrop()
    });
})
