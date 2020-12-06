describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  it("should have a recipe", () => {
    const button = cy.get('[data-test="recipebutton"]').first();
    button.should("have.text", "Världens bästa våfflor");
  });

  it("should be accessible", () => {
    cy.injectAxe();
    cy.checkA11y(undefined, {
      runOnly: {
        type: "tag",
        values: ["wcag21a", "wcag21aa"],
      },
    });
  });
});

export {};
