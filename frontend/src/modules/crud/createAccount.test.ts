import { createAccount } from "./createAccount";
import { Account } from "../../types/Account";
import dotenv from "dotenv";
dotenv.config();

describe("createAccount", () => {
  it("returns 400 if the email is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "",
      password: "testPassword",
      name: "testName",
      phone: "1231231234",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 400 if the password is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "test@email.com",
      password: "",
      name: "testName",
      phone: "1231231234",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 400 if the name is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "test@email.com",
      password: "testPassword",
      name: "",
      phone: "1231231234",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 400 if the phone is missing", async () => {
    //ARRANGE
    const testUser: Account = {
      email: "test@email.com",
      password: "testPassword",
      name: "testName",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createAccount(testUser);
    //ASSERT
    expect(result.status).toBe(400);
  });

  it("returns 409 if the user that's being created, already exists", async () => {
    //ARRANGE
    const validUser: Account = {
      email: "test@email.com",
      password: "testPassword",
      name: "testName",
      phone: "1231231234",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createAccount(validUser);
    //ASSERT
    expect(result.status).toBe(409);
  });
});
