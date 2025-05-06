import { Request, Response } from "express";
import { getAnswer } from "../modules/getAnswer";

export async function aiPost(request: Request, response: Response) {
  const { question, context }: any = request.body;
  const answer = await getAnswer(question, context);
  response.send(answer);
}
