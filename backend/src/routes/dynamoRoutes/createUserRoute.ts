import { Request, Response } from "express";
import { createDynamoUser } from "../../modules/dynamoDB/createDynamoUser";
import { Account } from "../../types/Account";

export async function createUserRoute(request: Request, response: Response) {
  const createUser: Account = request.body;

  const result = await createDynamoUser(createUser);
  response.send(result);
}
