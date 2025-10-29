class MyInfoPage {

    selectorsList(){
        const selectors = {
            
            firstNameField:"[name='firstName']",
            lastNameField:"[name='lastName']",
            genericField:".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            listBox:".oxd-select-text--arrow",  
            submitButton: "[type='submit']"
                
        }
        return selectors

    }

    fillPersonalDetails(firstName, lastName) {
        
        cy.get(this.selectorsList().firstNameField, { timeout: 20000 })
        .scrollIntoView()
        .should('be.visible')
        .and('not.be.disabled')
        .clear()
        .type(firstName, { delay: 100 })
        //cy.get(this.selectorsList().firstNameField, { timeout: 20000 }).scrollIntoView().should('be.visible').and('not.be.disabled')
        //.click({ force: true }).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField, { timeout: 20000 }).clear().type(lastName)

    }

    fillEmployeeDetails(employeeId, otherId, driversLicensceNumber,expireDate) {
        cy.get(this.selectorsList().genericField,  { timeout: 20000 }).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField,  { timeout: 20000 }).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField,  { timeout: 20000 }).eq(5).clear().type(driversLicensceNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expireDate)
        cy.get('.oxd-date-input-calendar').contains('Close').click({ force: true })

    }

    fillStatus() {
        cy.get(this.selectorsList().listBox).eq(0).click()
        cy.get('.oxd-select-dropdown').contains('.oxd-select-option', 'Brazilian').click()
        cy.get(this.selectorsList().listBox).eq(1).click()
        cy.get('.oxd-select-dropdown').contains('.oxd-select-option', 'Single').click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1988-08-02')
        cy.get('.oxd-date-input-calendar').contains('Close').click({ force: true })
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
  

}

export default MyInfoPage