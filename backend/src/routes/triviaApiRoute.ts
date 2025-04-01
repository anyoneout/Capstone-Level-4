import { Request, Response } from "express";
import { getApiResponse } from "../modules/getApiResponse";

export async function triviaApiRoute(request: Request, response: Response) {
  const result = await getApiResponse();
  response.send(result);
}
