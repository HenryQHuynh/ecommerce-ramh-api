const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductById,
} = require("../db");

// GET /api/products
router.get("/products", async (req, res, next) => {
    try {
        const data = await getAllProducts();
        res.send(data);
    } catch (error) {
        console.error("Error: Problem getting all products", error);
        next(error);
    }
});

// GET /api/products/:id
router.get("/products/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await getProductById(id);
        res.send(product);
    } catch (error) {
        console.error("Error: Problem getting product by id...", error)
        next(error);
    }
})

module.exports = router;