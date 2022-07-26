const client = require("./client");

// DATABASE FUNCTIONS
async function getAllProducts() {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM products
            `
        );
        return rows;
    } catch (error) {
    console.log("Error: Problem retrieving all products...", error);
    }
}

async function getProductById(id) {
    try {
      const {
        rows: [product],
      } = await client.query(`
      SELECT * FROM products
      WHERE id = $1;
      `, [id]);
      console.log(product)
      return product;
    } catch (error) {
      console.error("Error: Problem getting products by Id...", error);
    }
  }

async function getProductByName(title) {
    try {
        const {
            rows: [product],
        } = await client.query(
        `
        SELECT * FROM products
        WHERE title = $1;
        `, [title]);
        return product;
    } catch (error) {
        console.error("Error: Problem getting product title...", error);
    }
}

async function createProduct({ title, description, authorId, distId }) {
    try {
        const {
            rows: [product],
        } = await client.query(
        `
        INSERT INTO products (title, description, "authorId", "distId")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
        [ title, description, authorId, distId ]
        );
        return product;
    } catch (error) {
        console.error("Error: Problem creating product...")
    }
}

// Need to implement Admin capabilities ++ Booleans ++Admin profile?
async function updateProduct({ id, title, description, price, quantity }) {
    try {
        if (title) {
            await client.query(`
            UPDATE products
            SET title = $1
            WHERE id = $2;
            `,
                [title, id]
            );
        }
        if (description) {
            await client.query(`
            UPDATE products
            SET description = $1
            WHERE id = $2;
            `,
                [description, id]
            );
        }
        if (price) {
            await client.query(`
            UPDATE products
            SET price = $1
            WHERE id = $2;
            `,
                [price, id]
            );
        }
        if (quantity) {
            await client.query(`
            UPDATE products
            SET quantity = $1
            WHERE id = $2;
            `,
                [quantity, id]
            );
        }
        const product = await getProductById(id);
        return product;
    } catch (error) {
        console.error(error);
    }
}

const destroyProduct = async (id) => {
    await client.query(`
    DELETE FROM reviews WHERE product_id = $1;
    `,
        [id]
    );
    await client.query(`
    DELETE FROM product_orders WHERE products_id = $1;
    `,
        [id]
    );
    const deletedProduct = await client.query(`
    DELETE FROM products WHERE id = $1
    RETURNING *;
    `,
        [id]
    );
    return deletedProduct;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct,
    destroyProduct
};