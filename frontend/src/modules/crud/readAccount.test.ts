import { Account } from "../../types/Account";
import { readAccount } from "./readAccount";
import dotenv from "dotenv";
dotenv.config();

describe("readAccount", () => {
  it("returns 400 if the email is missing", async () => {
    //ARRANGE
    const withoutEmailUser: Account = {
      email: "",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(withoutEmailUser);

    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 404 if the user does not exist", async () => {
    //ARRANGE
    const userThatDoesNotExist: Account = {
      email: "emailThatDoesntExist@email.com",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(userThatDoesNotExist);

    //ASSERT
    expect(result.status).toBe(404);
  });

  it("returns 200 if the email exists", async () => {
    //ARRANGE
    const existingUser: Account = {
      email: "test@email.com",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(existingUser);

    //ASSERT
    expect(result.status).toBe(200);
  });

  it("returns 400 for an invalid email format", async () => {
    const invalidEmailFormatUser: Account = {
      email: "emailWithoutAtSymbol",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(invalidEmailFormatUser);

    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 400 if the email is only blank spaces", async () => {
    // ARRANGE
    const blankSpacesEmailUser: Account = {
      email: "   ",
      password: "",
      name: "",
      phone: "",
    };

    // ACT
    const result = await readAccount(blankSpacesEmailUser);

    // ASSERT
    expect(result.status).toBe(400);
  });
});
