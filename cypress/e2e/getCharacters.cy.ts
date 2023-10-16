describe("Should call api", () => {
    const requestUrl = "http://gateway.marvel.com/v1/public/characters?**";    

    before(() => {
        cy.intercept(requestUrl, {fixture: "../fixtures/example.json"}).as("getCharacters");
        cy.visit("/");
         });
      
         it("First request should be of type GET ", () => {
          cy.wait('@getCharacters').its('request.method').should('equal', 'GET');
         })
  
  });