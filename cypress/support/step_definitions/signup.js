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
And("Put your Email", () => {
  cy.xpath("//input[contains(@name,'username')]").type(
    "sukhmani.dev006@gmail.com"
  );
});
And("Click Continue", () => {
  cy.xpath("//input[@value='Continue']").click();
});
And("Put required info in the input fields", () => {
    cy.get(".gender-opt").contains("Female").find(".radio-gender").check({force: true}).should("be.checked");
    cy.xpath("//input[@placeholder='Name']").type("Sukhmani").should("have.value","Sukhmani");
    cy.xpath("//input[@placeholder='Mobile']").type("9896305896").should("have.value","9896305896");
    cy.xpath("//input[@id='pwdInput']").type("hello122#");
    cy.xpath("//input[@class='checkbox' and @type='checkbox']").check().should("be.checked");
    cy.get(':nth-child(17) > .login-form-inputs').contains("Send OTP").click()
    cy.wait(10000);

});
