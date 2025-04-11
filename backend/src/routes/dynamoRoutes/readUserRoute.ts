import { Request, Response } from "express";
import { createDynamoUser } from "../../modules/dynamoDB/createDynamoUser";
import { readDynamoUser } from "../../modules/dynamoDB/readDynamoUser";

export async function readUserRoute(request: Request, response: Response) {
  const { email } = request.query;

  const result = await readDynamoUser(String(email));

  response.send(result);
}
