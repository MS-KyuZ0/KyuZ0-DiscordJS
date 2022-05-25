require("dotenv").config();
const Client = require("./Structures/Client");
const client = new Client();

client.start(process.env.TOKEN);
