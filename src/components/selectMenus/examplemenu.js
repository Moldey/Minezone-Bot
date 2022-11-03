module.exports = {
  data: {
    name: `examplemenu`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `You selected: ${interaction.values[0]}`,
    });
  },
};
