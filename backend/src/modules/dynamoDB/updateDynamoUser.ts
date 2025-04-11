import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function updateDynamoUser(email: string, password: string): Promise<any> {
  if (!email || !password) {
    return undefined;
  }

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
