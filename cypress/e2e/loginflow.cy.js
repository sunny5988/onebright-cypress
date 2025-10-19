/// <reference types="cypress" />

describe ('Rahul Shetty Academy', () => {
   
    // Runs before each test
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/locatorspractice/');
    });

    it('Login error', () => {
        cy.get('input[id="inputUsername"]').type("sushil");
        cy.get('input[name="inputPassword"]').type("sushil123");
        cy.get('.signInBtn').click();

        cy.get('.error').should('be.visible').invoke('text').then((errorText) => {
            cy.log("Error Text: " + errorText);
        });
    });

    it('Forget password - Navigate', () => {
        cy.contains('a', 'Forgot your password?').click();
    });

    it('Reset password flow', () => {
        cy.contains('a', 'Forgot your password?').click();
        cy.get('input[placeholder="Name"]').type("sushil");
        cy.get('input[placeholder="Email"]').type("sunny5988@gmail.com");
        cy.get('input[placeholder="Phone Number"]').type("1234567");
        cy.get('.reset-pwd-btn').click();

        cy.get('.infoMsg').should('be.visible').invoke('text').then((resettext)=>{
            cy.log("Reset Password:"+resettext);
        });

        cy.get('.go-to-login-btn').click();
    });

    it('Login with fixture data', () => {
        cy.fixture('user').then((users)=>{
            cy.login(users.demologin.username,users.demologin.password);
        });
    });

});