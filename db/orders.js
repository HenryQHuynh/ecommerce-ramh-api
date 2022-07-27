const client = require("./client");

// reference routine_activities in fitness tracker
// DATABASE FUNCTIONS
async function createOrder({ name, productId, userId }) {
    try {
        const {
            rows: [order],
        } = await client.query(
        `
        INSERT INTO orders()
        VALUES ($1, $2, $3)
        ON CONFLICT (name, userId) DO NOTHING
        RETURNING *; 
        `,
        [ name, productId, userId ]
        );
        return order;
    } catch (error) {
        console.error("Error: Problem creating an order list!...", error)
    }
}

module.exports = {
    createOrder
};