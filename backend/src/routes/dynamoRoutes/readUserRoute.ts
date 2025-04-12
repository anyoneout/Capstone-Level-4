import { Request, Response } from "express";
import { readDynamoUser } from "../../modules/dynamoDB/readDynamoUser";

export async function readUserRoute(request: Request, response: Response) {
  const { email } = request.query;

  const result = await readDynamoUser(String(email));

  response.send(result);
}
