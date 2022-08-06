const client = require('../client');
const { dropTables, createTables } = require("./seedTables");
const { createInitialProducts, createInitialUsers, createInitialOrders  } = require("./seedData");
async function rebuildDB() {
    console.log("Preparing rebuildDB");
    try {
        await dropTables()
        await createTables()
        await createInitialUsers()
        await createInitialProducts()
        await createInitialOrders()
    } catch (error) {
        console.log("Error during rebuildDB")
        console.error("Error: Problem with rebuildDB", error)
    }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());