const client = require("./client");

// DATABASE FUNCTIONS
async function createCart({ userId, productId, status = "created" }) {
    try {
      const {
        rows: [cart],
      } = await client.query(
        `
        INSERT INTO cart("userId", "productId", status)
        VALUES ($1, $2, $3)
        RETURNING *;
      `,
        [userId, productId, status]
      );
  
      return cart;
    } catch (error) {
        console.error("Error: Problem creating cart...", error)
    }
  }




async function getCompletedCart({ userId }) {
    let i = 0;
    try {
      const { rows } = await client.query(
        `
        SELECT * FROM cart
        WHERE id = $1 AND status = 'completed'
      `,
        [userId]
      );
      if (rows.length > 0) {
        const products = rows[0].productId;
        const productArr = [];
        for ( i = 0; i < products.length; i++) {
          const {
            rows: [product],
          } = await client.query(`
              SELECT * FROM products
              WHERE id = ${products[i]}
            `);
          productArr.push(product);
        }
  
        return { id: rows[0].id, products: productArr, status: rows[0].status };
      } else {
        return [];
      }
    } catch (error) {
        console.error("Error: Problem getting Completed Cart...", error)
    }
  }

module.exports = {
    createCart,
    getCompletedCart,
    
};