const client = require("../client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

// database functions
const createUser = async({ userEmail, password, isAdmin = false}) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    const { rows } = await client.query(
      `
      INSERT INTO users("userEmail", password, "isAdmin")
      VALUES ($1, $2, $3)
      RETURNING id, "userEmail", "isAdmin", "isActive";
      `,
      [userEmail, hashedPassword, isAdmin]
    );
    return rows[0];
  } catch (error) {
    console.error("Error: Problem creating user...", error)
  }
};

const verifyUser = async (userEmail, password) => {
  try {
    const { rows } = await client.query(
      `
      SELECT id, "userEmail", password, "isAdmin"
      FROM users
      WHERE "userEmail" = $1
      `,
      [userEmail]
    );
    const match = await bcrypt.compare(password, rows[0].password);
    return match ? rows : false;
  } catch (error) {
    console.error("Error: Problem verifying user...", error)
  }
};

const getUserByEmail = async (userEmail) => {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE "userEmail" = $1;
      `,
      [userEmail]
    );
    return rows;
  } catch (error) {
    console.error("Error: Problem getting user by email...", error)
  }
};

async function getUserById(userId) {
  try {
    const { rows } = await client.query(
      `
      SELECT id, "userEmail", "isAdmin"
      FROM users
      WHERE "id" = $1;
      `,
      [userId]
    );
    return rows[0];
  } catch (error) {
    console.error("Error: Problem getting user by Id...", error);
  }
}

const getUserProfileById = async(userId) => {
  try {
    const { rows: user } = await client.query(
      `
      SELECT id, "userEmail", "isAdmin" FROM users
      WHERE id = $1;
      `,
      [userId]
    );
    const { rows: userOrders } = await client.query(
      `
      SELECT id FROM user_orders
      WHERE "userId" = $1;
      `,
      [userId]
    );

    let arr = [];
    for (const order of userOrders) {
      const { rows: userOrder } = await client.query(
        `
        SELECT id AS "orderId", "orderComplete", "orderPrice"  FROM user_orders
        WHERE id = $1;
        `,
        [order.id]
      )
      const { rows: orderDetails } = await client.query(
        `
        SELECT order_details."productId", order_details."productPrice", order_details.quantity, products.title, products."imageLink"
        FROM order_details JOIN products
        ON order_details."productId" = products.id
        WHERE "orderId" = $1;
        `,
        [order.id]
      )
      const submitOrder = {
        ...userOrder[0],
        orderDetails,
      }
      arr.push(submitOrder);
    }
    const userProfile = {
      ...user[0],
      orders: arr,
    };
    console.log("User Profile: ", userProfile);
    return userProfile;
  } catch (error) {
    console.error("Error: Problem getting user profile...", error);
  }
};

const getUserCartById = async (userId) => {
  try {
    const { rows: order } = await client.query(
      `
      SELECT id AS "orderId", "orderPrice" FROM user_orders
      WHERE "userId" = $1
      AND "orderComplete" = false;
      `,
      [userId]
    )
    if (order.length) {
      const { rows: details } = await client.query(
        `
        SELECT 
          order_details."productId",
          order_details."productPrice",
          order_details.quantity,
          products.title,
          products."imageLink"
        FROM order_details JOIN products
        ON order_details."productId" = products.id
        WHERE "orderId" = $1;
        `,
        [order[0].orderId]
      )
      let arr = [];
      for (const item of details) {
        arr.push(item);
      }
      const userCart = {
        ...order[0],
        orderDetails: arr,
      }
      return userCart;
    } else return order;
  } catch (error) {
    console.error("Error: Problem getting user cart by Id...", error);
  }
};

// async function getUser({ username, password }) {
//   try {
//     const user = await getUserByUsername(username);
//     const hashedPassword = user.password;
//     const passwordsMatch = await bcrypt.compare(password, hashedPassword);

//     if (passwordsMatch) {
//       delete user.password;
//       return user;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// grab all users
async function getUsers() {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM users
      `
    );
    return rows;
  } catch (error) {
    console.error(error);
  }
}

// Update User
async function updateUser(fieldsObject, userId) {
  try {
    const retrievedUser = await getUserById(userId);

    if (retrievedUser === null) {
      throw new Error("User with that id does not exist.");
    }
    const setString = Object.keys(fieldsObject)
      .map((key, index) => `"${key}"=$${index + 1}`)
      .join(", ");

    const {
      rows: [user],
    } = await client.query(
      `
        UPDATE users
        SET ${setString}
        WHERE id = ${userId}
        RETURNING *
      `,
      Object.values(fieldsObject)
    );
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(userId) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
      DELETE FROM orders
      WHERE id = $1
      RETURNING *
    `,
      [userId]
    );

    const {
      rows: [cart],
    } = await client.query(
      `
      DELETE FROM cart
      WHERE id = $1
      RETURNING *
    `,
      [userId]
    );
    const {
      rows: [user],
    } = await client.query(
      `
      DELETE FROM users
      WHERE id = $1
      RETURNING *
    `,
      [userId]
    );

    return { order, cart, user };
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createUser,
  verifyUser,
  getUserByEmail,
  getUserById,
  getUserProfileById,
  getUserCartById,
  getUsers,
  updateUser,
  deleteUser
  // getUser,
}