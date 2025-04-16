import { getDynamoAuth } from "./getDynamoAuth";

describe("dynamoAuth", () => {
  it("returns true for correct email and password", async () => {
    // ARRANGE
    const email = "aaa@aaa.com";
    const password = "aaa";

    // ACT
    const result = await getDynamoAuth(email, password);

    // ASSERT
    expect(result).toBe(true);
  });

  it("returns false for an incorrect password", async () => {
    const email = "aaa@aaa.com";
    const password = "wrongPassword";

    const result = await getDynamoAuth(email, password);
    expect(result).toBe(false);
  });

  it("returns false for an unknown user", async () => {
    const email = "nonUser@email.com";
    const password = "aaa";

    const result = await getDynamoAuth(email, password);
    expect(result).toBe(false);
  });
});
