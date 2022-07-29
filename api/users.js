const express = require("express");
const apiRouter = express.Router();
// const verifyToken = require('./index.js');
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
    const {username, password} = req.body;
    const passwordLength = password.length;
    
    if (passwordLength < 8) {
        next ({
            error: 'Password must be at least 8 characters long.',
            name: 'PasswordLengthError',
            message: PasswordTooShortError()
        })
    }

    try {
        const _user = await getUserByUsername(username)

        if (_user) {
            next({
                error: 'Username already in use.',
                name: 'UserExistsError',
                message: UserTakenError()
            });
        }

        const user = await createUser({username, password});

        const token = jwt.sign(
            { 
            id: user.id, 
            username
            }, 
            JWT_SECRET, 
            { expiresIn: '1w'}
        );

        res.send({
            message: "Thank you for signing up!",
            token: token,
            user: user
        })
    } catch ({error, name, message}) {
        next({ error, name, message })
    }
})

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