const client = require('../client');

//Admin Functions
const getAllUsers = async () => {
    try {
        const { rows } = await client.query(
            `
            SELECT id, "userEmail", "isAdmin", "isActive" FROM users;
            `
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem getting all users...", error);
    }
};

const removeUser = async (userId) => {
    try {
        const { rows: check } = await client.query(
            `
            SELECT "isAdmin" FROM users
            WHER id = $1;
            `,
            [userId]
        );
        if (check[0].isAdmin) {
            return [];
        } else {
            const { rows } = await client.query(
                `
                UPDATE users SET "isActive" = false
                WHERE id = $1
                RETURNING id;
                `,
                [userId]
            );
            return rows;
        }
    } catch (error) {
    console.error("Error: Problem removing user...", error);
    }
};

const Administrator = async (userId) => {
    try {
        const { rows: check } = await client.query(
            `
            SELECT "isAdmin", "isActive" FROM users
            WHERE id = $1;
            `,
            [userId]
        );
        if (check[0].isAdmin || !check[0].isActive)
        return[];
        else {
            const { rows } = await client.query(
                `
                UPDATE users
                SET "isAdmin" = true
                WHERE id = $1
                RETURNING id;
                `,
                [userId]
            );
            return rows;
        }
    } catch (error) {
    console.error("Error: Problem setting up Administrator...", error)
    }
};

// Admin Order Function
const getAllOrders = async () => {
    try {
        const { rows } = await client.query(
            `
            SELECT user_orders.*, users."userEmail" FROM user_orders
            JOIN users ON user_orders."userId" = users.id;
            `
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem getting all orders...", error)
    }
};

// Admin Product Functions
const createNewProduct = async ({
    title,
    author,
    publisher,
    imageLink,
    genre,
    description,
    price,
    inventory
}) => {
    try {
        const { rows } = await client.query(
            `
            INSERT INTO products(title, author, publisher, "imageLink", genre, description, price, inventory)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
            `,
            [
            title,
            author,
            publisher,
            imageLink,
            genre,
            description,
            price,
            inventory,
            ]
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem creating a new product...", error)
    }
};

const editProduct = async ({productId, ...fields}) => {
    const {
        title,
        author,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory
    } = fields;
    try {
        const { rows } = await client.query(
            `
            UPDATE products SET
                title = COALESCE($1, title),
                author = COALESCE($2, author),
                publisher = COALESCE($3, publisher),
                "imageLink" = COALESCE($4, "imageLink"),
                genre = COALESCE($5, genre),
                description = COALESCE($6, description),
                price = COALESCE($7, price),
                inventory = COALESCE($8, inventory)
                WHERE id = $10
                RETURNING *;
            `,
            [
            title,
            author,
            publisher,
            imageLink,
            genre,
            description,
            price,
            inventory,
            productId
            ]
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem creating a editing product...", error)    
    }
}

const removeProduct = async (productId) => {
    try {
        const { rows } = await client.query(
            `
            UPDATE products
            SET "isActive" = false
            WHERE id = $1
            RETURNING id;
            `,
            [productId]
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem removing a product...", error);
    }
}

module.exports = {
    getAllUsers,
    removeUser,
    Administrator,
    getAllOrders,
    createNewProduct,
    editProduct,
    removeProduct
};