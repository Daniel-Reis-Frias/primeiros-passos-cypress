import userData from '../fixtures/userData.json'


describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    nationalityField:".oxd-select-text--arrow",
   // maritalStatus:
    //dateOfBirth:
    //genderField
    submitButton: "[type='submit']"
  }
 
  it.only('User Info Update - Success', () => {
  
  cy.visit('/auth/login?lang=en')


  cy.url().then(url => cy.log('URL atual:', url))

  
  cy.get(selectorsList.usernameField,  { timeout: 10000 }).type(userData.userSuccess.username)
  cy.get(selectorsList.passwordField,  { timeout: 10000 }).type(userData.userSuccess.password)
  cy.get(selectorsList.loginButton).click()

  
  cy.location('pathname', { timeout: 10000 })
    .should('include', '/web/index.php/dashboard')

  
  cy.get(selectorsList.dashboardGrid, { timeout: 10000 })
    .should('be.visible')

  
  cy.get(selectorsList.myInfoButton).should('be.visible').click()

  // Valida que o My Info abriu
  cy.location('pathname', { timeout: 10000 })
    .should('include', '/web/index.php/pim/viewPersonalDetails')

  cy.contains('Personal Details',  { timeout: 10000 }).should('be.visible')

  
  cy.get(selectorsList.firstNameField,  { timeout: 20000 }).scrollIntoView()
  .should('be.visible').clear().type('FirstName Test')
  cy.wait(2000)
  cy.get(selectorsList.lastNameField,  { timeout: 20000 }).clear().type('LastNameTest')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(3).clear().type('Employee')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(4).clear().type('OtherIdTest')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(5).clear().type('DriversLicensceNumTest')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-10-22')
  cy.get('.oxd-date-input-calendar').contains('Close').click({ force: true })
  cy.get(selectorsList.nationalityField).eq(0).click()
  cy.get('.oxd-select-dropdown').contains('.oxd-select-option', 'Brazilian').click()  
  cy.get(selectorsList.submitButton).eq(0).click()
  cy.get('body').should('contain', 'Successfully Updated')

})

 
  it('Login - Fail', () => {
    
    
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField, { timeout: 10000}).should('be.visible').type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})
