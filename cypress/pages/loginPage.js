class loginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert",  
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login?lang=en')
    }

    loginWithUser (username,password) {
        cy.get(this.selectorsList().usernameField, { timeout: 10000 }).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default loginPage

