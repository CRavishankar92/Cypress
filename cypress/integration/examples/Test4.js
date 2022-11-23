/// <reference types="Cypress" />
 
describe('My Fourth Test Suite', function() {
it('My Fourth test case',function() {
//cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.visit(Cypress.env('url')+'/AutomationPractice/')
//Alerts and Pop-ups - Cypress auto handles
cy.get("#alertbtn").click()
cy.get('input[value="Confirm"]').click()

//window:alert
cy.on('window:alert', (str) =>{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str) =>{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahulshettyacademy')
cy.go('back')
 
}) 
})