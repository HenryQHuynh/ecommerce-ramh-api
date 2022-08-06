const express = require('express');
const router = express.Router();
const { getAuthorComics } = require("../db");

// GET api/authors/:authorName
router.get("/:authorName", async (req, res, next) =>{
    const { authorName } = req.params
    try {
        const authorData = await getAuthorComics(authorName);
        res.send(authorData);
    } catch (error) {
    console.error("Error: Problem getting authors associated with product...", error);
    next(error);
    }
})

module.exports = router;