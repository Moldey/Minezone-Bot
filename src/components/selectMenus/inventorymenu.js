module.exports = {
    data: {
      name: `inventorymenu`,
    },
    async execute(interaction, client) {
      await interaction.reply({
        content: `You selected: ${interaction.values[0]}`,
        fetchReply: true,
      });
    },
  };
  