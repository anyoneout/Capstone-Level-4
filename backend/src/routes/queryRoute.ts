import { Request, Response } from "express";
import { query } from "../modules/query";

export async function queryRoute(request: Request, response: Response) {
  const result = await query();
  response.send(result);
}
