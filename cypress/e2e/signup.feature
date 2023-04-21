Feature: SignUp of AJIO
    Background: AJIO
        Given Open Ajio Website in the Browser
        When Click on signUp button
        And Put your Email
        And Click Continue
    Scenario: Successful signup with valid Email
        And Put required info in the input fields
#     And Click on send OTP and signUp
#     Then User should be signed up successfully and redirected to the homepage

# Scenario: Unsuccessful signup with invalid details
#     Then User should see a error message that the Email Entered is not valid

