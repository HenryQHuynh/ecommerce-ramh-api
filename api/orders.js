const express = require("express");
const router = express.Router();

const {
  addToCart,
  deleteProductFromCart,
  editCartQuantity,
  submitOrder,
} = require("../db");

// POST /api/orders/cart
router.post("/cart", async (req, res, next) => {
  const { userId, productPrice, productId, quantity } = req.body;
  try {
    const result = await addToCart(userId, productPrice, productId, quantity);
    if (result.length) {
      res.send({
        name: "Update to cart",
        message: "Item added to cart.",
      });
    } else {
      next({
        name: "No update to cart",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error: Can't update cart... please try again or come back later.")
    next(error);
  }
});

// PATCH /api/orders/cart
router.patch("/cart", async (req, res, next) => {
  const { orderId, productId, productPrice, oldQuan, newQuan } = req.body;
  try {
    const result = await editCartQuantity(
      orderId,
      productId,
      productPrice,
      oldQuan,
      newQuan
    );
    if (result.length) {
      res.send({
        name: "Update to cart",
        message: "Changed number of items in your cart.",
      });
    } else {
      next({
        name: "No update to cart",
        message: "An error occurred here. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error: Can't update cart... please try again or come back later.")
    next(error);
  }
});

// DELETE /api/orders/cart
router.delete("/cart", async (req, res, next) => {
  const { orderId, productId, productPrice, quantity } = req.body;
  try {
    const result = await deleteProductFromCart(
      orderId,
      productId,
      productPrice,
      quantity
    );
    if (result.length) {
      res.send({
        name: "Update to cart",
        message: "Successfully deleted item from your cart",
      });
    } else {
      next({
        name: "No update to cart",
        message: "Could not update cart, please try again.",
      });
    }
  } catch (error) {
    console.error("Error: Can't update cart... please try again or come back later.")
    next(error);
  }
});

// POST /api/orders/:orderId
router.post("/:orderId", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "Please log in to continue.",
    });
  } else {
    const { orderId } = req.params;
    const { id: userId } = req.user;
    try {
      const result = await submitOrder(orderId, userId);
      if (result[0].isComplete) {
        res.send({
          name: "Order Complete",
          message: "Order Completed! Have a wonderful day!",
        });
      } else {
        next({
          name: "Order Not Complete",
          message: "Please try again....: Order incomplete.",
        });
      }
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;