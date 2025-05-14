import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function deleteDynamoUser(deleteUser: Account): Promise<number | undefined> {
  const { email, password, name, phone } = deleteUser;

  if (typeof email === "object") return undefined;
  if (!email || !password) return undefined;

  const niceClient = getDynamoNiceClient();

  const request = {
    TableName: "login",
    Key: { email },
    AttributeUpdates: {
      password: {
        Value: password,
      },
    },
  };

  const response = await niceClient.delete(request);
  const statusCode = response.$metadata?.httpStatusCode;
  return statusCode;
}
