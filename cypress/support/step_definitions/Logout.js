/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Open Ajio Website in the Browser", () => {
  cy.visit(
    "https://www.ajio.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfY_GFMiK1nkQ53050lTWJFg_yDnQgIScoLwEjvKcefzjzf5LkFBmUoaAtIkEALw_wcB"
  );
});
When("Click on signUp button", () => {
  cy.xpath("//span[normalize-space()='Sign In / Join AJIO']")
    .should("contain.text", "Sign In / Join AJIO")
    .click();
});
And("Login to your account", () => {
  cy.xpath("//input[contains(@name,'username')]").type(
    "sukhmani.dev006@gmail.com"
  );
  cy.xpath("//input[@value='Continue']").click();
  cy.xpath("//input[@placeholder='Enter OTP']").should(
    "have.attr",
    "placeholder",
    "Enter OTP"
  );
  cy.xpath("//input[@value='START SHOPPING']").should(
    "have.value",
    "START SHOPPING"
  );
  cy.xpath("//input[@value='LOGIN WITH PASSWORD']")
    .should("have.value", "LOGIN WITH PASSWORD")
    .click({ force: true });
  cy.xpath("//input[@id='pwdInput']").type("hello122#", { force: true });
  cy.xpath("(//label[@class='label-pwd'])[2]").should(
    "have.text",
    " Enter captcha"
  );
  cy.wait(15000);
  cy.xpath("//input[contains(@value,'START SHOPPING')]").click();
  cy.xpath("//span[@class='ignore-sentence-case']")
    .should("be.visible")
    .and("have.text", "Sukhmani");
});

Then("logout and get back to homepage", () => {
  cy.get(".guest-header > ul > :nth-child(3)")
    .should("be.visible")
    .click({ force: true });
  cy.url().should("include", "ajio");
});
