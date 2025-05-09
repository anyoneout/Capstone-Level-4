import { Account } from "../../types/Account";
import { readDynamoUser } from "./readDynamoUser";

describe("readDynamoUser", () => {
  it("returns an email, password, name, and phone when given an existing email and password", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "aaa@aaa.com",
      password: "aaa",
      name: "",
      phone: "",
    };
    //ACT
    const result = await readDynamoUser(readUser);
    //ASSERT
    expect(result).toHaveProperty("email");
    expect(result).toHaveProperty("password");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("phone");
  });

  it("returns a result with the matching email", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "aaa@aaa.com",
      password: "aaa",
      name: "",
      phone: "",
    };
    //ACT
    const result = await readDynamoUser(readUser);
    //ASSERT
    expect(result.email).toBe(readUser.email);
  });
  it("doesn't return a result if the email is empty", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "",
      password: "",
      name: "",
      phone: "",
    };
    //ACT
    const result = await readDynamoUser(readUser);
    //ASSERT
    expect(result).toBeUndefined();
  });
  it("doesn't return a result if the password is empty", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "aaa@aaa.com",
      password: "",
      name: "",
      phone: "",
    };
    //ACT
    const result = await readDynamoUser(readUser);
    //ASSERT
    expect(result).toBeUndefined();
  });
  it("doesn't return a result if the password is incorrect", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "aaa@aaa.com",
      password: "bbb",
      name: "",
      phone: "",
    };
    //ACT
    const result = await readDynamoUser(readUser);
    //ASSERT
    expect(result).toBeUndefined();
  });
});
