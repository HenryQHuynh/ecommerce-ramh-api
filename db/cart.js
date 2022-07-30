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

  async function getCart({ userId }) {
    let i = 0;
    try {
      const { rows } = await client.query(
        `
        SELECT * FROM cart
        WHERE "userId" = $1 AND NOT status = 'completed'
      `,
        [userId]
      );
  
      const cart = [];
      for (let i = 0; i < rows.length; i++) {
        rows[i].status === "processing" ? cart.push(rows[i]) : null;
      }
      if (rows.length > 0) {
        if (cart.length > 0) {
          const products = cart[0].productId;
          const productArr = [];
          for (i = 0; i < products.length; i++) {
            const {
              rows: [product],
            } = await client.query(`
              SELECT * FROM products
              WHERE id = ${products[i]}
            `);
            productArr.push(product);
          }
  
          return { id: cart[0].id, products: productArr, status: cart[0].status };
        }
  
        const products = rows[0].productId;
        const productArr = [];
        for (i = 0; i < products.length; i++) {
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

  async function addToCart({ userId, productId }) {
    // get cart for user
    let i = 0;
    const cart = await getCart({ userId });
    const cartId = cart.id;
    const oldProducts = cart.products;
  
    const newProducts = [];
    if (oldProducts.length > 0) {
      for (i = 0; i < oldProducts.length; i++) {
        newProducts.push(oldProducts[i].id);
      }
      newProducts.push(...productId);
    } else {
      newProducts.push(...productId);
    }
  
    try {
      const {
        rows: [updatedCart],
      } = await client.query(
        `
        UPDATE cart
        SET "productId" = $1, status = $2
        WHERE "id" = $3
        RETURNING *;
      `,
        [newProducts, "processing", cartId]
      );
  
      return updatedCart;
    } catch (error) {
        console.error("Error: Problem adding to Cart...", error)
    }
  }

  async function removeFromCart({ userId, productId }) {
    let i = 0;
    const cart = await getCart({ userId });
    const oldProducts = cart.products;
    const idArr = [];
    try {
      if (oldProducts.length > 0) {
        const index = oldProducts.findIndex(
          (product) => product.id === productId
        );
  
        if (index !== -1) {
          oldProducts.splice(index, 1);
        }
  
        for (i = 0; i < oldProducts.length; i++) {
          idArr.push(oldProducts[i].id);
        }
  
        const {
          rows: [updatedCart],
        } = await client.query(
          `
          UPDATE cart 
          SET "productId" = $1, status = $2 
          WHERE "userId" = ${userId} 
          RETURNING *;
          `,
          [idArr, "processing"]
        );
  
        return updatedCart;
      }
    } catch (error) {
        console.error("Error: Problem removing from Cart...", error)
    }
  }

  async function checkout({ userId, cartId }) {
    try {
      const {
        rows: [updatedCart],
      } = await client.query(
        `
        UPDATE cart
        SET status = $1
        WHERE "userId" = $2
      `,
        ["completed", userId]
      );
      const {
        rows: [order],
      } = await client.query(
        `
        INSERT INTO orders("userId", "cartId")
        VALUES ($1, $2)
        RETURNING *
      `,
        [userId, cartId]
      );
  
      return updatedCart, order;
    } catch (error) {
        console.error("Error: Problem with checkout...", error)
    }
  }

module.exports = {
    createCart,
    getCompletedCart,
    getCart,
    addToCart,
    removeFromCart,
    checkout
};