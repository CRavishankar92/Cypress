/// <reference types="Cypress" />

describe('My Second test suite', function(){
    it('My Second test case', function(){

        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Parent Child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
        const vegText =$e1.find('h4.product-name').text()
        if (vegText.includes('Cashews')){
            $e1.find('button').click()
        }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        //cy.get('.cart-preview > .action-block > button').click()
        //cy.get(':nth-child(14)').click()
        cy.contains('Place Order').click()
        
    })
})