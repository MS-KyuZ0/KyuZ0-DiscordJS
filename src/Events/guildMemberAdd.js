const Event = require("../Structures/Event");
const { MessageEmbed } = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
  const MemberRole1 = member.guild.roles.cache.get("886190598724395018");
  member.roles.add(MemberRole1);

  const welcomeEmbed1 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("WELCOME", member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(
      `Welcome ${member} to the **${member.guild.name}** discord server! Don't forget to check <#886188145345953812>\n\nLatest Member Count: **${member.guild.memberCount}**`
    )
    .setFooter(
      `${member.user.tag}`,
      member.user.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  member.guild.channels.cache
    .get("885936150022340641")
    .send({ content: `${member}`, embeds: [welcomeEmbed1] });

  const logsEmbed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${member} just joined the server!`)
    .setTimestamp();
  member.guild.channels.cache
    .get("886501059449745408")
    .send({ embeds: [logsEmbed] });
});
