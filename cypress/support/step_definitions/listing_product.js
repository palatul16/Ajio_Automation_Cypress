import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

Given("openbrowser and navigate website", () => {
    cy.visit(
        "https://www.ajio.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfY_GFMiK1nkQ53050lTWJFg_yDnQgIScoLwEjvKcefzjzf5LkFBmUoaAtIkEALw_wcB"
    );
    cy.xpath("//span[normalize-space()='Sign In / Join AJIO']")
        .should("contain.text", "Sign In / Join AJIO")
        .click();
    cy.xpath("//input[contains(@name,'username')]").type(
        "pjaydip460@gmail.com"
    );
    cy.xpath("//input[@value='Continue']").click();
    cy.wait(60000)
    cy.xpath("//input[contains(@value,'START SHOPPING')]").click();

})

When("verify search bar", () => {
    cy.get("input[placeholder='Search AJIO']").invoke('attr', 'placeholder').should('eq', 'Search AJIO')
})

And("validate search by product", () => {
    cy.wait(5000)
    cy.get("input[placeholder='Search AJIO']").type("Marvel Comics{enter}")
})
And("verify filter by name", () => {
    cy.get("label[for='Men']").invoke('attr', 'for').should('eq', 'Men')

})
Then("validate filter by name", () => {
    cy.get('#Men').check({ force: true })

})

When("open 1st product varify", () => {
    cy.get(".item").eq(0).should("exist")
})

And("open 1st product validate", () => {
    cy.get(".item").eq(0).find("a[href='/free-authority-men-marvel-comics-snapback-cap/p/465075481_green']").invoke('removeAttr', 'target').click()
})
And("verify productname", () => {
    cy.get(".prod-name").should('have.text', 'Men Marvel Comics Snapback Cap')
})
And("verify productprice", () => {
    cy.get(".prod-sp").should('have.text', '₹699')
})
And("verify productsize", () => {
    cy.get(".circle ").should('have.text', 'FS')
})
And("verify add to bag", () => {
    cy.get(".btn-gold").should('have.text', 'ADD TO BAG')
})
And("verify wishlist", () => {
    cy.get(".pdp-wishlist-desktop-icon").should('have.text', 'SAVE TO WISHLIST')
})
And("productdetails", () => {
    cy.get(".prod-heading").should('have.text', 'Product Details')
    cy.get(".detail-list").eq(0).should('have.text', 'Package contains: 1 cap')
    cy.get(".detail-list").eq(1).should('have.text', 'Cotton')
    cy.get(".detail-list").eq(2).should('have.text', 'Product Code: 465075481001')
    cy.get(".detail-list").eq(3).should('have.text', 'About Free Authority')
})
And("getproductname", () => {
    let a = cy.get(".prod-name").then((jd) => {
        const a = jd.text()
        cy.log(a)
    })

})
And("getproductprice", () => {
    let a = cy.get(".prod-sp").then((jd) => {
        const a = jd.text()
        cy.log(a)
    })

})
And("getproductsize", () => {
    let a = cy.get(".circle ").then((jd) => {
        const a = jd.text()
        cy.log(a)
    })

})
Then("getproductdetail", () => {
    let a = cy.get(".prod-heading").then((jd) => {
        const a = jd.text()
        cy.log(a)
    })
    let b = cy.get(".detail-list").eq(0).then((jd1) => {
        const b = jd1.text()
        cy.log(b)
    })
    let c = cy.get(".detail-list").eq(1).then((jd2) => {
        const c = jd2.text()
        cy.log(c)
    })
    let d = cy.get(".detail-list").eq(2).then((jd3) => {
        const d = jd3.text()
        cy.log(d)
    })
    let e = cy.get(".detail-list").eq(3).then((jd4) => {
        const e = jd4.text()
        cy.log(e)
    })

})