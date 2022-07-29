const express = require("express");
// establish api routes
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { getUserById } = require("../db");

// middleware to create req.user
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  // if no Authorization header, pass on by
  if (!auth) {
    next();
    // if Authorization header exists, pull token from header
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      // verify token matches 
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        // set req.user with user object
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

// test route to check status of api
apiRouter.get("/health", async (req, res, next) => {
  res.send({ message: "All is well, the server is good to go" });
  next();
});

// pulls usersRouters and establishes routes at api/users
const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

function verifyToken(req, res, next) {
  //get Auth header
  const bearerHeader = req.headers["authorization"];
  // console.log("bearerheader", bearerHeader);
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    //  console.log("bearer", bearer);
    // get token on index 1 from array
    const bearerToken = bearer[1];
    // console.log("bearertoken", bearerToken);
    // adding token to req object - set token
    req.token = bearerToken;
    next();
    // send forbidden error status code
  } else {
    res.sendStatus(403);
  }
}

module.exports = {
  apiRouter,
  verifyToken
};