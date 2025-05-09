import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function readDynamoUser(readUser: Account): Promise<Account | undefined> {
  const { email, password, name, phone } = readUser;

  if (typeof email === "object") return undefined;
  if (!email || !password) return undefined;

  const niceClient = getDynamoNiceClient();

  const request = {
    TableName: "login",
    Key: { email },
  };

  const response = await niceClient.get(request);
  const readResponse = response.Item as Account;
  console.log("backend read user response", readResponse);

  if (!readResponse || readResponse.password !== password) {
    return undefined;
  }

  return readResponse;
}
