import { Account } from "../../types/Account";
import { deleteAccount } from "./deleteAccount";
import { createAccount } from "./createAccount";
import dotenv from "dotenv";
dotenv.config();

describe("deleteAccount", () => {
  //ARRANGE
  it("returns 400 if the email is missing", async () => {
    const noEmailUser: Account = {
      email: "",
      password: "validPassword",
      name: "",
      phone: "",
    };
    //ACT
    const result = await deleteAccount(noEmailUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 400 if the email format is invalid", async () => {
    //ARRANGE
    const invalidEmailUser: Account = {
      email: "invalidEmail",
      password: "validPassword",
      name: "",
      phone: "",
    };
    //ACT
    const result = await deleteAccount(invalidEmailUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 404 if the user does not exist", async () => {
    //ARRANGE
    const doesNotExistUser: Account = {
      email: "doesNotExistUser@email.com",
      password: "validPassword",
      name: "",
      phone: "",
    };
    //ACT
    const result = await deleteAccount(doesNotExistUser);
    //ASSERT
    expect(result.status).toBe(404);
  });

  it("returns 200 if the user is successfully deleted", async () => {
    //ARRANGE
    //creates a test user to see if delete request works correctly
    const userCreated: Account = {
      email: "userToDelete@email.com",
      password: "tempPassword",
      name: "tempName",
      phone: "1231231234",
    };
    const deletedUser: Account = {
      email: "userToDelete@email.com",
      password: "tempPassword",
      name: "",
      phone: "",
    };
    //ACT
    await createAccount(userCreated);
    const result = await deleteAccount(deletedUser);
    //ASSERT
    expect(result.status).toBe(200);
  });

  it("returns 400 if the password is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "test@email.com",
      password: "",
      name: "",
      phone: "",
    };
    //ACT
    const result = await deleteAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });
});
