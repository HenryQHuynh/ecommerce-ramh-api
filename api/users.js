const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

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
router.post("/login", async (req, res, next) => {
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
router.post("/register", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const existingUser = await getUserByUsername(username);
        if (existingUser.length) {
            next({
                name: "That username is taken",
                message: UserTakenError(username),
            });
        } else if (password.length < 8) {
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
router.get("/me", async (req, res, next) => {
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