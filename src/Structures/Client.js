const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const Command = require("./Command.js");
const Event = require("./Event.js");
const fs = require("fs");

class Client extends Discord.Client {
  constructor() {
    super({ intents });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    this.commands = new Discord.Collection();
  }
  start(TOKEN) {
    fs.readdirSync("./src/Commands")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../Commands/${file}`);
        this.commands.set(command.name, command);
      });

    fs.readdirSync("./src/Events")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const event = require(`../Events/${file}`);
        /**
         * @type {Event}
         */
        this.on(event.event, event.run.bind(null, this));
      });

    this.login(TOKEN);
  }
}

module.exports = Client;
