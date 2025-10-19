class LoginPage {
    getUsernameInput() {
        return cy.get('input[id="inputUsername"]', { timeout: 10000 }).should('be.visible');
    }

    getPasswordInput() {
        return cy.get('input[name="inputPassword"]', { timeout: 10000 }).should('be.visible');
    }

    getSignInButton() {
        return cy.get('.signInBtn', { timeout: 10000 }).should('be.visible');
    }

    getErrorMessage() {
        return cy.get('.error', { timeout: 10000 }).should('be.visible');
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getSignInButton().click();
    }
}

export default LoginPage;
