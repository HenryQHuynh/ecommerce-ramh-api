const client = require("../client");

const dropTables = async() => {
    try {
        // drop all tables, in the correct order
        console.log('Hey man, Dropping All Tables...');
        await client.query(`
        DROP TABLE IF EXISTS order_details;
        DROP TABLE IF EXISTS user_orders;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        `);
        console.log("Hey man, we are dropping tables.")
    } catch (error) {
        console.error("Error dropping tables", error);
    }
}

const createTables = async() => {
    try {
        console.log("Starting to build tables...");
        // create all tables, in the correct order
        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            "userEmail" varchar(255) unique not null,
            password VARCHAR(255) NOT NULL,
            "isAdmin" BOOLEAN DEFAULT FALSE,
            "isActive" BOOLEAN DEFAULT TRUE
        );
        CREATE TABLE products(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255),
            publisher VARCHAR(255) NOT NULL,
            "imageLink" TEXT NOT NULL,
            genre VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            rating NUMERIC,
            price NUMERIC NOT NULL,
            inventory SMALLINT NOT NULL,
            "isActive" BOOLEAN DEFAULT TRUE
        );
        CREATE TABLE user_orders(
            id SERIAL PRIMARY KEY,
            "userId" SMALLINT REFERENCES users(id) NOT NULL,
            "orderComplete" BOOLEAN DEFAULT TRUE,
            "orderPrice" NUMERIC(6,2) NOT NULL
        );
        CREATE TABLE order_details(
            id SERIAL PRIMARY KEY,
            "orderId" SMALLINT REFERENCES user_orders(id) NOT NULL,
            "productId" SMALLINT REFERENCES products(id) NOT NULL,
            "productPrice" NUMERIC(5,2),
            quantity SMALLINT NOT NULL
        );
    `);
        console.log("Finished building tables!");
    } catch (error) {
        console.error("Error building tables!", error);
    }
}

module.exports = { dropTables, createTables };