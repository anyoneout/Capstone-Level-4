import { Account } from "../../routes/types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function createDynamoUser(account: Account): Promise<Account | undefined> {
  const { email, password, name, phone, hfToken, oaToken } = account;
  if (!email || !password || !name || !phone || !hfToken || !oaToken) {
    return undefined;
  }

  const niceClient = getDynamoNiceClient();

  //get request to check if user already exists so as to not overwrite password on accidental create user attempt
  const existingUserCheck = {
    TableName: "userAccount",
    Key: { email },
  };

  const existingUserResponse = await niceClient.get(existingUserCheck);

  if (existingUserResponse.Item) {
    return undefined;
  }

  //fetch request user parameters
  const newLogin = {
    TableName: "userAccount",
    Item: {
      email: email,
      password: password,
      name: name,
      phone: phone,
      hfToken: hfToken,
      oaToken: oaToken,
    },
  };
  // todo check status if it's 200 then return account
  //create user
  const response = await niceClient.put(newLogin);
  return account;
}
