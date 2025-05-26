import { Request, Response } from "express";
import { deleteDynamoUser } from "../../modules/dynamoDB/deleteDynamoUser";
import { Account } from "../types/Account";

export async function deleteUserRoute(request: Request, response: Response) {
  const deleteUser: Account = request.body;
  const result = await deleteDynamoUser(deleteUser);
  response.send(result);
}
