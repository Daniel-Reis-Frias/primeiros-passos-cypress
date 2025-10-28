import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'


const LoginPage = new loginPage()
const dashBoardPage = new dashboardPage()


describe('Orange HRM tests', () => {

  const selectorsList = {
          
    
    
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    listBox:".oxd-select-text--arrow",  
    submitButton: "[type='submit']"
  }
 
  it.only('User Info Update - Success', () => {
    cy.url().then(url => cy.log('URL atual:', url))
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoardPage.checkDashBoardPage()

    

  cy.get(selectorsList.myInfoButton).should('be.visible').click()  
  cy.location('pathname', { timeout: 20000 }).should('include', '/web/index.php/pim/viewPersonalDetails')
  cy.contains('Personal Details',  { timeout: 10000 }).should('be.visible')
  cy.get(selectorsList.firstNameField).scrollIntoView().should('be.visible').and('not.be.disabled')
  .click({ force: true }).clear().type('FirstName Test')
  cy.get(selectorsList.lastNameField,  { timeout: 20000 }).clear().type('LastNameTest')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(3).clear().type('Employee')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(4).clear().type('OtherIdTest')
  cy.get(selectorsList.genericField,  { timeout: 20000 }).eq(5).clear().type('DriversLicensceNumTest')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-10-22')
  cy.get('.oxd-date-input-calendar').contains('Close').click({ force: true })
  cy.get(selectorsList.listBox).eq(0).click()
  cy.get('.oxd-select-dropdown').contains('.oxd-select-option', 'Brazilian').click()
  cy.get(selectorsList.listBox).eq(1).click()
  cy.get('.oxd-select-dropdown').contains('.oxd-select-option', 'Single').click()
  cy.get(selectorsList.dateField).eq(1).clear().type('1988-08-02')
  cy.get('.oxd-date-input-calendar').contains('Close').click({ force: true })
  //cy.contains('label','Male').parent().find('Male').click()  
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
