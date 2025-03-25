import { Request, Response } from "express";

export function home(request: Request, response: Response) {
  console.log("home route was hit");
  response.send(`
    <html>
      <body>
        <h1>Home Page</h1>
      </body>
    </html>
  `);
}
