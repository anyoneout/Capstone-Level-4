import { Request, Response } from "express";
import { deleteDynamoUser } from "../../modules/dynamoDB/deleteDynamoUser";

export async function deleteUserRoute(request: Request, response: Response) {
  const { email } = request.query;

  const result = await deleteDynamoUser(String(email));

  response.send(result);
}
