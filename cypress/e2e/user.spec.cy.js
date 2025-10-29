import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require ('chance')
const chance = new chance()
const LoginPage = new loginPage()
const dashBoardPage = new dashboardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {

  const selectorsList = {
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    
  }
 
  it.only('User Info Update - Success', () => {
    cy.url().then(url => cy.log('URL atual:', url))
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoardPage.checkDashBoardPage()

    cy.get(selectorsList.myInfoButton).should('be.visible').click()  
    cy.location('pathname', { timeout: 20000 }).should('include', '/web/index.php/pim/viewPersonalDetails')
    cy.contains('Personal Details',  { timeout: 10000 }).should('be.visible')

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmplyeeId', 'OtherId', 'DriversNumber', '2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

})


})
