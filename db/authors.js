const { client } = require("./client");

// async function createCategories({ name }) {
//     try {
//         const response = await client.query(`
//         INSERT INTO categories(name)
//         VALUES($1)
//         RETURNING *;
//         `,
//             [name]
//         );

//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }

// DATABASE FUNCTIONS
async function getAllAuthors() {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM authors
            `
        );
        return rows;
    } catch (error) {
    console.log("Error: Problem retrieving all authors...", error);
    }
}

async function getAuthorsById(id) {
    try {
      const {
        rows: [author],
      } = await client.query(`
      SELECT * FROM authors
      WHERE id = $1;
      `, [id]);
      console.log(author)
      return author;
    } catch (error) {
      console.error("Error: Problem getting authors by Id...", error);
    }
  }

async function getAuthorsByName(name) {
    try {
        const {
        rows: [author],
        } = await client.query(
        `
        SELECT * FROM authors
        WHERE name = $1;
        `, [name]);
        return author;
    } catch (error) {
        console.error("Error: Problem getting authors by name...", error);
    }
}

async function createAuthors({ name, description }) {
    try {
      const {
        rows: [author],
      } = await client.query(
        `
        INSERT INTO authors(name,description)
        VALUES($1,$2)
        ON CONFLICT (name) DO NOTHING 
        RETURNING *;
        `,
        [name, description]
      );
      return author;
    } catch (error) {
      console.error("Error: Problem creating authors...", error);
    }
  }

async function destroyAuthors(id) {
    try {
        await client.query(
            `
            DELETE FROM authors
            WHERE "id"=${id};
            `);
            const {
                rows: [author],
              } = await client.query(
                `
                DELETE FROM authors
                WHERE id=${id}
                RETURNING *;
                `
              );
        console.log(author, "Finished deleting author from list!")
    } catch (error) {
        console.error("Problem deleting authors...", error)
    }
}

module.exports = {
    getAllAuthors,
    getAuthorsById,
    getAuthorsByName,
    createAuthors,
    destroyAuthors
};