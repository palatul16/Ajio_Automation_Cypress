Feature: Login of AJIO
    Background: AJIO
        Given Open Ajio Website in the Browser
        When Click on signUp button
        And Put your Email
        And Click Continue
    Scenario: Successful Login with valid Email
    And click on with Password
        And Put Password
        Then Click on Start shopping
        
        # Then user 