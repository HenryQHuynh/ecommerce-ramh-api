require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const chalk = require("chalk")
const stripe = require("stripe")(process.env.SECRETPRICEKEY);
const express = require("express");
const server = express();

server.use(morgan("dev"));
server.use(
  cors({
    origin: [process.env.FE_URL],
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

// Stripe Route
server.post("/create-checkout-session", async (req, res) => {
  const { orderPrice, orderId, userId } = req.body;
  const amount = Math.round(orderPrice * 100);
  let success_url;
  let cancel_url;
  if (userId) {
    success_url = `${process.env.FE_URL}/${userId}/order?success${orderId}`;
    cancel_url = `${process.env.FE_URL}/${userId}/order?canceled`;
  }
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stand-in Order",
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url,
    cancel_url,
  });
  res.json({ url: session.url });
});

// API Routes
const apiRouter = require("./api");
server.use("/api", apiRouter);

apiRouter.use("/unknown", (req, res) => {
  res.status(404).send({ message: "404 Page Not Found! Please try again..." });
});

apiRouter.use((error, req, res, next) => {
  if (res.status < 400) res.status(500);
  res.send({
    error: "I'm Sorry Dave, I'm Afraid I Can't Do That...",
    name: error.name,
    message: error.message,
  });
});

const PORT = process.env["PORT"] ?? 3000

const client = require("./client");

server.listen(PORT, () => {
  console.log(
        chalk.blueBright("Server Operational: Listening on PORT:"),
        chalk.yellow(PORT),
        chalk.blueBright("Hey man, want to read a comicbook?")
      )
});

client.connect();

module.exports = server;