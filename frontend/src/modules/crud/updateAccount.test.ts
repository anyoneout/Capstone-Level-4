import { Account } from "../../types/Account";
import { updateAccount } from "./updateAccount";
import { randomStringGenerator } from "../../utilities/randomStringGenerator";
import dotenv from "dotenv";
dotenv.config();

describe("updateAccount", () => {
  it("returns 400 if the email is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "",
      password: "testPassword",
      name: "",
      phone: "",
    };
    //ACT
    const result = await updateAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
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
    const result = await updateAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 404 if the user that's being updated, doesn't exist; to avoid creating a new user", async () => {
    //ARRANGE
    const invalidUser: Account = {
      email: "nonexistent@email.com",
      password: "testPassword",
      name: "",
      phone: "",
    };
    //ACT
    const result = await updateAccount(invalidUser);
    //ASSERT
    expect(result.status).toBe(404);
  });

  it("returns 200 when a valid user's password is updated successfully", async () => {
    //ARRANGE
    //I wanted a way to have the password be reusable so I found this random string generator to use for the successful test and made a utility out of it.
    const randomPassword = randomStringGenerator();

    const validUser: Account = {
      email: "existingUser@email.com",
      password: randomPassword,
      name: "",
      phone: "",
    };
    //ACT
    const result = await updateAccount(validUser);
    //ASSERT
    expect(result.status).toBe(200);
  });

  //I had a really hard time thinking of a 5th test for updateAccount
  it("returns 200 when a valid user updates their password with special characters", async () => {
    //ARRANGE
    const validUser: Account = {
      email: "existingUser@email.com",
      password: "P@$$w0rd!",
      name: "",
      phone: "",
    };
    //ACT
    const result = await updateAccount(validUser);
    //ASSERT
    expect(result.status).toBe(200);
  });
});
