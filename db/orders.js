const client = require('../client');

const createOrderDetails = async ({ orderId, productId, productPrice, quantity }) => {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO order_details("orderId", "productId", "productPrice", quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [orderId, productId, productPrice, quantity]
    );
    return rows;
  } catch (error) {
    console.error("Error: Problem creating order details!", error)
  }
};

const createUserOrder = async ({ userId, orderComplete, orderPrice }) => {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO user_orders("userId", "orderComplete", "orderPrice")
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [userId, orderComplete, orderPrice]
    );
    return rows;
  } catch (error) {
    console.error("Error: Problem creating user order!", error)
  }
};

const submitOrder = async ({ orderId, userId }) => {
  try {
    const { rows } = await client.query(
      `
      UPDATE user_orders
      SET "orderComplete" = true
      WHERE id = $1
      AND "userId" = $2
      RETURNING id, "orderComplete"
      `,
      [orderId, userId]
    );
    return rows;
  } catch (error) {
    console.error("Error: Problem submitting user order!", error)  
  }
};

module.exports = {
  createOrderDetails,
  createUserOrder,
  submitOrder,
};