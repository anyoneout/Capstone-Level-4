import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { home } from "./routes/home";
import { quote } from "./routes/quote";
import { trivia } from "./routes/trivia";
import { client } from "./routes/client";
import { request } from "./routes/request";
import { triviaApiRoute } from "./routes/triviaApiRoute";
import { dynamoAuthRoute } from "./routes/dynamoAuthRoute";

const hostname = "localhost"; // Local domain
const port = 3000; // Common backend ports : 8000, 9000, 3000

const app = express(); // Instantiate the Express.js object
app.use(cors());
app.get("/", root); // The handler runs when the path is visited in the URL.
app.get("/api", api);
app.get("/home", home);
app.get("/client", client);
app.get("/quote", quote);
app.get("/request", request);
app.get("/trivia", trivia);
app.get("/triviaRoute", triviaApiRoute);
app.get("/dynamoAuth", dynamoAuthRoute);

app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port.

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and run 'npm run build' `);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
