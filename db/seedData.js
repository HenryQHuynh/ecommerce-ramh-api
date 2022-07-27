const client = require("./client");

const {
  createUser,
  createDistributor,
  createAuthors,
} = require('./')

async function dropTables() {
    console.log('Hey man, Dropping All Tables...');
    try {
      
      // drop all tables, in the correct order
      await client.query(`
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS cart;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS products; 
        DROP TABLE IF EXISTS authors;
        DROP TABLE IF EXISTS distributors;
        DROP TABLE IF EXISTS users;
        `);
        console.log("Hey man, we did the thing.")
    } catch (error) {
      console.error("Error dropping tables");
      throw error;
    }
  }
  
  async function createTables() {
    try {
      console.log("Starting to build tables...");
      // create all tables, in the correct order
      await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
        CREATE TABLE distributors (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
        );
        CREATE TABLE authors (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
        );
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL,
          "authorId" INTEGER REFERENCES authors(id),
          "distId" INTEGER REFERENCES distributors(id)
        );
        CREATE TABLE orders (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL,
          "productId" INTEGER REFERENCES products(id),
          count INTEGER
        );
        CREATE TABLE carts (
          id SERIAL PRIMARY KEY
        );
        CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL,
          "productId" INTEGER REFERENCES products(id)
        );
        `);
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  }

async function createInitialUsers() {
  console.log("Starting to create users...")
  try {
    const usersToCreate = [
      { username: "Max", password: "HatesZoom" },
      { username: "Ryan", password: "BenIsTheBest" },
      { username: "Aandrea", password: "BootStrap4Lyfe" },
    ]
    const users = await Promise.all(usersToCreate.map((createUser)))

    console.log("Users created:")
    console.log(users)
    console.log("Finished creating users!")
  } catch (error) {
    console.log("Error creating users!")
    throw error
  }
}

async function createInitialDistributor() {
  try {
    console.log("Starting to create distributors...")

    const distributorsToCreate = [
      {
        name: "MARVEL",
        description: "Marvel Comics is a brand name and primary imprint of Marvel Worldwide, Inc.!",
      },
      {
        name: "DC Comics",
        description: "DC Comics, Inc. is an American comic book publisher and the flagship unit of DC Entertainment.",
      },
    ]
    const distributors = await Promise.all(distributorsToCreate.map(createDistributor))

    console.log("distributors created:")
    console.log(distributors)

    console.log("Finished creating distributors!")
  } catch (error) {
    console.error("Error creating distributors!")
    throw error
  }
}

async function createInitialAuthors() {
  try {
    console.log("Starting to create authors...")

    const authorsToCreate = [
      {
        name: "Scott Snyder",
        description: "Scott Snyder is an American writer. He is known for his 2006 short story collection Voodoo Heart, and his comic book writing, including American Vampire, Detective Comics, Batman, Wytches, Swamp Thing, and Justice League.",
      },
      {
        name: "Stan Lee",
        description: "Stan Lee was an American comic book writer, editor, publisher, and producer. He rose through the ranks of a family-run business called Timely Publications which would later become Marvel Comics.",
      },
    ]
    const authors = await Promise.all(authorsToCreate.map(createAuthors))

    console.log("authors created:")
    console.log(authors)

    console.log("Finished creating authors!")
  } catch (error) {
    console.error("Error creating authors!")
    throw error
  }
}

async function rebuildDB() {
    try {
        await dropTables()
        await createTables()
        await createInitialUsers()
        await createInitialDistributor()
        await createInitialAuthors()
    } catch (error) {
        console.log("Error during rebuildDB")
        throw error
    }
}

module.exports = {
    rebuildDB,
    dropTables,
    createTables
}