module.exports = {
  data: {
    name: `example`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `This is an example button!`,
    });
  },
};
