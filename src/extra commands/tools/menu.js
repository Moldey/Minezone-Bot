const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns a select menu!'),
    async execute(interaction, client) {
        const menu = new SelectMenuBuilder()
            .setCustomId(`examplemenu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(new SelectMenuOptionBuilder({
                label: `Option 1`,
                value: `You selected option 1`
            }), new SelectMenuOptionBuilder({
                label: `Option 2`,
                value: `You selected option 2`
            }), new SelectMenuOptionBuilder({
                label: `Option 3`,
                value: `You selected option 3`
            }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}