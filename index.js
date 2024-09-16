import express from "express";
import http from "node:http";
import config from "./config.json" assert { "type": "json" };

const port = config.port;

const app = express();
const server = http.createServer(app);

app.use(express.static("views"));
server.listen(port);

console.log(`Server listening @ http://localhost:${port}`);