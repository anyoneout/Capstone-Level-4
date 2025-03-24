import { Request, Response } from "express";

export function root(request: Request, response: Response) {
  const { url } = request;
  response.send(`<h1>Hello world!</h1><p>Your root path is ${url}</p`);
  debugger;
  // response.send({ message: "what up?!" });
}
