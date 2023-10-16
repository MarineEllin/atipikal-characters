import {MD5} from "crypto-js";

describe("Check first request type", () => {

    const privateKey = "a023716308f5834888aad4c6bdb321c2a413d174";
    const publicKey = "ad03578d5d9923b867905c6485d3f738";
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