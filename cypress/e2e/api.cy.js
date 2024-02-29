import users from "../fixtures/users";

describe("API test", () => {
  it("Should create user", () => {
    cy.createUser(users.user);
    });

  it("Should update user", () => {
    cy.createUser(users.user);
    cy.updateUser(users.user.username, users.userUpdate);
  });

  it("Should delete user", () => {
    cy.createUser(users.user);
    cy.deleteUser(users.user.username);
  });
});