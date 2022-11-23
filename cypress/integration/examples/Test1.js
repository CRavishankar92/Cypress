/// <reference types="Cypress" />

describe('My first test suite', function(){
    it('My first test case', function(){

        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Selenium get is used to hit url in browser, cypress get acts like a findElement of Selenium
        cy.get('.product:visible').should('have.length',4)
        //Parent Child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })
        
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

        const vegText =$e1.find('h4.product-name').text()
        if (vegText.includes('Cashews')){
            $e1.find('button').click()
        }
        })
        //Assert if logo text is displayed correct
        cy.get('.brand').should('have.text','GREENKART')
        //Print in test runner logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })
})