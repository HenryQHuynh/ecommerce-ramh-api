const client = require("../client");

const getAuthorComics = async (author) => {
  try {
    const { rows } = await client.query(`
      SELECT * from products
      WHERE author = $1;
    `, [author]
    );
    return rows;
  } catch (error) {
    console.error("Error: Trouble getting author", error);
  }
};

module.exports = {getAuthorComics};