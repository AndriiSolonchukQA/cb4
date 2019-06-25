import {commonConsts} from "../consts/common";

context('Actions', () => {
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
                .type(commonConsts.strings.yourName)
                .get(commonConsts.locators.submitButton).click()
                 .get(commonConsts.locators.validationError)
                 .should('be.visible')
                 .and('contain', commonConsts.strings.emptyFieldsAllErrorMessage);
        });

        it('Checking organization field', () => {
            cy.get(commonConsts.locators.organizationNameInput)
                .type(commonConsts.strings.organizationName)
                .get(commonConsts.locators.submitButton).click()
                .get(commonConsts.locators.validationError)
                .should('be.visible')
                .and('contain', commonConsts.strings.emptyFieldsAllErrorMessage);
        });
    });

});
