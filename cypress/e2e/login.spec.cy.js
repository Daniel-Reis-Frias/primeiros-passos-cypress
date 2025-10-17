describe('Orange HRM tests', () => {
  it('Login - Success', () => {
    
    // Acessa o Site descrito no link
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?lang=en')
    
    // Insere nome de usuário, senha e seleciona a opção de login
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    
    // Garante que o usuário realmente chegou ao dashboard
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    
    // Confirma visualmente que o texto "Dashboard" está visível
    cy.contains('h6', 'Dashboard')
  })
    it('Login - Fail', () => {
    
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?lang=en')
    cy.get('input[name="username"]').type('test')
    cy.get('input[name="password"]').type('test')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert')
  })  

})