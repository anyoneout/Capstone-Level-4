import { Account } from "../../types/Account";
import { createDynamoUser } from "./createDynamoUser";
import { updateDynamoUser } from "./updateDynamoUser";

describe("readDynamoUser", () => {
  const testUser: Account = {
    email: "testUser@gmail.com",
    password: "testPassword",
    name: "testName",
    phone: "1234567",
  };

  it("updates the user password when given a valid user and password", async () => {
    //ARRANGE
    await createDynamoUser(testUser);

    //ACT
    const result = await updateDynamoUser(testUser.email, "passwordChange");

    //ASSERT
    expect(result).not.toBeUndefined();
  });

  it("returns undefined when the email is missing", async () => {
    //ACT
    const result = await updateDynamoUser("", "randomPassword");

    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined when the password is missing", async () => {
    //ACT
    const result = await updateDynamoUser("testUser@gmail.com", "");

    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined when both email and password are missing", async () => {
    //ACT
    const result = await updateDynamoUser("", "");

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when email is not in the database", async () => {
    //ACT
    const result = await updateDynamoUser("emailnotindatabase@gmail.com", "testPassword");

    //ASSERT
    expect(result).toBeUndefined();
  });
});
