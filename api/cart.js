const express = require("express");
const apiRouter = express.Router();
const verifyToken = require('./index.js');
const jwt = require("jsonwebtoken");

const {
    getCart,
    createCart,
    checkout,
    // addToCart,
    // removeFromCart,
    // deleteOrdersAndCart,
} = require("../db");

// verify token - user is logged in
apiRouter.get("/cart", verifyToken, async (req, res, next) => {
    try {
        jwt.verify(req.token, "secretkey", async (err, authData) => {
        if (err) {
            res.send({ error: err, status: 403 });
        } else {
            const cart = await getCart({ userId: authData.user.id });

            res.send({ cart });
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

// // updates cart
// apiRouter.patch("/cart", verifyToken, async (req, res, next) => {
//     const { userId, productId } = req.body;

//     try {
//         jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (err) {
//             res.send({ error: err, status: 403 });
//         } else {
//             const updatedCart = await addToCart({ userId, productId });

//             res.send({ updatedCart });
//         }
//         });
//     } catch (error) {
//         next(error);
//     }
// });

// // remove from cart
// // still working on this one... db index
// apiRouter.patch("/cart/remove", verifyToken, async (req, res, next) => {
//     const { userId, productId } = req.body;
//     try {
//         jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (err) {
//             res.send({ error: err, status: 403 });
//         } else {
//             const updatedCart = await removeFromCart({ userId, productId });

//             res.send({ updatedCart });
//         }
//         });
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = apiRouter;