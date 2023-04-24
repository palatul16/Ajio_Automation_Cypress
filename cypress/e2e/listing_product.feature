
Feature:to validate and verify Ajio ecommerce
    Background: Ajio
        Given openbrowser and navigate website
        When  verify search bar
        And  validate search by product
        And verify filter by name
        Then validate filter by name

    Scenario:Listing the product and filtering
        When  open 1st product varify
        And open 1st product validate
        And  verify productname
        And  verify productprice
        And verify productsize
        And verify add to bag
        And verify wishlist
        And productdetails
        And getproductname
        And getproductprice
        And getproductsize
        Then getproductdetail