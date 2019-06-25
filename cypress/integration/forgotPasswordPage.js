import {commonConsts} from "../consts/common";

context('Actions', () => {
    beforeEach(() => {
        cy.visit(commonConsts.urls.forgotPasswordPageUrl);
        cy.url().should('be.equal',commonConsts.urls.forgotPasswordPageUrl)
    });

    it('Checking empty field error occured', ()=>{
        cy.get(commonConsts.locators.submitButton)
            .click()
            .get(commonConsts.locators.fieldErrorSpan)
            .should('have.class', 'opened')
            .and('contain', commonConsts.strings.emptyFieldErrorMessage);
    });
});
