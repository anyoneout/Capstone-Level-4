import { Account } from "../../types/Account";
import { createDynamoUser } from "./createDynamoUser";

describe("createDynamoUser", () => {
  it("returns undefined if the email is missing", async () => {
    //ARRANGE
    const userTest: Account = {
      email: "",
      password: "test",
      name: "test",
      phone: "test",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createDynamoUser(userTest);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if the password is missing", async () => {
    //ARRANGE
    const userTest: Account = {
      email: "test",
      password: "",
      name: "test",
      phone: "test",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createDynamoUser(userTest);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if the name is missing", async () => {
    //ARRANGE
    const userTest: Account = {
      email: "test",
      password: "test",
      name: "",
      phone: "test",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createDynamoUser(userTest);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("returns undefined if the phone is missing", async () => {
    //ARRANGE
    const userTest: Account = {
      email: "test",
      password: "test",
      name: "test",
      phone: "",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createDynamoUser(userTest);
    //ASSERT
    expect(result).toBeUndefined();
  });

  it("should not return undefined when all fields are filled out", async () => {
    //ARRANGE
    const userTest: Account = {
      email: "test",
      password: "test",
      name: "test",
      phone: "test",
      hfToken: "",
      oaToken: "",
    };
    //ACT
    const result = await createDynamoUser(userTest);
    //ASSERT
    expect(result).not.toBeUndefined();
  });
});
