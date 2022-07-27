const client = require('./client');

// DATABASE FUNCTIONS
async function getAllReviews() {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM reviews
            `
        );
        return rows;
    } catch (error) {
    console.log("Error: Problem retrieving all reviews!...", error);
    }
}

async function getReviewsById(id) {
    try {
        const {
            rows: [review],
        } = await client.query(
            `
            SELECT * FROM reviews
            WHERE id = $1;
            `, [id]);
        console.log(review)
        return review;
    } catch (error) {
    console.log("Error: Problem getting reviews  by Id...", error);
    }    
}

module.exports = {
    getAllReviews,
    getReviewsById
}