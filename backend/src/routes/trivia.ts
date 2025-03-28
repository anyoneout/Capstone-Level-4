import { Request, Response } from "express";
import { getTrivia } from "../modules/getTrivia";

export async function trivia(request: Request, response: Response) {
  const { amount = "1", category = "12", type = "multiple" } = request.query;

  const query = {
    amount: Number(amount),
    category: Number(category),
    type: String(type),
  };

  const result = await getTrivia(query);

  response.send(result);
}
