const express = require("express");
const router = express.Router();
// const { verifyToken } = require('./middleWare.js');
const jwt = require("jsonwebtoken");
const { JWT_SECRET = "WERAMH" } = process.env;

const {
  getUserByEmail,
  createUser,
  verifyUser,
  getUserProfileById,
  getUserCartById,
} = require("../db");

// POST /api/users/register
router.post("/register", async (req, res, next) => {
  const { userEmail, password } = req.body;
  try {
    const check = await getUserByEmail(userEmail);
    if (check.length) {
      next({
        name: "Error: Registration could not be complete",
        message: `An account using ${userEmail} already exists. Please use another email...`,
      });
    } else if (password.length < 8) {
      next({
        name: "Error: Registration could not be complete",
        message: "Passwords need to be at least 8 characters long. Please try again...",
      });
    } else {
      const newUser = createUser({ userEmail, password });
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        JWT_SECRET
      );
      res.send({
        message: `New account created. Thanks for signing up, ${userEmail}!`,
        token,
        user: {
          id: newUser.id,
          userEmail: newUser.userEmail,
        },
      });
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/users/login
router.post("/login", async (req, res, next) => {
  const { userEmail, password } = req.body;
  try {
    const check = await getUserByEmail(userEmail);
    if (!check.length) {
      next({
        name: "Error: Check authorization with User",
        message: `No accounts exist for user ${userEmail}. Please try again, or create an account.`,
      });
    } else {
      const user = await verifyUser(userEmail, password);
      if (!user) {
        next({
          name: "Error: Check authorization with password",
          message: `Incorrect password for ${userEmail}. Please try again.`,
        });
      } else {
        const token = jwt.sign(
          { id: user[0].id, userEmail: user[0].userEmail, isAdmin: user[0].isAdmin },
          JWT_SECRET
        );
        res.send({
          message: `Welcome back, ${user[0].userEmail}. Hope you have been well! You are now logged in.`,
          token,
          user: {
            id: user[0].id,
            userEmail: user[0].userEmail,
            isAdmin: user[0].isAdmin,
          },
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

// GET: /api/users/me
router.get("/me", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Error: Check authorization with Login.",
      message: "Please try again. You must be logged in.",
    });
  } else {
    const { id: userId } = req.user;
    try {
      const user = await getUserProfileById(userId);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }
});

// GET /api/users/me/cart
router.get("/me/cart", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Error: Check authorization with cart",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { id: userId } = req.user;
    try {
      const result = await getUserCartById(userId);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;