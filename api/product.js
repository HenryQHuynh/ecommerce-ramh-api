const express = require("express");
const apiRouter = express.Router();
const { verifyToken } = require('./middleWare.js');
const jwt = require("jsonwebtoken");
// const stripe = require("stripe")(process.env.STRIPEKEY);


const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    destroyProduct,
    // addCount,
    // subtractCount,
} = require("../db");

apiRouter.get("/products", async (req, res, next) => {
    try {
        const allProducts = await getAllProducts();
        // console.log("all products", allProducts);
        res.send({
            allProducts,
        });
    } catch (error) {
        next(error);
    }
});

// retrieve product by Id
apiRouter.get("/products/:productId", async (req, res, next) => {
    const { productId } = req.params;

    try {
        const product = await getProductById(productId);

        res.send({
            product,
        });
    } catch (error) {
        next(error);
    }
});

apiRouter.post("/products", verifyToken, async (req, res, next) => {
    // required fields from table
    const { name, description, photoUrl, department, price, count, quantity } =
        req.body;
    try {
        jwt.verify(req.token, "secretkey", async (err, authData) => {
            if (err) {
                res.send({ error: err, status: 403 });
            } else if (authData.user.role === "admin") {
                const product = await createProduct({
                    name,
                    description,
                    photoUrl,
                    department,
                    price,
                    count,
                    quantity,
                });
                res.send(product);
            } else {
                res.send({ message: "User is not an admin!" });
            }
        });
    } catch (error) {
        next(error);
    }
});

// delete product
// ADMIN only
apiRouter.delete(
    "/products/:productId",
    verifyToken,
    async (req, res, next) => {
      const { productId } = req.params;
      try {
        jwt.verify(req.token, "secretkey", async (err, authData) => {
          if (err) {
            res.send({ error: err, status: 403 });
          } else if (authData.user.role === "admin") {
            const deletedProduct = await destroyProduct(productId);
            res.send(deletedProduct);
          } else {
            res.send({ message: "User is not an admin!" });
          }
        });
      } catch (error) {
        next(error);
      }
    }
  );

  apiRouter.patch("/products/:productId/update", async (req, res, next) => {
    const updateFields = {};
    const { name, description, photoUrl, authorId, distId, price, department } = req.body;
  
    if (name) {
      updateFields.name = name;
    }
    if (description) {
      updateFields.description = description;
    }
    if (photoUrl) {
      updateFields.photoUrl = photoUrl;
    }
    if (authorId) {
      updateFields.authorId = authorId;
    }
    if (distId) {
      updateFields.distId = distId;
    }
    if (price) {
      updateFields.price = price;
    }
    if (department) {
      updateFields.department = department;
    }
  
    const { productId } = req.params;
  
    try {
      const product = await updateProduct(productId, updateFields);
      res.send(product);
    } catch (error) {
      next(error);
    }
  });

//   apiRouter.patch("/count", verifyToken, async (req, res, next) => {
//     const { id } = req.body;
  
//     try {
//       jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (err) {
//           res.send({ error: err, status: 403 });
//         } else {
//           const updatedCount = await addCount(id);
  
//           res.send({ updatedCount });
//         }
//       });
//     } catch (error) {
//       next(error);
//     }
//   });

//   apiRouter.patch("/count/subtract", verifyToken, async (req, res, next) => {
//     const { id } = req.body;
  
//     try {
//       jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (err) {
//           res.send({ error: err, status: 403 });
//         } else {
//           const updatedCount = await subtractCount(id);
  
//           res.send({ updatedCount });
//         }
//       });
//     } catch (error) {
//       next(error);
//     }
//   });

module.exports = apiRouter;