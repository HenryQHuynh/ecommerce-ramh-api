const {
  createProduct,
  createUser,
  getAllProducts,
  createUserOrder,
  getAllOrders,
  createOrderDetails,
  // createAuthors,
} = require('../db');

const { productsData } = require("./productData");

async function createInitialUsers() {
  console.log("Starting to create users...")
  try {
    const usersToCreate = [
      { userEmail: "MexiMax@gmail.com", password: "HatesZoom" },
      { userEmail: "RyanClassroom30@hotmail.com", password: "BenIsTheBest", isAdmin: true },
      { userEmail: "BootStrapAandrea@outlook.com", password: "BootStrap4Lyfe" },
      { userEmail: "admin", password: "adminadmin", isAdmin: true }
    ]
    const users = await Promise.all(usersToCreate.map((createUser)))

    console.log("Users created:")
    console.log(users)
    console.log("Finished creating users!")
  } catch (error) {
    console.error("Error creating users!", error)
  }
}

async function createInitialProducts() {
  try {
    console.log("Starting to add comics to 'products' table!");
    const assignGenre = () => {
      const genres = [
        "Superhero",
        "Manga",
        "Science-Fiction",
        "Romance",
        "Horror",
        "Comedy",
        "Fantasy",
        "Mystery",
      ];
      return genres[Math.floor(Math.random() * 8)];
    };
    const publicRating = () => Number((2 + Math.random() * 3).toFixed(1));  
    const assignInventory = () => Math.floor(Math.random() * 91) + 10;
    const addKeysToProductsData = productsData.map((product) => {
      return {
        ...product,
        genre: assignGenre(),
        rating: publicRating(),
        inventory: assignInventory(),
      };
    });
    const products = await Promise.all(addKeysToProductsData.map(createProduct));
    console.log(
      "Comics created. Current count: 6. Some sample below:",
      products[Math.floor(Math.random() * 6)]
    );
  } catch (error) {
    console.error("Error creating products!", error)
  }
}

async function createInitialOrders() {
  console.log("Starting to add orders to user_orders...")
  try {
    const [product1, product2, product3, product4, product5, product6] = await getAllProducts();
    const data = [
      {
        userId: 1,
        orderComplete: true,
        orderPrice:
          Number(product1.price) * 2 +
          Number(product2.price)
      },
      {
        userId: 1,
        orderComplete: true,
        orderPrice:
          Number(product3.price) * 2 +
          Number(product4.price)
      },
      {
        userId: 1,
        orderComplete: true,
        orderPrice:
          Number(product5.price) * 4 +
          Number(product6.price)
      }
    ];
    const newOrders = await Promise.all(data.map(createUserOrder));
    console.log("New orders added to user_orders: ", newOrders);
    const [userOrder1, userOrder2, userOrder3] = await getAllOrders();
    const detailsData = [
      {
        orderId: userOrder1.id,
        productId: product1.id,
        productPrice: product1.price,
        quantity: 2,
      },
      {
        orderId: userOrder1.id,
        productId: product2.id,
        productPrice: product2.price,
        quantity: 1,
      },
      {
        orderId: userOrder2.id,
        productId: product4.id,
        productPrice: product4.price,
        quantity: 2,
      },
      {
        orderId: userOrder2.id,
        productId: product5.id,
        productPrice: product5.price,
        quantity: 1,
      },
      {
        orderId: userOrder3.id,
        productId: product6.id,
        productPrice: product6.price,
        quantity: 4,
      },
      {
        orderId: userOrder3.id,
        productId: product3.id,
        productPrice: product3.price,
        quantity: 1,
      },
    ];
    const newOrdersDetails = await Promise.all(
      detailsData.map(createOrderDetails)
    );
    console.log("New details added to order_details table: ", newOrdersDetails);
  } catch (error) {
    console.error("Error: Problem preparing order details...", error)
  }
}

// async function createInitialAuthors() {
//   try {
//     console.log("Starting to create authors...")

//     const authorsToCreate = [
//       {
//         name: "Scott Snyder",
//         description: "Scott Snyder is an American writer. He is known for his 2006 short story collection Voodoo Heart, and his comic book writing, including American Vampire, Detective Comics, Batman, Wytches, Swamp Thing, and Justice League.",
//       },
//       {
//         name: "Stan Lee",
//         description: "Stan Lee was an American comic book writer, editor, publisher, and producer. He rose through the ranks of a family-run business called Timely Publications which would later become Marvel Comics.",
//       },
//     ]
//     const authors = await Promise.all(authorsToCreate.map(createAuthors))

//     console.log("authors created:")
//     console.log(authors)

//     console.log("Finished creating authors!")
//   } catch (error) {
//     console.error("Error creating authors!")
//     throw error
//   }
// }



module.exports = {
  createInitialUsers,
  createInitialProducts,
  createInitialOrders,
  // createInitialAuthors
}