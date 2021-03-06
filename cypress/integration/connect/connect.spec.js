/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe('connect to vault', () => {
  beforeEach(() => {
    try {
      cy.visit("https://dapp1213.kirobo.me");
    }catch(e) {
      console.log(e)
    }
  })});

describe('set metamask acc', () => {

  it('set metamsk acc', () => {
    cy.task('connectBrowser')
    cy.wait(5000)
    cy.task('setPages')
    cy.task('loginToMetamask', { password: '12344321' })
    cy.reload()
    cy.viewport('macbook-16')
  });
});
