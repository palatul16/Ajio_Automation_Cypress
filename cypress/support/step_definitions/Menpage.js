/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Open Ajio in Browser", () => {
  cy.visit(
    "https://www.ajio.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfY_GFMiK1nkQ53050lTWJFg_yDnQgIScoLwEjvKcefzjzf5LkFBmUoaAtIkEALw_wcB"
  );
});
When("click on men", () => {
  cy.xpath("//a[@title='MEN']").click();
  cy.url().should("contain", "men");
});
And("verify the carousel on the page", () => {
  cy.xpath("(//div[@class='indicators'])[1]")
    .find(".each-slideshow-indicator")
    .each((el) => {
      cy.wrap(el).should("have.class", "false").click();
      //   cy.wrap(el, { timeout: 10000 }).should("have.class", "active");
    });
});
And("Verify the different sections on the page when you scroll", () => {
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "SpringIntoTheSeason");
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "SpringtimeBrands");
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "BloomingToday");
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[9]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "AJIOExclusives");
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[11]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "BuddingNewBrands");
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[13]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
  )
    .scrollIntoView()
    .invoke("attr", "src")
    .should("include", "PocketfullOfSunshine");
});
Then("Log all sections to the console", () => {
  for (let i = 3; i <= 13; i++) {
    if (i % 2 == 1) {
      cy.xpath(
        "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[" +
          i +
          "]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]"
      )
        .invoke("attr", "src")
        .then((el) => {
          // cy.wrap(el).invoke("attr","src");
          // el.text();
          cy.log(el);
        });
    }
  }
});
