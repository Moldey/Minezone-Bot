const {
    SlashCommandBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("adventure")
      .setDescription("Go on an adventure!"),
    async execute(interaction, client) {
      const modal = new ModalBuilder()
        .setCustomId(`adventuremodal`)
        .setTitle(`Go or Stay?`);
  
      const textInput = new TextInputBuilder()
        .setCustomId("GoOrStayInput")
        .setLabel("Do you want to Go or Stay?")
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
  
      modal.addComponents(new ActionRowBuilder().addComponents(textInput));
  
      await interaction.showModal(modal);
    },
  };
  