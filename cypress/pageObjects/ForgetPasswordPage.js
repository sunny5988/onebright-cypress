class ForgetPasswordPage {
    getResetUserInput() {
        return cy.get('input[placeholder="Name"]', { timeout: 10000 }).should('be.visible');
    }

    getResetMailInput() {
        return cy.get('input[placeholder="Email"]', { timeout: 10000 }).should('be.visible');
    }

    getResetPhoneInput() {
        return cy.get('input[placeholder="Phone Number"]', { timeout: 10000 }).should('be.visible');
    }

    getResetButton() {
        return cy.get('.reset-pwd-btn', { timeout: 10000 }).should('be.visible');
    }

    getResetPasswordMessage() {
        return cy.get('.infoMsg', { timeout: 10000 }).should('be.visible');
    }

    getGoToLoginBtn() {
        return cy.get('.go-to-login-btn', { timeout: 10000 }).should('be.visible');
    }

    resetPassword(name, email, phone) {
        this.getResetUserInput().clear().type(name);
        this.getResetMailInput().clear().type(email);
        this.getResetPhoneInput().clear().type(phone);
        this.getResetButton().click();
    }
}

export default ForgetPasswordPage;
