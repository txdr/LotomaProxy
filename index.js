const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.use(express.static("views"));
server.listen(80);

console.log("Server online, accessible at http://localhost:8080/");