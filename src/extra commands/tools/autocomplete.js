const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autocomplete")
    .setDescription("Returns autocomplete!")
    .addStringOption((option) =>
      option
        .setName("color")
        .setDescription("a color based on autocomplete")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ["Green", "Blue", "Orange", "Red", "Purple", "Yellow"];
    const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    const option = interaction.options.getString("color");
    await interaction.reply({ content: `You told me, ${option}` });
  },
};
