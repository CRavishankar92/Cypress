/// <reference types="Cypress" />


import HomePage from '../../support/PageObjects/HomePage';
import ProductPage from '../../support/PageObjects/ProductPage';
 
describe('Framework Test Suite', function() {
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data){
            this.data =data //Global data declaration
        })
      })
it('Framework test case',function() {

    const homePage =new HomePage() //Objecte creation for the imported file
    const productPage=new ProductPage()

    cy.visit(Cypress.env('url')+'/angularpractice')

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEnterprenur().should('be.disabled')
    //cy.pause()
    homePage.getShopTab().click()
    
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    
    })
    productPage.getCheckoutButton().click()

    var sum =0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        //cy.log($el.text())
        const amount = $el.text()
        var res = amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
        
    }).then(function()
    {

        cy.log(sum)
    })
    cy.get('h3 strong').then(function(total)
    {
        const amount= total.text()
        var res =amount.split(" ")
        total=res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
    

    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){

        const actualText=element.text()
        expect(actualText.includes("Success!")).to.be.true
        
    })

}) 
})