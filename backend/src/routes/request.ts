import { Request, Response } from "express";

export function request(request: Request, response: Response) {
  const data = {
    path: request.path,
    method: request.method,
    origin: request.headers.origin || "unknown",
  };
  response.send(data);
}
