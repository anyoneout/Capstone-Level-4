import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";
import { readDynamoUser } from "./readDynamoUser";

//DynamoDB user authentication with AWS credentials
export async function updateDynamoUser(email: string, password: string): Promise<any> {
  if (!email || !password) {
    return undefined;
  }

  //to check if the email already exists
  const existingUser = await readDynamoUser(email);
  if (!existingUser) return undefined;

  const niceClient = getDynamoNiceClient();

  const request = {
    TableName: "login",
    Key: {
      email: email,
    },
    AttributeUpdates: {
      password: {
        Value: password,
      },
    },
  };

  //fetch request
  const result = await niceClient.update(request);
  return result;
}
