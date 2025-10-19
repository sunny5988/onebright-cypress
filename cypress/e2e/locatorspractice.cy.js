/// <reference types="cypress" />

describe('Signup and Login to rahulshetty practise', () => {
    it('visit rahul shetty practice', () => {
        cy.visit('https://rahulshettyacademy.com/locatorspractice/');
        
        //enter credentials
        cy.get('input[id="inputUsername"]').type("sushil");
        cy.get('input[name="inputPassword"]').type("sushil123");
        
        //Clik SignIn
        cy.get('.signInBtn').click();

        //Capture error text logs
        cy.get('.error').should('be.visible').invoke('text').then((errorText) => {
            cy.log("Error Text: " + errorText);
        })

        //Click Forgot password
        cy.contains('a', 'Forgot your password?').click();

        //Reset Login
        cy.get('input[placeholder="Name"]').type("sushil");
        cy.get('input[placeholder="Email"]').type("sunny5988@gmail.com");
        cy.get('input[placeholder="Phone Number"]').type("1234567");
        cy.get('.reset-pwd-btn').click();

        //Capture Reset password
        cy.get('.infoMsg').should('be.visible').invoke('text').then((resettext)=>{
            cy.log("Reset Password:"+resettext);
        })

        //Back to Login button
        cy.get('.go-to-login-btn').click();

        //Login credentials
        cy.fixture('user').then((users)=>{
            cy.login(users.demologin.username,users.demologin.password);
        })
    })
})