import { Request, Response } from "express";
import { updateDynamoUser } from "../../modules/dynamoDB/updateDynamoUser";

export async function updateUserRoute(request: Request, response: Response) {
  const { email, password } = request.body;
  const result = await updateDynamoUser(String(email), String(password));
  response.send(result);
}
