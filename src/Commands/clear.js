const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "clear",
  description: "Clear Message!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const messageAmount = args[1];
    const amountParse = parseInt(messageAmount);

    const noAmount = new MessageEmbed()
      .setColor("RED")
      .setDescription(
        `🚫 Format salah! Silahkan masukan jumlah pesan yang ingin di hapus!`
      );
    const noNumber = new MessageEmbed()
      .setColor("RED")
      .setDescription(
        `🚫 ${messageAmount} bukan angka! Silahkan masukan format yang benar!`
      );
    const outValue = new MessageEmbed()
      .setColor("RED")
      .setDescription(
        `🚫 Maaf anda tidak dapat menghapus lebih dari 100 pesan!`
      );
    const goClearMsg = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`✅ Berhasil menghapus ${amountParse} pesan!`);

    if (!messageAmount) return message.reply({ embeds: [noAmount] });
    if (isNaN(messageAmount)) return message.reply({ embeds: [noNumber] });
    if (amountParse > 100) return message.reply({ embeds: [outValue] });

    message.channel.bulkDelete(amountParse);

    const clrMsg = await message.channel.send({ embeds: [goClearMsg] });
    setTimeout(() => clrMsg.delete(), 5000);
  },
});
