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
  And("click on with Password",()=>{
    cy.xpath("//input[@placeholder='Enter OTP']").should("have.attr","placeholder","Enter OTP");
    cy.xpath("//input[@value='START SHOPPING']").should("have.value","START SHOPPING");
    cy.xpath("//input[@value='LOGIN WITH PASSWORD']").should("have.value","LOGIN WITH PASSWORD").click({force: true});
    
  })

  And("Put Password",()=>{
    cy.xpath("//input[@id='pwdInput']").type("hello122#",{force: true});
    cy.xpath("(//label[@class='label-pwd'])[2]").should("have.text"," Enter captcha");
    cy.wait(15000);
})
  Then("Click on Start shopping",()=>{

cy.xpath("//input[contains(@value,'START SHOPPING')]").click();
  })