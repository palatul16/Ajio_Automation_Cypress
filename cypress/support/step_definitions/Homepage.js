/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Open Ajio in Browser", () => {
  cy.visit(
    "https://www.ajio.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfY_GFMiK1nkQ53050lTWJFg_yDnQgIScoLwEjvKcefzjzf5LkFBmUoaAtIkEALw_wcB"
  );
});
When("Verify the elements on the top menu bar", () => {
  cy.xpath("//a[@href='/']//img").should("be.visible");
  cy.xpath("//a[@title='WOMEN']").should("be.visible");
  cy.xpath("//a[@title='INDIE']").should("be.visible");
  cy.xpath("//a[@title='KIDS']").should("contain", "KIDS");
  cy.xpath("//input[@placeholder='Search AJIO']").should("be.visible");
  cy.xpath("//img[@alt='wishlistIcon']").should("be.visible");
  cy.xpath("//div[@class='ic-cart ']").should("be.visible");
});
And("Verify Men in menu", () => {
  cy.xpath("//a[@title='MEN']").should("contain", "MEN");
});
Then("click on Men", () => {
  cy.xpath("//a[@title='MEN']").click();
  cy.url().should("contain", "men");
});
