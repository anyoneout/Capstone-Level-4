import { Request, Response } from "express";
import { getDynamoAuth } from "../modules/getDynamoAuth";

export async function dynamoAuthRoute(request: Request, response: Response) {
  const email = request.query.email as string;
  const password = request.query.password as string;
  const result = await getDynamoAuth(email, password);
  response.send(result);
}
