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
    console.error("Error: Problem retrieving all reviews!...", error);
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
    console.error("Error: Problem getting reviews  by Id...", error);
    }    
}

async function getReviewsByName(name) {
    try {
        const {
            rows: [review],
        } = await client.query(
            `
            SELECT * FROM reviews
            WHERE name = $1;
            `, [name]);
            return review;
    } catch (error) {
        console.error("Error: Problem getting reviews by name...", error);
    }
}

async function createReviews({ name, description }) {
    try {
        const {
            rows: [review],
        } = await client.query(
            `
            INSERT INTO reviews (name, description )
            VALUES ($1,$2)
            ON CONFLICT 
            `,
            [name, description]
        );
        return review
    } catch (error) {
    console.error("Error: Problem creating reviews...", error)
    }
}

async function destroyReviews(id) {
    try {
        await client.query(
            `
            DELETE FROM reviews
            WHERE "id"=${id};
            `);
            const {
                rows: [review],
              } = await client.query(
                `
                DELETE FROM reviews
                WHERE id=${id}
                RETURNING *;
                `
              );
        console.log(review, "Finished deleting review from list!")
    } catch (error) {
        console.error("Problem deleting reviews...", error)
    }
}

module.exports = {
    getAllReviews,
    getReviewsById,
    getReviewsByName,
    createReviews,
    destroyReviews
}