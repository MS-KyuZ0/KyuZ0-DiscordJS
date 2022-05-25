const Event = require("../Structures/Event");
const { PREFIX } = require("../config.json");
const { MessageEmbed } = require("discord.js");
// const { MongoClient } = require("mongodb");

// const mongoUri = "mongodb://localhost:27017";
// const mongoClient = new MongoClient(mongoUri);
// const warnDB = mongoClient.db("warningsystem");
// const warningSystem = warnDB.collection("warninguser");

module.exports = new Event("messageCreate", (client, message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.substring(PREFIX.length).split(/ +/);
  const command = client.commands.find((cmd) => cmd.name == args[0]);
  const permission = message.member.permissions.has(command.permission, true);

  const permissionEmbed = new MessageEmbed()
    .setColor("RED")
    .setDescription(
      `🚫 Anda tidak memiliki izin untuk menjalankan perintah ini!`
    );

  if (!permission) return message.reply({ embeds: [permissionEmbed] });

  command.run(message, args, client);
  // mongoClient
});
