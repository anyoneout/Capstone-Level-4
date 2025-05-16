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
      hfToken: "",
      oaToken: "",
    };

    //ACT
    const result = await readAccount(withoutEmailUser);

    //ASSERT
    if ("status" in result) {
      expect(result.status).toBe(400);
    } else {
      fail("expected status 400 but received an object");
    }
  });

  it("returns 404 if the user does not exist", async () => {
    //ARRANGE
    const userThatDoesNotExist: Account = {
      email: "emailThatDoesntExist@email.com",
      password: "test",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };

    //ACT
    const result = await readAccount(userThatDoesNotExist);

    //ASSERT
    if ("status" in result) {
      expect(result.status).toBe(404);
    } else {
      fail("expected status 404 but received an object");
    }
  });

  it("returns 200 if the email exists", async () => {
    //ARRANGE
    const existingUser: Account = {
      email: "test@email.com",
      password: "testPassword",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };

    //ACT
    const result = await readAccount(existingUser);

    //ASSERT
    if ("status" in result) {
      fail("expected an object but received a status code");
    } else {
      expect(result.email).toBe("test@email.com");
    }
  });

  it("returns 400 for an invalid email format", async () => {
    const invalidEmailFormatUser: Account = {
      email: "emailWithoutAtSymbol",
      password: "",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };

    //ACT
    const result = await readAccount(invalidEmailFormatUser);

    //ASSERT
    if ("status" in result) {
      expect(result.status).toBe(400);
    } else {
      fail("expected status 400 but received an object");
    }
  });

  it("returns 400 if the email is only blank spaces", async () => {
    // ARRANGE
    const blankSpacesEmailUser: Account = {
      email: "   ",
      password: "",
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    };

    // ACT
    const result = await readAccount(blankSpacesEmailUser);

    // ASSERT
    if ("status" in result) {
      expect(result.status).toBe(400);
    } else {
      fail("expected status 400 but received an object");
    }
  });
});
