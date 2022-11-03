const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const db = require("quick.db");
const slotItems = [
  ":grapes:",
  ":watermelon:",
  ":orange_circle:",
  ":apple:",
  ":fork_and_knife:",
  ":strawberry:",
  ":cherries:",
];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("slots")
    .setDescription("Play some slots and loose all your money!")
    .addNumberOption((option) =>
      option
        .setName("bet")
        .setDescription("How much do you want to bet?")
        .setAutocomplete(false)
        .setRequired(true)
    ),
  async execute(interaction, client) {
    interaction.reply('work in progress')
  },
};
