import { Request, Response } from "express";
import { createDynamoUser } from "../../modules/dynamoDB/createDynamoUser";
import { Account } from "../types/Account";

export async function createUserRoute(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await createDynamoUser(account);
  response.send(result);
}
