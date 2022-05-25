const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "ping",
  description: "Test Commands for Message!",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const messageResponse = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`🏓 *Bot Ping Latency*: \`${client.ws.ping}\`ms`);
    message.channel.send({ embeds: [messageResponse] });
  },
});
