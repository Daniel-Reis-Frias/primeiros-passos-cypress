class dashboardPage {

    selectorsList(){
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",

        }
        return selectors

    }
   
    checkDashBoardPage(){
        cy.location('pathname', { timeout: 100000 }).should('include', '/web/index.php/dashboard')
        cy.get(this.selectorsList().dashboardGrid, { timeout: 10000 }).should('be.visible')
    }
}

export default dashboardPage
