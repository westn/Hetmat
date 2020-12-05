describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000/varldens-basta-vafflor`);
    cy.visit("/varldens-basta-vafflor");
  });

  it("should be accessible", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});

export {};
