import { Request, Response } from "express";
import { getQuote } from "../modules/getQuote";

export async function quote(request: Request, response: Response) {
  const result = await getQuote();
  response.send(result);
}
