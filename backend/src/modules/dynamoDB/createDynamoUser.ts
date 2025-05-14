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

  //get request to check if user already exists so as to not overwrite password on accidental create user attempt
  const existingUserCheck = {
    TableName: "login",
    Key: { email },
  };

  const existingUserResponse = await niceClient.get(existingUserCheck);

  if (existingUserResponse.Item) {
    return undefined;
  }

  //fetch request
  const response = await niceClient.put(newLogin);
  return {
    email,
    password,
    name,
    phone,
  };
}
