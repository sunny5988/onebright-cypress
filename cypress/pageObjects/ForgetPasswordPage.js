class ForgetPasswordPage {
    getResetUserInput() {
        return cy.get('input[placeholder="Name"]');
    }

    getResetMailInput() {
        return cy.get('input[placeholder="Email"]');
    }

    getResetPhoneInput() {
        return cy.get('input[placeholder="Phone Number"]');
    }

    getResetButton () {
        return cy.get('.reset-pwd-btn');
    }

    getResetPasswordMessage() {
        return cy.get('.infoMsg');
    }

    getGoToLoginBtn() {
        return cy.get('.go-to-login-btn');
    }

    resetPassword(name,email,phone) {
        this.getResetUserInput().type(name);
        this.getResetMailInput().type(email);
        this.getResetPhoneInput().type(phone);
        this.getResetButton().click();
    }
}

export default ForgetPasswordPage;