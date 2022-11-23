/// <reference types="Cypress" />
 
describe('My Sixth Test Suite', function() {
it('My Sixth test case',function() {
//cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.visit(Cypress.env('url')+'/AutomationPractice/')

//Mouse over
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()     //{ force: true } --> clicks on hidden elements
cy.url().should('include','top')


}) 
})