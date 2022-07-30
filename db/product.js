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

async function createProduct({
    name,
    description,
    photoUrl,
    authorId,
    distId,
    department,
    price,
    inStock,
    quantity,
    count,
}) {
    try {
        const {
            rows: [product],
        } = await client.query(
            `
        INSERT INTO products(name, description, "photoUrl", authorId, distId, quantity, price, department, "inStock",  count)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `,
            [name, description, photoUrl, authorId, distId, quantity, price, department, inStock, count]
        );

        return product;
    } catch (error) {
        console.error("Error: Problem creating product...")
    }
}

async function updateProduct({ id, description, authorId, distId }) {
    const fields = { description, authorId, distId };

    const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(", ");

    if (setString.length === 0) {
        return;
    }
    try {
        const {
            rows: [product],
        } = await client.query(
            `
            UPDATE products
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
            `,
            Object.values(fields)
        );
        return product;
    } catch (error) {
        console.error("Problem updating products!", error);
    }
}

async function addCount(id) {
    const product = await getProductById(id);
  
    try {
      const { rows } = await client.query(
        `
      UPDATE products
      SET count = $1
      WHERE id = $2
      RETURNING *
      `,
        [product.count + 1, id]
      );
      return rows;
    } catch (error) {
        console.error("Problem updating products!", error);
    }
  }

  async function subtractCount(id) {
    const product = await getProductById(id);
  
    try {
      const { rows } = await client.query(
        `
      UPDATE products
      SET count = $1
      WHERE id = $2
      RETURNING *
      `,
        [product.count - 1, id]
      );
      return rows;
    } catch (error) {
        console.error("Problem updating products!", error);
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
    destroyProduct,
    addCount,
    subtractCount
};