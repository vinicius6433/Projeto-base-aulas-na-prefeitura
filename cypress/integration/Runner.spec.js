/// <reference types="cypress" />

import Login from "../support/login"


describe('Testes gerais', () => {
  beforeEach(() => {
  })

  it("login",()=>{
      Login.login()
      
  })
})
