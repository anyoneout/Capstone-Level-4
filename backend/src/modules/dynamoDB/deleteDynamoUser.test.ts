import { Account } from "../../types/Account";
import { createDynamoUser } from "./createDynamoUser";
import { deleteDynamoUser } from "./deleteDynamoUser";

describe("deleteDynamoUser", () => {
  it("should delete a valid user that exists and return a status code of 200", async () => {
    //ARRANGE
    const testingUser: Account = {
      email: "test@user.com",
      password: "testPassword",
      name: "testUserName",
      phone: "1234567",
      hfToken: "",
      oaToken: "",
    };

    await createDynamoUser(testingUser);
    //ACT
    const result = await deleteDynamoUser(testingUser);
    //ASSERT
    expect(result).toBe(200);
  });

  it("returns undefined if email is empty", async () => {
    //ARRANGE
    const testingUser: Account = {
      email: "",
      password: "aaa",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await deleteDynamoUser(testingUser);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if password is empty", async () => {
    //ARRANGE
    const testingUser: Account = {
      email: "aaa@aaa.com",
      password: "",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await deleteDynamoUser(testingUser);
    //ASSERT
    expect(result).toBeUndefined();
  });
  // Since the delete request doesn't return the account item I need to add a read request first to compare it before I activate these tests
  it.skip("returns undefined if the email is not in the list", async () => {
    //ARRANGE
    const testingUser: Account = {
      email: "wrong@email.com",
      password: "aaa",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await deleteDynamoUser(testingUser);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it.skip("returns undefined if the password is incorrect", async () => {
    //ARRANGE
    const testingUser: Account = {
      email: "aaa@aaa.com",
      password: "wrongPassword",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await deleteDynamoUser(testingUser);
    //ASSERT
    expect(result).toBeUndefined();
  });
});
