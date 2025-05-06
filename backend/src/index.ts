import express from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { home } from "./routes/home";
import { quote } from "./routes/quote";
import { trivia } from "./routes/trivia";
import { client } from "./routes/client";
import { request } from "./routes/request";
import { createUserRoute } from "./routes/dynamoRoutes/createUserRoute";
import { readUserRoute } from "./routes/dynamoRoutes/readUserRoute";
import { deleteUserRoute } from "./routes/dynamoRoutes/deleteUserRoute";
import { updateUserRoute } from "./routes/dynamoRoutes/updateUserRoute";
import serverless from "serverless-http";
import dotenv from "dotenv";
import { triviaApiRoute } from "./routes/triviaApiRoute";
import { dynamoAuthRoute } from "./routes/dynamoAuthRoute";

dotenv.config();

const hostname = "localhost"; // Local domain
const port = 3001; // Common backend ports : 8000, 9000, 3000

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
app.get("/createUser", createUserRoute);
app.get("/readUser", readUserRoute);
app.get("/deleteUser", deleteUserRoute);
app.get("/updateUser", updateUserRoute);

const mode = process.env.mode;
const isRunningLocally = mode === "development";
console.log(mode, isRunningLocally);
if (isRunningLocally) app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port.

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and run 'npm run build' `);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}

export const handler = serverless(app);
