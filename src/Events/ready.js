const Event = require("../Structures/Event");
const chalk = require("chalk");
// const { MongoClient } = require("mongodb");

const mongoUri = "mongodb://localhost:27017";
// const mongoClient = new MongoClient(mongoUri);

module.exports = new Event("ready", async (client) => {
  // await mongoClient
  //   .connect()
  //   .then(
  //     console.log(chalk.yellow("[DATABASE]"), "Database has been connected!")
  //   );
  console.log(chalk.yellow("[SYSTEM]"), "Bot has been login!");
  client.user.setActivity("Cyber Crime!", { type: "WATCHING" });
});
