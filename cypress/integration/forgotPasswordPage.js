import {commonConsts} from "../consts/common";
import {checkingBackLink} from "../helpers/commonTestCases";

context('Forgot password page tests', () => {
    beforeEach(() => {
        cy.visit(commonConsts.urls.forgotPasswordPageUrl);
        cy.url().should('be.equal',commonConsts.urls.forgotPasswordPageUrl)
    });

    it('Checking empty field error occured', ()=>{
        cy.get(commonConsts.locators.submitButton)
            .click()
            .get(commonConsts.locators.fieldError)
            .should('have.class', 'opened')
            .and('contain', commonConsts.strings.emptyFieldErrorMessage);
    });

    it('Checking wrong username error occured', ()=>{
        cy.get(commonConsts.locators.usernameInput)
            .type(commonConsts.strings.fakeUsername)
            .get(commonConsts.locators.submitButton)
            .click()
            .get(commonConsts.locators.statusIndicator)
            .should('have.class', 'error')
            .and('contain', commonConsts.strings.wrongUsernameErrorMessage);
    });

       it('Checking if back link is valid', ()=>{
           checkingBackLink();
       });
});
