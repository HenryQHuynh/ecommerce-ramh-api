const bcrypt = require("bcrypt");
const { query } = require("express");
const client = require("./client");

async function createUser({ username, password, user }) {
    const hashPassword = await bcrypt.hash(password, 10);
    try {
        if (user) {
            const response = await client.query(`
            INSERT INTO users( username, password)
            VALUES($1, $2)
            RETURNING *;
            `),
                [username, hashPassword]
        } else {
            const response = await client.query(`
            INSERT INTO users(username,password)
            VALUES($1,$2)
            RETURNING *;
            `);
        }
        delete user.password;
        return user;
    } catch (error) {
        console.error(error)
    }
}

const getAllUsers = async () => {
    try {
        const response = await client.query(`
        SELECT * FROM users;
        `);
        const isers = response.rows;
        return users;
    } catch (error) {
        console.error(error);
    }
};

async function getUserByUsername({ username }) {
    try {
        const response = await client.query(`
        SELECT * FROM users
        WHERE username =$1;
        `,
            [username]
        );
        const user = response.rows[0];
        return users;
    } catch (error) {
        throw error;
    }
}

const getUser = async ({ username, password }) => {
    try {
        const response = await client.query(`
        SELECT * FROM users
        WHERE username = $1
        `,
            [username]
        );
        const user = response.rows[0];

        if (await bcrypt.compare(password, user.password)) {
            delete user.password;
            return user;
        }
    } catch (error) {
        throw error;
    }
};
async function getUserById(id) {
    try {
        const response = await client.query(`
        SELECT * FROM users
        WHERE id=$1
        `,
            [id]
        );
        return response.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByUsername,
    getUser,
    getUserById,
    getAllUsers
};