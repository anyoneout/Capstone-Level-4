import { Account } from "../../types/Account";
import { createDynamoUser } from "./createDynamoUser";
import { deleteDynamoUser } from "./deleteDynamoUser";

describe("deleteDynamoUser", () => {
  const testingUser: Account = {
    email: "test@user.com",
    password: "testPassword",
    name: "testUserName",
    phone: "1234567",
  };

  it("should delete a valid user that exists", async () => {
    //ARRANGE
    //I needed a away to have it create a user for testing
    await createDynamoUser(testingUser);
    //ACT
    const result = await deleteDynamoUser(testingUser.email);
    //ASSERT
    expect(result).not.toBeUndefined();
  });

  it("returns undefined if email is empty", async () => {
    //ARRANGE
    const email = "";
    //ACT
    const result = await deleteDynamoUser(email);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if the email is not in the list", async () => {
    //ARRANGE
    const email = "inccorect@email.com";
    //ACT
    const result = await deleteDynamoUser(email);
    //ASSERT
    expect(result.Attributes).toBeUndefined();
  });

  it("returns undefined if the email is an object", async () => {
    //ARRANGE
    const email: any = {};
    //ACT
    const result = await deleteDynamoUser(email);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if the email is null", async () => {
    //ARRANGE
    const email = null as any;
    //ACT
    const result = await deleteDynamoUser(email);
    //ASSERT
    expect(result).toBeUndefined();
  });
});
