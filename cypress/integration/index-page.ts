describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  it("should have a title", () => {
    cy.get('[data-test="title"]').should("have.text", "Recepttitle");
  });
});

export {};
