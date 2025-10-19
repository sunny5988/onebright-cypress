/// <reference types="cypress" />

import LoginPage from '../pageObjects/LoginPage';
import ForgetPasswordPage from '../pageObjects/ForgetPasswordPage';

describe ('Login and Reset Password flow', ()=> {
    const loginPage = new LoginPage();
    const forgetPage = new ForgetPasswordPage();

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/locatorspractice/');
    });

    it('Login with invalid credentials', () => {
        loginPage.login('sushil','wrongpass');
        loginPage.getErrorMessage().should('be.visible').invoke('text').then((text) => {
            cy.log('Wrong Password message: ' + text);
        });
    });

    it('Forget Password flow', () => {
        cy.contains('a', 'Forgot your password?').click();
        forgetPage.resetPassword('sushil','sunny5988@gmail.com','7878');
        forgetPage.getResetPasswordMessage().should('be.visible').invoke('text').then ((text) => {
            cy.log('Reset Password message: ' + text);
        });
        forgetPage.getGoToLoginBtn().click();
    });

    it('Login with fixture data', () => {
        cy.fixture('user').then((users) => {
            cy.login(users.demologin.username,users.demologin.password);
        });
    });
})