const client = require("./client");

const {
  createUser,
} = require('./users')

async function dropTables() {
    console.log('Hey man, Dropping All Tables...');
    try {
      
      // drop all tables, in the correct order
      await client.query(`
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS products; 
        DROP TABLE IF EXISTS authors;
        DROP TABLE IF EXISTS categories;
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
        CREATE TABLE categories (
          distId SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL
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
          "catId" INTEGER REFERENCES categories(distId)
        );
        CREATE TABLE orders (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
        );
        CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
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

async function rebuildDB() {
    try {
        await dropTables()
        await createTables()
        await createInitialUsers()
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