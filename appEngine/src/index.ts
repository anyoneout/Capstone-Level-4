import express, { json, urlencoded } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import dotenv from "dotenv";
import { aiPost } from "./routes/aiPost";

dotenv.config();
const hostname = "localhost"; // Local domain
const port: any = process.env.PORT; // Common backend ports : 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser
const app = express(); // Instantiate the Express.js object

app.use(urlencoded()); // Allows data to be received from Postman through
app.use(json()); //Allows data to be received from Axios through JSON parameters
app.use(cors());
app.get("/", root); // The handler runs when the path is visited in the URL.
app.get("/api", api);
app.post("/aiPost", aiPost);
app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port.

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and run 'npm run build' `);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
