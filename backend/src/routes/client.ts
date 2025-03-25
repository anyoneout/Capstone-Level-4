import { Request, Response } from "express";

export function client(request: Request, response: Response) {
  const data = {
    name: "Chris",
    password: "password",
    email: "email@email.com",
  };
  response.send(data);
}
