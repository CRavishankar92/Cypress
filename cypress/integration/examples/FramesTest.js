/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';
 
describe('Frames Test Suite', function() {
it('Demo example',function() {
    //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.visit(Cypress.env('url')+'/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find('a[href*="mentorship"]').eq(0).click()
    cy.iframe().find('h1[class*="pricing-footer"]').should('have.length',2)

}) 
})