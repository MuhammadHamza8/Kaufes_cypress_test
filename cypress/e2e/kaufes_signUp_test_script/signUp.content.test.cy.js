import { slowCypressDown } from "cypress-slow-down"
slowCypressDown(500);

/// <reference types="cypress" />
describe('SignUp Scenerio Testing', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // cy.visit('https://staging.kaufes.ch/login');
    
       cy.visit('https://staging.kaufes.ch/register');
     
    })


    it('verifying Create Account text ', () => {

       cy.contains('Create Account').should('exist');

      })

      it('verifying  Join free! Please enter your details text ', () => {

        cy.contains('Join free! Please enter your details').should('exist');
 
       })
 
       it('verifying  Already have an account ? text ', () => {

        cy.contains('Already have an account ? ').should('exist');
 
       })





})