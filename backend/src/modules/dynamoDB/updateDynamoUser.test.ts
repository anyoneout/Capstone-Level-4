import { Account } from "../../types/Account";
import { createDynamoUser } from "./createDynamoUser";
import { deleteDynamoUser } from "./deleteDynamoUser";
import { updateDynamoUser } from "./updateDynamoUser";

describe("readDynamoUser", () => {
  const testUser: Account = {
    email: "testUser@gmail.com",
    password: "testPassword",
    name: "testName",
    phone: "1234567",
  };

  it("returns a status code of 200 when when given a valid user and password to update the name", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "testUser@gmail.com",
      password: "testPassword",
      name: "testName",
      phone: "1234567",
    };
    const updatedUser: Account = {
      email: "testUser@gmail.com",
      password: "testPassword",
      name: "newName",
      phone: "1234567",
    };
    await createDynamoUser(testUser);

    //ACT
    const result = await updateDynamoUser(updatedUser);

    //ASSERT
    expect(result).toBe(200);
    await deleteDynamoUser(updatedUser);
  });

  it("returns undefined when the email is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "",
      password: "testPassword",
      name: "testName",
      phone: "1234567",
    };

    //ACT
    const result = await updateDynamoUser(testUser);

    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined when the password is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "testUser@gmail.com",
      password: "",
      name: "testName",
      phone: "1234567",
    };

    //ACT
    const result = await updateDynamoUser(testUser);

    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined when email is not in the database", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "emailNotInDatabase@gmail.com",
      password: "testPassword",
      name: "testName",
      phone: "1234567",
    };
    //ACT
    const result = await updateDynamoUser(testUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when password is not in the database", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "testUser",
      password: "passwordNotInDatabase",
      name: "testName",
      phone: "1234567",
    };
    //ACT
    const result = await updateDynamoUser(testUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
});
