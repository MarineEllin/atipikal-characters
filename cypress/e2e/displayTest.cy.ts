describe("Should display my app : Header, Homepage, Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should find and display logo class in the Header", () => {
    cy.get(".logo").should("be.visible");
  });

  it("Should find and display homepageContainer class in the Hompegage", () => {
    cy.get(".homepageContainer").should("be.visible");
  });

  it("Should find and display droits réservés in Footer", () => {
    cy.get(".footer").should("be.visible");
  });

});