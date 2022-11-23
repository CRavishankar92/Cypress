/// <reference types="Cypress" />
 
describe('My Seventh Test Suite', function() {
it('My Seventh test case',function() {
//cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.visit(Cypress.env('url')+'/AutomationPractice/')

cy.get('#opentab').then(function(el)
{
    const url = el.prop('href')
    cy.log(url)
    cy.visit(url)
})


}) 
})