const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET = "WERAMH" } = process.env;
const { getUserById } = require("../db");

// middleware to create req.user
// GET /api/health
router.get("/health", async (req, res, next) => {
  res.send({ message: "All is well, the server is good to go." });
  next();
});

// Blank /api/
router.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction, please be patient!",
  });
  next();
});

// Authorization
router.use(async (req, res, next) => {
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
      const { id: userId } = jwt.verify(token, JWT_SECRET);
      if (userId) {
        // set req.user with user object
        req.user = await getUserById(userId);
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

// ROUTER: /api/products
const productsRouter = require("./product");
router.use("/products", productsRouter);

// ROUTE /api/users
const usersRouter = require("./users");
router.use("/users", usersRouter);

// ROUTER: /api/authors
const authorsRouter = require("./authors");
router.use("/authors", authorsRouter);

// ORDERS: /api/orders
const ordersRouter = require("./orders");
router.use("/orders", ordersRouter);

// ADMIN: /api/admin
const adminRouter = require('./admin');
router.use("/admin", adminRouter);

module.exports = router;