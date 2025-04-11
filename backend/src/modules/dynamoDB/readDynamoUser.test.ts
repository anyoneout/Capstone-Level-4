import { readDynamoUser } from "./readDynamoUser";

describe("readDynamoUser", () => {
  it("returns an email, password, name, and phone when given an existing email", async () => {
    //ARRANGE
    const email = "aaa@aaa.com";
    //ACT
    const result = await readDynamoUser(email);
    //ASSERT
    expect(result).toHaveProperty("email");
    expect(result).toHaveProperty("password");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("phone");
  });

  it("returns a result with the matching email", async () => {
    //ARRANGE
    const email = "bbb@bbb.com";
    //ACT
    const result = await readDynamoUser(email);
    //ASSERT
    expect(result.email).toBe(email);
  });
  it("doesn't return a result if the email is not in the list", async () => {
    //ARRANGE
    const email = "";
    //ACT
    const result = await readDynamoUser(email);
    //ASSERT
    expect(result).toBe(undefined);
  });
  it("doesn't return a result if the email is an object", async () => {
    //ARRANGE
    const email: any = {};
    //ACT
    const result = await readDynamoUser(email);
    //ASSERT
    expect(result).toBe(undefined);
  });
  it("doesn't return a result if the email is incorrect", async () => {
    //ARRANGE
    const email = "wrong@email.com";
    //ACT
    const result = await readDynamoUser(email);
    //ASSERT
    expect(result).toBe(undefined);
  });
});
