class HomePage
{

getEditBox()   
{     
    return cy.get('form input[name="name"]')
}
getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-pristine')
}
getGender()
{
    return cy.get('select')
}
getEnterprenur()
{
    return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage;