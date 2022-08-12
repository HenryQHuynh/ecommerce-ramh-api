// // create the express server here
// require("dotenv").config();
// const morgan = require("morgan");
// const cors = require("cors");
// const express = require("express");

// const server = express();

// server.use(morgan("dev"));
// server.use(cors());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// const apiRouter = require('./api');
// server.use("/api", apiRouter);


// const client = require('./client');

// // eslint-disable-next-line no-unused-vars
// apiRouter.use((error, req, res, next) => {
//   if (res.statusCode < 400) res.status(500);
//   res.send({
//     error: error.message,
//     name: error.name,
//     message: error.message,
//     table: error.table,
//   });
// });

// client.connect();
// module.exports = server;


