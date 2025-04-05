import { getDynamoAuth } from "./getDynamoAuth";

let successResult: boolean;
let wrongPasswordResult: boolean;
let noUserResult: boolean;

//beforeAll is being used to deal with multiple api calls in a short span being rejected
beforeAll(async () => {
  successResult = await getDynamoAuth("aaa@aaa.com", "aaa");
  wrongPasswordResult = await getDynamoAuth("aaa@aaa.com", "wrongPassword");
  noUserResult = await getDynamoAuth("nonUser@email.com", "aaa");
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
