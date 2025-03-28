import { Request, Response } from "express";

export function headersCheck(request: Request, response: Response) {
  const data = {
    userAgent: request.headers["user-agent"],
    host: request.headers["host"],
    accept: request.headers["accept"],
  };
  response.send(data);
}
