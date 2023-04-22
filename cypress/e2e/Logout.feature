Feature: Logout of AJIO
    Background: AJIO
        Given Open Ajio Website in the Browser
        When Click on signUp button
        And Login to your account
    Scenario: Successful Logout
        Then logout and get back to homepage