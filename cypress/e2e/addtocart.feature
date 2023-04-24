Feature:to validate and verify Ajio ecommerce
    Background: Ajio
        Given openbrowser and navigate website
        When  verify search bar
        And  validate search by product
        And verify filter by name
        Then validate filter by name



    Scenario:Add the product to the cart
        When  add product into cart
        And   ui change on top of cart icon
        Then  UI change on the add to cart button as go to cart