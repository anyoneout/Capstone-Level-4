import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";
import { readDynamoUser } from "./readDynamoUser";

//DynamoDB user authentication with AWS credentials
export async function updateDynamoUser(account: Account): Promise<number | undefined> {
  const { email, password, name, phone } = account;
  if (!email || !password) {
    return undefined;
  }

  //to check if the email already exists
  const existingUser = await readDynamoUser({ email, password, name: "", phone: "" });
  if (!existingUser || existingUser.password !== password) return undefined;

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
      name: {
        Value: name,
      },
      phone: {
        Value: phone,
      },
    },
  };

  //fetch request
  const response = await niceClient.update(request);
  const statusCode = response.$metadata?.httpStatusCode;
  return statusCode;
}
