const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("quick.db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin and win some money!")
    .addNumberOption((option) =>
      option
        .setName("bet")
        .setDescription("How much do you want to bet?")
        .setAutocomplete(false)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("choice")
        .setDescription("Heads or Tails?")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ["Heads", "Tails"];
    const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    let bet = interaction.options.getNumber("bet");
    let choice = interaction.options.getString("choice");
    if (choice != undefined) {
      let user = interaction.user.username;
      let money = await db.fetch(`emerald_${interaction.user.id}`);

      if (bet > money)
        return interaction.reply(
          `Hey ${user}, You are betting more then you have!`
        );
      if (bet < 0)
        return interaction.reply(
          `Hey ${user}, You need to bet more then 0 emeralds`
        );

      var coins = ["Heads", "Tails"];
      coinz = coins[Math.floor(Math.random() * coins.length)];

      if (choice != coinz) {
        let lose = new EmbedBuilder()
          .setTitle(`Coin Flip`)
          .addFields(
            {
              name: `Your Choice:`,
              value: `${choice}`,
            },
            {
              name: `Computers:`,
              value: `${coinz}`,
            }
          )
          //.addField(`Your Choice:`, `${choice}`)
          //.addField(`Computers:`, `${coinz}`)
          .setDescription(`Dang You Lose ${bet} emerlads!`)
          .setColor("Red");
        interaction.reply({ embeds: [lose] });
        db.subtract(`emerald_${user.id}`, bet);
      } else {
        let win = new EmbedBuilder()
          .setTitle(`Coin Flip`)
          .addFields(
            {
              name: `Your Choice:`,
              value: `${choice}`,
            },
            {
              name: `Computers:`,
              value: `${coinz}`,
            }
          )
          .setDescription(`Congratulations You Win ${bet * 2} emerlads!`)
          .setColor("Green");
        interaction.reply({ embeds: [win] });
        db.add(`emerald_${user.id}`, bet * 2);
      }
    }
  },
};
