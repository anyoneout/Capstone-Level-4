import { Request, Response } from "express";
import { updateDynamoUser } from "../../modules/dynamoDB/updateDynamoUser";
import { Account } from "../../types/Account";

export async function updateUserRoute(request: Request, response: Response) {
  const updateUser: Account = request.body;

  const result = await updateDynamoUser(updateUser);

  response.send(result);
}
