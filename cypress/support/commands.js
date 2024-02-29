// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import users from "../fixtures/users";
Cypress.Commands.add("createUser", (user) => {
  cy.request("POST", "/", user).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: "123",
    });
  });
});

Cypress.Commands.add("updateUser", (username, user) => {
  cy.request("PUT", `/${username}`, user).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: "1234",
    });
  });
});

Cypress.Commands.add("deleteUser", (username) => {
  cy.request("DELETE", `/${username}`).then((response) => {
    expect(response.status).to.eq(200);
  });
  cy.request({
    url: `/user/${username}`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  });
});