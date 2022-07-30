const express = require("express");
const apiRouter = express.Router();
const { verifyToken } = require('./middleWare.js');
const jwt = require("jsonwebtoken");

const {
    createCart,
    checkout,
    // deleteOrdersAndCart,
    getOrder,
    getOrders,
} = require("../db");
    
apiRouter.get("/orders", verifyToken, async (req, res, next) => {
    try {
    jwt.verify(req.token, "secretkey", async (err, authData) => {
        if (err) {
        res.send({ error: err, status: 403 });
        } else {
        const order = await getOrder(authData.user.id);

        res.send({ order });
        }
    });
    } catch (error) {
    next(error);
    }
});

apiRouter.get("/orders/admin", verifyToken, async (req, res, next) => {
    try {
      jwt.verify(req.token, "secretkey", async (err, authData) => {
        if (err) {
          res.send({ error: err, status: 403 });
        } else if (authData.user.role === "admin") {
          const allOrders = await getOrders();
  
          res.send({
            allOrders,
          });
        } else {
          res.send({ message: "User does not have admin privileges!" });
        }
      });
    } catch (error) {
      next(error);
    }
  });

// creates order and cart row
apiRouter.post("/checkout", async (req, res, next) => {
    // required fields from table
    const { userId, cartId } = req.body;
    try {
        // from index.js db
        const order = await checkout({
        userId,
        cartId,
        });
        if (order) {
        res.json({ order });
        }
        await createCart({ userId, productId: [] });
    } catch (error) {
        next(error);
    }
});

// apiRouter.get("/orders/:userId", verifyToken, async (req, res, next) => {
//     const { userId } = req.params;

//     try {
//         jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (err) {
//             res.send({ error: err, status: 403 });
//         } else {
//             const orders = await deleteOrdersAndCart(userId);

//             res.send(orders);
//         }
//         });
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = apiRouter;