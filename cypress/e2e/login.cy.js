describe('Login Tests', () => {
    it('should log in successfully with valid credentials', () => {
        cy.fixture('user').then((user)=> {
            cy.login(user.username, user.password)
            cy.url().should('include','/dashboard/index')
        })
    })
})
