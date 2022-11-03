const { SlashCommandBuilder } = require("discord.js");
const db = require("quick.db");
let ms = require("ms");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Gives you 400 coins every day!"),
  async execute(interaction, client) {
    let user = interaction.user;
    let emerald = db.fetch(`emerald_${user.id}`);
    const timeout = 864000000;
    const cooldown = await db.fetch(`dailycd_${user.id}`);

    if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
      const time = ms(timeout - (Date.now() - cooldown));
      interaction.reply(
        `Sorry you must wait **${time}** before getting another daily!`
      );
    } else {
      db.add(`emerald_${user.id}`, 400);
      interaction.reply(`Hey ${user}, You claimed your daily 400 emeralds!`);
      db.set(`dailycd_${user.id}`, Date.now());
    }
  },
};
