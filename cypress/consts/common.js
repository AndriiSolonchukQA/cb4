export const commonConsts = {
    locators: {
        usernameInput: '#username',
        usernamePassword: '#password',
        submitButton: '#kc-login',
        loginFailedMessage:'h1',
        rememberMeCheckBox: '#rememberMe',
        forgotPasswordLink: '.forgot-password-href',
        registerLink: '#register-link',
        supportLink: '#support-link',

        fieldErrorSpan: '.field-error'
    },
  strings:{
        fakeUsername: 'fakeUsername@email.com',
        fakePassword: 'fakePassword',
        loginFailedMessage: '405 Not Allowed',
        emptyFieldErrorMessage: 'Please fill in the above field'
  },
    urls:{
        loginPageUrl: 'https://staging-wcs.c-b4.com/testme/#/login',
        forgotPasswordPageUrl: 'https://staging-wcs.c-b4.com/testme/#/reset',
        registerPageUrl: 'https://staging-wcs.c-b4.com/testme/#/register'
    }
};