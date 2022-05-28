const el = require("./elements").ELEMENTS;
class Login{
    login(){
      let usuario = 'standard_user'
      cy.log("Realizando Login")
      cy.visit("")
      cy.get('[data-test="username"]').type(`${usuario}`)
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('.title').should('have.text', "Products")
      cy.get('.title').should('to.exist')
      cy.wait(1000).contains('$15.99').should('to.exist')

    }
}
export default new Login();
