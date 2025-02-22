/// <reference types="cypress" />​

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open demoblaze website', function () {
cy.visit("https://www.demoblaze.com/");
cy.viewport(1800, 1000)
})

// Scenario: verify that the signUp page is accessible
When('I click the signUp button', function () {
cy.get('#signin2').click()
cy.wait(2000)
})
Then('I verify that the signUp page is displayed', function () {
cy.get("#sign-username").then($button => {

$button.is(':visible') ? console.log('Username box is visible') : console.log('Username box is invisible')

})
cy.get("#sign-password").then($button => {
$button.is(':visible') ? console.log('Password box is visible') : console.log('Password box is invisible')
})
cy.get("button[onclick='logIn()']").then($button => {
$button.is(':visible') ? console.log('signUp box is visible') : console.log('signUp box is invisible')
})
})

// Scenario: verify successful signUp with valid username and password
When('I enter valid signUp details', function () {
let Username = "a2sat";
let Password = "Cypressgocry"
cy.get('#sign-username').type(Username + Cypress._.random(0, 1e6))
cy.get('#sign-password').type(Password)
cy.get("button[onclick='register()']").click()
})

Then('verify successful registration', function () {
cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Sign up successful');
    console.log('Alert is visible:', alertText) ; console.log('Alert is invisible:', alertText);
    })
})

// Add the missing step definition for "I enter signUp details"
When("I enter signUp details", () => {
    cy.get("#sign-username").clear(); // No username entered
    cy.get("#sign-password").type("Cypressgocry");
    cy.get("button[onclick='register()']").click();
  });
  
// Scenario: verify signUp without username leads to unsuccessful registration
Then('verify unsuccessful registration', function () {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('Please fill out Username and Password');
        console.log('Alert is visible:', alertText) ; console.log('Alert is invisible:', alertText);
        })
    })