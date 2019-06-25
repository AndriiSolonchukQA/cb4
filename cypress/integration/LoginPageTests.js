import {commonConsts} from "../consts/common";

context('Actions', () => {
    beforeEach(() => {
        cy.visit(commonConsts.urls.loginPageUrl);
        cy.url().should('be.equal',commonConsts.urls.loginPageUrl)
        //todo check and status code
    });

    it('Checking that page elements are visible', ()=>{
        cy.get(commonConsts.locators.usernameInput).should('be.visible');
        cy.get(commonConsts.locators.usernamePassword).should('be.visible');
        cy.get(commonConsts.locators.loginButton).should('be.visible');
        cy.get(commonConsts.locators.rememberMeCheckBox).should('be.visible');
        cy.get(commonConsts.locators.forgotPasswordLink).should('be.visible');
        cy.get(commonConsts.locators.registerLink).should('be.visible');
        cy.get(commonConsts.locators.supportLink).should('be.visible');
    });

    it('Checking negative scenario of the login process', () => {
        cy.get(commonConsts.locators.usernameInput)
            .type(commonConsts.strings.fakeUsername)
            .get(commonConsts.locators.usernamePassword)
            .type(commonConsts.strings.fakePassword)//todo check text 'have.text' does not work
            .get(commonConsts.locators.loginButton)
            .click() //todo check status code
            .get(commonConsts.locators.loginFailedMessage)
            .should('contain', commonConsts.strings.loginFailedMessage);
    });

    it('Check that forgot password link is valid', () => {
        cy.get(commonConsts.locators.forgotPasswordLink)
            .click()
            .url().should('be.equal', commonConsts.urls.forgotPasswordPageUrl);
    });
});
