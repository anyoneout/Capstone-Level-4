import { Request, Response } from "express";
import { readDynamoUser } from "../../modules/dynamoDB/readDynamoUser";
import { Account } from "../types/Account";

export async function readUserRoute(request: Request, response: Response) {
  const readUser: Account = request.body;
  const result = await readDynamoUser(readUser);
  response.send(result);
}
