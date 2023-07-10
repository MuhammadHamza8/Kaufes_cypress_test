// import { slowCypressDown } from "cypress-slow-down"
// slowCypressDown(500);

// /// <reference types="cypress" />
// describe('SignUp Scenerio Testing', () => {
//     beforeEach(() => {
//       // Cypress starts out with a blank slate for each test
//       // so we must tell it to visit our website with the `cy.visit()` command.
//       // Since we want to visit the same URL at the start of all our tests,
//       // we include it in our beforeEach function so that it runs before each test
//       // cy.visit('https://staging.kaufes.ch/login');
    
//        cy.visit('https://staging.kaufes.ch/register');
     
//     })



        
// // it('when user enter  valid   details', () => {

// //   cy.get('.auth_loginEmail__mbqwA').type('bergeremily48@gmail.com');
// //   cy.get(':nth-child(4) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
// //   cy.get(':nth-child(5) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
  
// //   cy.get('.btn').click();

  
// // })



// it('when user try to register with already exiting details ', () => {
  
//   cy.get('.auth_loginEmail__mbqwA').type('hamzaicp54@gmail.com');
//   cy.get(':nth-child(4) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
//   cy.get(':nth-child(5) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
//   cy.get('.btn').click();
//   cy.contains('user with this email already exists').should('exist');
  
// })



    
// it('when user try to  rigester without enter any details', () => {
  
//   cy.get('.btn').click();
//   cy.contains('This is required field ').should('exist');
  
// })


// it('when user enter  valid details in email field and leave password field empty', () => {
//   cy.get('.auth_loginEmail__mbqwA').type('hamzaicp54@gmail.com');
//   cy.get('.btn').click();

//   cy.contains('This is required field ').should('exist');
  
// })

// it('when user enter valid details in password field and leave email field empty ', () => {
//   cy.get(':nth-child(4) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
//   cy.get(':nth-child(5) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
//   cy.get('.btn').click();
//   cy.contains('This is required field ').should('exist');
  
// })

    
        
// it('when user enter invaild details in email and valid details in password ', () => {

//   cy.get('.auth_loginEmail__mbqwA').type('bergeremily48');
//   cy.get(':nth-child(4) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
//   cy.get(':nth-child(5) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1@');
  
//   cy.get('.btn').click();
//   cy.contains('Please enter a valid email').should('exist');

  
// })


// it('when user enter vaild details in email and invalid details in password ', () => {

//   cy.get('.auth_loginEmail__mbqwA').type('bergeremily48@gmail.com');
//   cy.get(':nth-child(4) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash');
//   cy.get(':nth-child(5) > .col-12 > .auth_loginPassword__M3FjG').type('Hamzanaqash1');
  
//   cy.get('.btn').click();
//   cy.contains('Passwords must match').should('exist');

  
// })






// })

