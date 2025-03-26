import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { home } from "./routes/home";
import { client } from "./routes/client";

const hostname = "localhost"; // Local domain
const port = 3000; // Common backend ports : 8000, 9000, 3000

const app = express(); // Instantiate the Express.js object
app.use(cors());
app.get("/", root); // The handler runs when the path is visited in the URL.
app.get("/api", api);
app.get("/home", home);
app.get("/client", client);

app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port.

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and run 'npm run build' `);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
