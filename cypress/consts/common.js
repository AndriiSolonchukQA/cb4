export const commonConsts = {
    locators: {
        usernameInput: '#username',
        usernamePassword: '#password',
        submitButton: '[type=submit]',
        loginFailedMessage:'h1',
        rememberMeCheckBox: '#rememberMe',
        forgotPasswordLink: '.forgot-password-href',
        registerLink: '#register-link',
        supportLink: '#support-link',

        fieldError: '.field-error',
        statusIndicator: '.status-indicator',
        backButton: '.back-btn',

        yourNameInput: '#yourName',
        organizationNameInput: '#organizationName',
        regionInput: '#storeRegion',
        contactEmailInput: '#email',
        descriptionInput: '#description',
        validationError: '.validation-error-message'
    },

    strings:{
        fakeUsername: 'fakeUsername@email.com',
        fakePassword: 'fakePassword',
        yourName: 'Andrii',
        organizationName: 'cb4',
        region: 'Israel',
        notAnEmail: 'I am not an email',
        description: 'Description',

        loginFailedMessage: '405 Not Allowed',
        emptyFieldErrorMessage: 'Please fill in the above field',
        emptyFieldsAllErrorMessage: 'Please fill in all the above fields',
        wrongUsernameErrorMessage: 'The email you entered was not found within our records.'
    },

    urls:{
        loginPageUrl: 'https://staging-wcs.c-b4.com/testme/#/login',
        forgotPasswordPageUrl: 'https://staging-wcs.c-b4.com/testme/#/reset',
        registerPageUrl: 'https://staging-wcs.c-b4.com/testme/#/register',
        supportPageUrl: 'https://staging-wcs.c-b4.com/testme/#/support'
    }
};