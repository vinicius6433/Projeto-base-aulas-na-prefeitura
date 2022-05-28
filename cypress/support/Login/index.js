const el = require("./elements").ELEMENTS;
class Login{
    login(){
      let usuario = 'standard_user'
      cy.log("Realizando Login")
      cy.visit("")
      
      // dados a serem escritos no txt
      // cy.novosDadosCasoTXT("Usuario")
      // passando o campo nome com os dados que serão tirados do txt
      // cy.escreverDadosCasoTXT(el.nome)

      cy.get(el.nome).type(`${usuario}`)
      cy.get(el.senha).type('secret_sauce')
      cy.get(el.btnEntrar).click()
      cy.get('.title').should('have.text', "Products")
      cy.get('.title').should('to.exist')
      cy.wait(1000).contains('$15.99').should('to.exist')

    }
}
export default new Login();
