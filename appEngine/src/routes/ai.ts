import { Request, Response } from "express";
import { getAnswer } from "../modules/getAnswer";

export async function ai(request: Request, response: Response) {
  const { question, context }: any = request.query;
  const answer = await getAnswer(question, context);
  response.send(answer);
}
