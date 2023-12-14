describe("main", () => {
    it("User generate activity when cick button", () => {
        cy.visit("localhost:8080");

        cy.get("button").contains("Generate new one").click();

        cy.get("div.activity h4").should("exists");
        cy.get("div.activity a").should("exists");
        cy.get("div.activity p").should("exists");
    });
});
