class LoginPage{
    getUsernameInput() {
        return cy.get('input[id="inputUsername"]');
    }

    getPasswordInput() {
        return cy.get('input[name="inputPassword"]')
    }

    getSignInButton() {
        return cy.get('.signInBtn');
    }

    getErrorMessage() {
        return cy.get('.error');
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getSignInButton().click();

    }
}

export default LoginPage; 