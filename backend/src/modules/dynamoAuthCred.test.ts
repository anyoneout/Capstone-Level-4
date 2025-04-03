import { dynamoAuthCred } from "./dynamoAuthCred";

let successResult: boolean;
let wrongPasswordResult: boolean;
let noUserResult: boolean;

beforeAll(async () => {
  successResult = await dynamoAuthCred("aaa@aaa.com", "aaa");
  wrongPasswordResult = await dynamoAuthCred("aaa@aaa.com", "wrongPassword");
  noUserResult = await dynamoAuthCred("nonUser@email.com", "aaa");
});

describe("dynamoAuth", () => {
  it("returns true for correct email and password", () => {
    expect(successResult).toBe(true);
  });

  it("returns false for an incorrect password", () => {
    expect(wrongPasswordResult).toBe(false);
  });

  it("returns false for an unknown user", () => {
    expect(noUserResult).toBe(false);
  });
});
