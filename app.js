// create the express server here
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const morgan = require("morgan");

server.use(morgan("dev"));
server.use(cors({
  origin: [
    "https://tranquil-plains-39024.herokuapp.com/",
    "http://localhost:5432/ramh"
  ],
  credentials: true
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const { apiRouter } = require("./api");
server.use("/api", apiRouter);

const client = require("./db/client");

server.use((error, req, res, next) => {
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

client.connect();
module.exports = server;
