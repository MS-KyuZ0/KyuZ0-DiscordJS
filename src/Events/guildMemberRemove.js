const Event = require("../Structures/Event");
const { MessageEmbed } = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {
  const logsEmbed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${member} just left the server!`)
    .setTimestamp();
  member.guild.channels.cache
    .get("886501059449745408")
    .send({ embeds: [logsEmbed] });
});
