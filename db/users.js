/* eslint-disable no-useless-catch */
const client = require("./client");
const bcrypt = require("bcrypt"); //Extra credit attempt!

// database functions
  async function createUser({ username, email, role, password }) {
      try {
      const SALT_COUNT = 10;
      const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
      const {
        rows: [user]
      } = await client.query(
        `
          INSERT INTO users(username, email, role, password)
          VALUES($1,$2,$3,$4)
          ON CONFLICT (username) DO NOTHING
          RETURNING *;
        `,
        [username, email, role, hashedPassword]
      );
  
      delete user.password;
  
      return user;
    } catch (error) {
      console.error(error)
    }
  }

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordsMatch) {
      delete user.password;
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(`
          SELECT *
          FROM users
          WHERE "id" = ${id};
        `);
    delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE username = $1;
      `,
      [username]
    );

    if (user === undefined) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

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

async function promoteUser(userId, role) {
  try {
    role === "user"
      ? await client.query(
          `
      UPDATE users
      SET role='admin'
      WHERE id=$1;
    `,
          [userId]
        )
      : await client.query(
          `
      UPDATE users
      SET role='user'
      WHERE id=$1;
    `,
          [userId]
        );

    const { rows } = await client.query(`
      SELECT * FROM users
    `);
    return rows;
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
  getUser,
  getUserById,
  getUserByUsername,
  getUsers,
  updateUser,
  promoteUser,
  deleteUser
}