describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    wrongCredentialAlert: ".oxd-alert"
  }
  it('Login - Success', () => {
    
    // Acessa o Site descrito no link
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?lang=en')
    
    // Insere nome de usuário, senha e seleciona a opção de login
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    
    // Garante que o usuário realmente chegou ao dashboard
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    
    // Confirma visualmente que o texto "Dashboard" está visível
    cy.contains('h6', 'Dashboard')
  })
    it('Login - Fail', () => {
    
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?lang=en')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})