import { Request, Response } from "express";
import { getTriviaApiResponse } from "../modules/getTriviaApiResponse";

export async function triviaApiRoute(request: Request, response: Response) {
  const result = await getTriviaApiResponse();
  response.send(result);
}
