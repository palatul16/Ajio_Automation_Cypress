Feature:to validate and verify Ajio ecommerce
    Background: Ajio
        Given openbrowser and navigate website
        When  verify search bar
        And  validate search by product
        And verify filter by name
        Then validate filter by name



    Scenario: Adding the product to the wishlist/ favorites
        When  verify favorites
        And click favorites
        Then verify ui chage on favorites after click