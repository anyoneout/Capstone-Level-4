import { Account } from "../../types/Account";
import { getDynamoNiceClient } from "./getDynamoNiceClient";

//DynamoDB user authentication with AWS credentials
export async function deleteDynamoUser(email: string): Promise<any> {
  if (typeof email === "object") return undefined;
  if (!email) return undefined;

  const niceClient = getDynamoNiceClient();

  const request = {
    TableName: "login",
    Key: { email },
  };

  const response = await niceClient.delete(request);
  return response;
}
