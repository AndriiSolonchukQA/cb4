import {commonConsts} from "../consts/common";

context('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit(commonConsts.urls.loginPageUrl)
          .url().should('be.equal',commonConsts.urls.loginPageUrl)
    });

    it('Checking that page elements are visible', ()=>{
        cy.get(commonConsts.locators.usernameInput).should('be.visible')
            .get(commonConsts.locators.usernamePassword).should('be.visible')
            .get(commonConsts.locators.submitButton).should('be.visible')
            .get(commonConsts.locators.rememberMeCheckBox).should('be.visible')
            .get(commonConsts.locators.forgotPasswordLink).should('be.visible')
            .get(commonConsts.locators.registerLink).should('be.visible')
            .get(commonConsts.locators.supportLink).should('be.visible');
    });

    it('Checking negative scenario of the login process', () => {
        cy.get(commonConsts.locators.usernameInput)
            .type(commonConsts.strings.fakeUsername)
            .get(commonConsts.locators.usernamePassword)
            .type(commonConsts.strings.fakePassword)
            .get(commonConsts.locators.submitButton)
            .click()
            .get(commonConsts.locators.loginFailedMessage)
            .should('contain', commonConsts.strings.loginFailedMessage);
    });

    it('Check that forgot password link is valid', () => {
        cy.get(commonConsts.locators.forgotPasswordLink)
            .click()
            .url().should('be.equal', commonConsts.urls.forgotPasswordPageUrl);
    });

    it('Check that register link is valid', () => {
        cy.get(commonConsts.locators.registerLink)
            .click()
            .url().should('be.equal', commonConsts.urls.registerPageUrl);
    });
});
