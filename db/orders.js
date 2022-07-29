const client = require("./client");
const getCompletedCart = require('./cart.js');

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

// ADMIN only
async function getOrders() {
    try {
      const { rows } = await client.query(`
        SELECT * FROM orders
      `);
  
      const cartArr = [];
      for (let i = 0; i < rows.length; i++) {
        const cart = await getCompletedCart({ userId: rows[i].cartId });
  
        const totalArr = [];
  
        if (cart !== []) {
          cart.products.map((product) => {
            totalArr.push(parseFloat(product.price * product.count));
          });
  
          const total = totalArr.reduce((a, b) => a + b, 0).toFixed(2);
  
          cartArr.push({ rows: rows[i], cart, total });
        }
      }
  
      return { cartArr };
    } catch (error) {
        console.error("Error: Problem creating an order list!...", error)
    }
  }

  // list of orders for users
async function getOrder(userId) {
    try {
      const { rows } = await client.query(
        `
        SELECT * FROM orders
        WHERE "userId" = $1
      `,
        [userId]
      );
  
      const cartArr = [];
      for (let i = 0; i < rows.length; i++) {
        const cart = await getCompletedCart({ userId: rows[i].cartId });
  
        const totalArr = [];
  
        if (cart !== []) {
          cart.products.map((product) => {
            totalArr.push(parseFloat(product.price * product.count));
          });
          const total = totalArr.reduce((a, b) => a + b, 0).toFixed(2);
  
          cartArr.push({ rows: rows[i], cart, total });
        }
      }
  
      return { cartArr };
    } catch (error) {
        console.error("Error: Problem creating an order list!...", error)
    }
  }

  async function deleteOrdersAndCart(userId) {
    try {
      await client.query(
        `
      DELETE FROM orders
      WHERE "userId"=$1;
      `,
        [userId]
      );
  
      const { rows } = await client.query(
        `
      DELETE FROM cart
      WHERE "userId"=$1
      RETURNING *;
      `,
        [userId]
      );
  
      return rows;
    } catch (error) {
        console.error("Error: Problem creating an order list!...", error)
    }
  }
  

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    deleteOrdersAndCart,
};