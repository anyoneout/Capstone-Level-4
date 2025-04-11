import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function createDynamoUser(newUser: Account): Promise<any> {
  if (!newUser.email || !newUser.password || !newUser.name || !newUser.phone) {
    return undefined;
  }

  const niceClient = getDynamoNiceClient();
  //fetch request user parameters
  const newLogin = {
    TableName: "login",
    Item: {
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
      phone: newUser.phone,
    },
  };

  //fetch request
  const result = await niceClient.put(newLogin);
  return result;
}
