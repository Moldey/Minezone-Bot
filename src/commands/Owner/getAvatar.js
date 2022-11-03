const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("getAvatar")
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {
    if (interaction.user.id !== "514972251469250584") {
      interaction.reply("You cannot use this!");
    } else {
      await interaction.reply({
        content: `${interaction.targetUser.displayAvatarURL()}`,
      });
    }
  },
};
