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
async function getAllDistributors() {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM distributors
            `
        );
        return rows;
    } catch (error) {
    console.log("Error: Problem retrieving all distributors...", error);
    }
}

async function getDistributorsById(id) {
    try {
      const {
        rows: [distributor],
      } = await client.query(`
      SELECT * FROM distributors
      WHERE id = $1;
      `, [id]);
      console.log(distributor)
      return distributor;
    } catch (error) {
      console.error("Error: Problem getting distributors by Id...", error);
    }
  }

async function getDistributorsByName(name) {
    try {
        const {
        rows: [distributor],
        } = await client.query(
        `
        SELECT * FROM distributors
        WHERE name = $1;
        `, [name]);
        return distributor;
    } catch (error) {
        console.error("Error: Problem getting distributors by name...", error);
    }
}

// Do I need to create a attachDistributorsToProducts function... I wonder...

async function createDistributors({ name, description }) {
    try {
      const {
        rows: [distributor],
      } = await client.query(
        `
        INSERT INTO distributors(name,description)
        VALUES($1,$2)
        ON CONFLICT (name) DO NOTHING 
        RETURNING *;
        `,
        [name, description]
      );
      return distributor;
    } catch (error) {
      console.error("Error: Problem creating distributor...", error);
    }
  }

async function destroyDistributors(id) {
    try {
        await client.query(
            `
            DELETE FROM distributors
            WHERE "id"=${id};
            `);
            const {
                rows: [distributor],
              } = await client.query(
                `
                DELETE FROM distributors
                WHERE id=${id}
                RETURNING *;
                `
              );
        console.log(distributor, "Finished deleting distributor from list!")
    } catch (error) {
        console.error("Problem deleting distributors...", error)
    }
}

module.exports = {
    getAllDistributors,
    getDistributorsById,
    getDistributorsByName,
    createDistributors,
    destroyDistributors
};