describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  it("should have a recipe", () => {
    const button = cy.get('[data-testid="recipebutton"]').first();
    button.should("have.text", "Världens bästa våfflor");
  });

  it("should be accessible", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});

export {};
