Feature: Mens page of Ajio
   Background: AJIO
      Given Open Ajio in Browser
   Scenario: Verifying the contents of the Mens page
      When click on men
      And verify the carousel on the page
      And Verify the different sections on the page when you scroll
      Then Log all sections to the console