import {commonConsts} from "../consts/common";
import {checkValidationErrorVisisble} from "../helpers/commonTestCases";

context('Suport Page tests', () => {
    before(() => {
        cy.visit(commonConsts.urls.supportPageUrl);
        cy.url().should('be.equal',commonConsts.urls.supportPageUrl)
    });

    it('Checking empty fields error occured', ()=>{
        cy.get(commonConsts.locators.submitButton)
            .click()
            .get(commonConsts.locators.validationError)
            .should('be.visible')
            .and('contain', commonConsts.strings.emptyFieldsAllErrorMessage);
    });

    context('Cheching all neccessary fields are filled', () => {

        it('Checking your name field', () => {
             cy.get(commonConsts.locators.yourNameInput)
                 .type(commonConsts.strings.yourName);
            checkValidationErrorVisisble();
        });

        it('Checking organization field', () => {
            cy.get(commonConsts.locators.organizationNameInput)
                .type(commonConsts.strings.organizationName);
            checkValidationErrorVisisble();
        });

        it('Checking region field', () => {
            cy.get(commonConsts.locators.regionInput)
                .type(commonConsts.strings.region);
            checkValidationErrorVisisble();
        });

        it('Checking email field', () => {
            cy.get(commonConsts.locators.contactEmailInput)
                .type(commonConsts.strings.fakeUsername);
            checkValidationErrorVisisble();
        });

        it('Checking description field', () => {
            cy.get(commonConsts.locators.descriptionInput)
                .type(commonConsts.strings.description)
                .get(commonConsts.locators.submitButton)
                .click()
                .get(commonConsts.locators.validationError)
                .should('not.be.visible');
        });

        it('Checking wrong email error message ', ()=>{
            cy.get(commonConsts.locators.contactEmailInput)
                .clear()
                .type(commonConsts.strings.notAnEmail)
                .get(commonConsts.locators.submitButton)
                .click()
                .get(commonConsts.locators.contactEmailError)
                .should('have.class', 'opened')
                .and('contain', commonConsts.strings.invalidEmailErrorMessage);
        });
    });
});
