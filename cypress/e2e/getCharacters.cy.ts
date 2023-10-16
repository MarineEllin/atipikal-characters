import {MD5} from "crypto-js";

describe("Check first request type", () => {

    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const timestamp = new Date().getTime();
    const hash = MD5(`${timestamp}${privateKey}${publicKey}`);
    const url = "http://gateway.marvel.com/v1/public/characters?";
    
    const params = new URLSearchParams({
        apikey: publicKey,
        ts: String(timestamp),
        hash: hash.toString(),
        limit: "30",
    });
    
    const requestUrl = `${url}${params.toString()}`;

    before(() => {
    cy.intercept(requestUrl, {fixture: "example"}).as("getCharacters");
    cy.visit("/");
    
     });
  
     it("First request should be of type GET ", () => {
      cy.wait('@getCharacters').its('request.method').should('equal', 'GET');
     })
  
  });