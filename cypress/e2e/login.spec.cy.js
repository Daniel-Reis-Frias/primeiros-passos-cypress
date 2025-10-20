import userData from '../fixtures/userData.json'


describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert"
  }


  it('Login - Success', () => {
    
    // Acessa o Site descrito no link
    cy.visit('/auth/login?lang=en')
    
    // Insere nome de usuário, senha e seleciona a opção de login
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    
    // Garante que o usuário realmente chegou ao dashboard
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    
    // Confirma visualmente que o texto "Dashboard" está visível
    cy.get(selectorsList.dashboardGrid)
  })
    it('Login - Fail', () => {
    
    
    cy.visit('/auth/login?lang=en')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})