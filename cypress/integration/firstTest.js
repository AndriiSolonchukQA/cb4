import {commonConsts} from "../consts/common";

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://staging-wcs.c-b4.com/testme/#/login');
    });

    it('Checking negative scenario', () => {
        cy.get(commonConsts.locators.usernameInput)
            .type(commonConsts.strings.fakeUsername)
            .get(commonConsts.locators.usernamePassword)
            .type(commonConsts.strings.fakePassword)
            .get(commonConsts.locators.loginButton)
            .click();
    });

});
