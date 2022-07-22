const express = require("express");

const apiRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const (JWT_SECRET) = process.env;
// const {getUserById} = require("../db")

apiRouter.get("/health", async (req, res, next) => {
    res.send({ message: "All is well, the server operational" });
    next();
  });

module.exports = apiRouter;