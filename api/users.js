const express = require("express");
const apiRouter = express.Router();
const { verifyToken } = require('./middleWare.js');
const jwt = require("jsonwebtoken");
const { JWT_SECRET = "neverTell" } = process.env;

const {
  createUser,
  getUserByUsername,
  getUserById,
  getUser,
} = require("../db/users");

const {
  UserTakenError,
  PasswordTooShortError,
  UnauthorizedError,
} = require("../errors");

// POST /api/users/login
apiRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await getUser({ username, password });
    if (!user) {
      next({
        name: "Authorization Error: Password",
        message: "Incorrect password. Please try again.",
      });
    } else {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
      );
      res.send({
        token,
        user,
        message: "you're logged in!",
      });
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/users/register
apiRouter.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      next({
        name: "That username is taken",
        message: UserTakenError(username),
      });
    } else if (password < 8) {
      next({
        message: PasswordTooShortError(),
        name: "Password needs to be 8 or more characters!",
      });
    } else {
      const newUser = await createUser({ username, password });
      const token = jwt.sign(
        { id: newUser.id, username: newUser.username },
        JWT_SECRET
      );
      res.send({
        message: "New user created!",
        token,
        user: {
          id: newUser.id,
          username: newUser.username,
        },
      });
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/users/me
apiRouter.get("/me", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: UnauthorizedError(),
    });
  } else {
    const { id } = req.user;
    const user = await getUserById(id);
    res.send(user);
  }
});

// ADMIN only
apiRouter.get("/users", verifyToken, async (req, res, next) => {
  try {
    jwt.verify(req.token, "secretkey", async (err, authData) => {
      if (err) {
        res.send({ error: err, status: 403 });
      } else if (authData.user.role === "admin") {
        const allUsers = await getUser();

        res.send({
          allUsers,
        });
      } else {
        res.send({ message: "User does not have admin privileges!" });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;