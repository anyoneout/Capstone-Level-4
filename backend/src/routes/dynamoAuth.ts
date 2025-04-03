import { Request, Response } from "express";
import { dynamoAuthCred } from "../modules/dynamoAuthCred";

export async function dynamoAuth(request: Request, response: Response) {
  const email = request.query.email as string;
  const password = request.query.password as string;
  const result = await dynamoAuthCred(email, password);
  response.send(result);
}
