import {commonConsts} from "../consts/common";

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://staging-wcs.c-b4.com/testme/#/login');
        //todo check url and status code
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
            .type(commonConsts.strings.fakePassword)
            .get(commonConsts.locators.loginButton)
            .click() //todo check status code
            .get(commonConsts.locators.loginFailedMessage)
            .should('contain', commonConsts.strings.loginFailedMessage);
    });



});
