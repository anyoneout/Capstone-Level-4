import { Account } from "../../routes/types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function readDynamoUser(account: Account): Promise<Account | undefined> {
  const { email, password, name, phone, hfToken, oaToken } = account;

  if (typeof email === "object") return undefined;
  if (!email || !password) return undefined;

  const niceClient = getDynamoNiceClient();

  const request = {
    TableName: "userAccount",
    Key: { email },
  };

  const response = await niceClient.get(request);
  const readResponse = response.Item as Account;

  if (!readResponse || readResponse.password !== password) {
    return undefined;
  }

  return readResponse;
}
