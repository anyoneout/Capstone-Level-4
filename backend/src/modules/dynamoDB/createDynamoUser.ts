import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function createDynamoUser(newUser: Account): Promise<Account | undefined> {
  const { email, password, name, phone } = newUser;
  if (!email || !password || !name || !phone) {
    return undefined;
  }

  const niceClient = getDynamoNiceClient();
  //fetch request user parameters
  const newLogin = {
    TableName: "login",
    Item: {
      email: email,
      password: password,
      name: name,
      phone: phone,
    },
  };

  //fetch request
  const response = await niceClient.put(newLogin);
  console.log("backend create user response", response);
  return {
    email,
    password,
    name,
    phone,
  };
}
