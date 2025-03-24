import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";

const hostname = "localhost"; // Local doman
const port = 8000; // Common backend ports : 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser

const app = express(); // Instantiate the Express.js object
app.use(cors());
app.get(path, root); // The handler runs when the path is visited in the URL.
/* app.listen(port, hostname); // The server listens at the specified hostname and port. */
app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port.

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and run 'npm run build' `);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
