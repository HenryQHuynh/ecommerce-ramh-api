const http = require("http");
const chalk = require("chalk")
const app = require("./app")
const client = require('./client');


const PORT = process.env["PORT"] ?? 3000
const server = http.createServer(app)



server.listen(PORT, () => {
  console.log(
    chalk.blueBright("Server Operational. Listening on PORT:"),
    chalk.yellow(PORT),
    chalk.blueBright("Hey man, want to read a comicbook?")
  )
})

client.connect();