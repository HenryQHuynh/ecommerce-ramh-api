const client = require("../client");

/*
Ask if destructuring is going to cause some problems with { rows } again
*/


// DATABASE FUNCTIONS
const addToCart = async (userId, productPrice, productId, quantity) => {
  const { rows: openOrder } = await client.query(
    `
    SELECT id, "orderPrice" FROM user_orders
    WHERE "userId" = $1
    AND "orderComplete" = false;
  `,
    [userId]
  );
  if (!openOrder.length) {
    const newOrderPrice = Number(productPrice) * Number(quantity);
    const { rows: newOrder } = await client.query(
      `
      INSERT INTO user_orders("userId", "orderPrice")
      VALUES($1, $2)
      RETURNING *;
    `,
      [userId, newOrderPrice]
    );
    const { rows: newOrderDetails } = await client.query(
      `
      INSERT INTO order_details("orderId", "productId", "productPrice", quantity)
      values($1, $2, $3, $4)
      RETURNING "productId", "productPrice", quantity;
    `,
      [newOrder[0].id, productId, productPrice, quantity]
    );
    const orderData = {
      orderId: newOrder[0].id,
      productId: newOrderDetails[0].productId,
    };
    return [orderData];
  } else {
    const updateOrderPrice =
      Number(openOrder[0].orderPrice) + Number(productPrice) * Number(quantity);
    const { rows: updateOrder } = await client.query(
      `
      UPDATE user_orders
      SET "orderPrice" = $1
      WHERE id = $2
      RETURNING "orderPrice";
    `,
      [updateOrderPrice, openOrder[0].id]
    );
    const { rows: checkProduct } = await client.query(
      `
      SELECT "productId", quantity FROM order_details
      WHERE "orderId" = $1
      AND "productId" = $2;
    `,
      [openOrder[0].id, productId]
    );
    if (!checkProduct.length) {
      const { rows: updateOrderDetails } = await client.query(
        `
        INSERT INTO order_details("orderId", "productId", "productPrice", quantity)
        VALUES($1, $2, $3, $4)
        RETURNING "productId", "productPrice", quantity;
      `,
        [openOrder[0].id, productId, productPrice, quantity]
      );
      const orderData = {
        orderId: openOrder[0].id,
        orderPrice: updateOrder[0].orderPrice,
        productId: updateOrderDetails[0].productId,
      };
      return [orderData];
    } else {
      const newQuantity = checkProduct[0].quantity + Number(quantity);
      const { rows: updateProductQuantity } = await client.query(
        `
        UPDATE order_details
        SET quantity = $1
        WHERE "orderId" = $2
        AND "productId" = $3
        RETURNING "productId", "productPrice", quantity;
      `,
        [newQuantity, openOrder[0].id, productId]
      );
      const orderData = {
        orderId: openOrder[0].id,
        orderPrice: updateOrder[0].orderPrice,
        productId: updateProductQuantity[0].productId,
      };
      return [orderData];
    }
  }
};

const deleteProductFromCart = async (orderId, productId, productPrice, quantity) => {
  try {
    const { rows: deleted } = await client.query(
      `
      DELETE FROM order_details
      WHERE "orderId" = $1
      AND "productId" = $2
      RETURNING "productId";
      `,
      [orderId, productId]
    );
    const { rows: order } = await client.query(
      `
      SELECT "orderPrice" FROM user_orders
      WHERE id = $1;
      `,
      [orderId]
    );
    const updatedOrderPrice =
      Number(order[0].orderPrice) - Number(productPrice) * Number(quantity);
    if (updatedOrderPrice > 0.01) {
      await client.query(
        `
        UPDATE user_orders
        SET "orderPrice" = $1
        WHERE id = $2;
      `,
        [updatedOrderPrice, orderId]
      );
    } else {
      await client.query(
        `
        DELETE FROM user_orders
        WHERE id = $1;
      `,
        [orderId]
      );
    }
    return deleted;
  } catch (error) {
    console.error("Error: Trouble deleting product from cart.", error)
  }
};

const editCartQuantity = async (
  orderId,
  productId,
  productPrice,
  prevQuantity,
  newQuantity
) => {
  try {
    const { rows: updated } = await client.query(
      `
      UPDATE order_details
      SET quantity = $1
      WHERE "orderId" = $2
      AND "productId" = $3
      RETURNING "orderId";
      `,
      [newQuantity, orderId, productId]
    );
    const { rows: order } = await client.query(
      `
      SELECT "orderPrice" FROM user_orders
      WHERE id = $1
      `,
      [orderId]
    );
    const updatedOrderPrice =
    Number(order[0].orderPrice) -
    Number(prevQuantity) * Number(productPrice) +
    Number(newQuantity) * Number(productPrice);
    await client.query(
      `
      UPDATE user_orders
      SET "orderPrice" = $1
      WHERE id = $2;
      `,
      [updatedOrderPrice, orderId]
    );
    return updated
  } catch (error) {
    console.error("Error: There was trouble deleting this product.", error)
  }
};

module.exports = {
    addToCart,
    deleteProductFromCart,
    editCartQuantity
};