const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Returns a button!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('example')
            .setLabel('Click Me!')
            .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            content: 'This is a test button',
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}