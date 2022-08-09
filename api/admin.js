const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getAllOrders,
    removeUser,
    Administrator,
    createNewProduct,
    removeProduct,
    editProduct,
} = require("../db");

// USERS
// GET /api/admin/users/
router.get("/users/all-users", async (req, res, next) => {
    // const { isAdmin } = req.user;
    // if (!isAdmin) {
    //     res.status(403);
    //     next({
    //         name: "Permission Denied",
    //         message: "You do not have the right permissions",
    //     });
    // } else {
        try {
            const result = await getAllUsers();
            res.send(result);
        } catch (error) {
        next(error);
        }
    // }
});

// PATCH /api/admin/users/remove
router.patch("/user/remove", async (req, res, next) => {
    const { isAdmin } = req.user;
    if (!isAdmin) {
        res.status(403);
        next({
        name: "Permission Denied",
        message: "You do not have the right permissions",
        });
    } else {
        const { userId } = req.body;
        try {
        const result = await removeUser(userId);
        if (!result.length) {
        res.status(400);
        next({
            name: "Action Forbidden",
            message: `User id# ${userId} could not be removed.`,
        });
        } else
        res.send({
            name: "User Removed",
            message: `User ID# ${userId} has been removed.`,
        });
        } catch (err) {
        next(err);
        }
  }
});

//PATCH /api/admin/users/promote
router.patch("/user/administrator", async (req, res, next) => {
    const { userId } = req.body;
    const { isAdmin } = req.user;
    if (!isAdmin) {
      res.status(403);
      next({
        name: "Permission Denied",
        message: "You do not have the right permissions"
      });
    } else {
      try {
        const result = await Administrator(userId);
        if (!result.length) {
          res.status(400);
          next({
            name: "Permission Denied",
            message: `User id# ${userId} could not be updated to administrator level.`,
          });
        } else {
          res.send({
            name: "User update to Admin",
            message: `User ID# ${userId} was updated to administrator level.`,
          });
        }
      } catch (error) {
        next(error);
      }
    }
  });

// PRODUCTS
// POST /api/admin/comics/new
router.post("/products/add", async (req, res, next) => {
    const { isAdmin } = req.user;
    if (!isAdmin) {
      res.status(403);
      next({
        name: "Permission Denied",
        message: "You do not have the right permissions",
      });
    } else {
        try {
            const {
              title,
              author,
              publisher,
              imageLink,
              genre,
              description,
              price,
              inventory,
            } = req.body;
            const result = await createNewProduct(
              title,
              author,
              publisher,
              imageLink,
              genre,
              description,
              price,
              inventory,
            );
            res.send(result);
          } catch (error) {
            next(error);
          }
    }
});

// PATCH/edit /api/admin/products/:productId
router.patch("/products/:productId", async (req, res, next) => {
    const { isAdmin } = req.user;
    if (!isAdmin) {
      res.status(403);
      next({
        name: "Permission Denied",
        message: "You do not have the right permissions",
      });
    } else {
        const { productId } = req.params;
        const {
            title,
            author,
            publisher,
            imageLink,
            genre,
            description,
            price,
            inventory,
          } = req.body;
          try {
            const data ={
                productId,
                title,
                author,
                publisher,
                imageLink,
                genre,
                description,
                price,
                inventory,
            };
            console.log("data:", data);
            const result = await editProduct(data);
            if (result.length) {
                res.send({
                    name: "Update successful",
                    message: `Product Id# ${productId} has been updated!`,
                });
            } else {
                next({
                    name: "Update unsuccessful",
                    message: `Please try again, was unable to update Product Id# ${productId}.`,
                });
            }
          } catch (error) {
            console.error("Error: Problem with editting product...", error)
            next(error)
          }
    }
})

// DELETE /api/admin/products/:productId
router.delete("/products/:productId", async (req, res, next) => {
    const { isAdmin } = req.user;
    if (!isAdmin) {
      res.status(403);
      next({
        name: "Permission Denied",
        message: "You do not have the right permissions",
      });
    } else {
        const { productId } = req.params;
        try {
        const result = await removeProduct(productId);
        if (result.length) {
            res.send({
            name: "Deactivation Successful",
            message: `Product Id# ${productId} has been deactivated.`,
            });
        } else {
            next({
            name: "Deactivation Unsuccessful",
            message: `Please try again, was unable to delete Product Id# ${productId}.`,
            });
        }
    } catch (error) {
      next(error);
    }}
})

// PRODUCT ORDERS
// GET /api/admin/orders/all
router.get("/orders/all", async (req, res, next) => {
    // const { isAdmin } = req.user;
    // if (!isAdmin) {
    //   res.status(403);
    //   next({
    //     name: "Permission Denied",
    //     message: "You do not have the right permissions",
    //   });
    // } else {
      try {
        const result = await getAllOrders();
        res.send(result);
      } catch (error) {
        next(error);
      // }
    }
  });

module.exports = router;