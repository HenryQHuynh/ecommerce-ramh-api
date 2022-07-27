/* eslint-disable no-useless-catch */
const client = require("./client");
const bcrypt = require("bcrypt"); //Extra credit attempt!

// database functions
  async function createUser({ username, password }) {
      try {
      const SALT_COUNT = 10;
      const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
      const {
        rows: [user]
      } = await client.query(
        `
          INSERT INTO users(username, password)
          VALUES($1,$2)
          ON CONFLICT (username) DO NOTHING
          RETURNING *;
        `,
        [username, hashedPassword]
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
    throw error;
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
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername
}