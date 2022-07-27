const client = require("./client");

async function createCategories({ name }) {
    try {
        const response = await client.query(`
        INSERT INTO categories(name)
        VALUES($1)
        RETURNING *;
        `,
            [name]
        );
        return response;
    } catch (error) {
        throw error;
    }
}

async function deleteCategorie({ id }) {
    try {
        const { rows: [categories] } = await client.query(`
        DELETE FROM categories
        WHERE id=$1
        RETURNING *;
        `,
            [id]
        );
        return categories
    } catch (error) {
        throw error;
    };
};

async function getCategoryByName({ name }) {
    try {
        const { rows: [categories] } = await client.query(`
        SELECT * FROM categories
        WHERE name = $1;
        RETURNING *;
        `,
            [name]
        );

        return categories
    } catch (error) {
        throw error;
    };
};

module.exports = { createCategories, deleteCategorie, getCategoryByName }