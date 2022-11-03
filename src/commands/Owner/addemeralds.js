const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("addemeralds")
    .setDescription("give someone emeralds!")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to give emeralds to")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("How much do you want to give?")
        .setAutocomplete(false)
        .setRequired(true)
    ),
  async execute(interaction, client) {
    let target = interaction.options.getUser('target');
    let amount = interaction.options.getNumber('amount');
    if (interaction.user.id !== "514972251469250584") {
       return interaction.reply("You cannot use this!");
    } else {
        db.add(`emerald_${target.id}`, amount)
        interaction.reply(`Hey ${interaction.user}, You gave ${target} ${amount} emerald(s)!`)
    }
  },
};
