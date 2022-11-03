const { SlashCommandBuilder } = require("discord.js");
const db = require("quick.db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("Start your adventure!"),
  async execute(interaction, client) {
    let user = interaction.user;
    let name = user.username;
    let started = db.fetch(`started_${user.id}`);
    if (started === "yes") {
      return interaction.reply(`Hey ${user}, You have already started!`);
    }
    db.set(`started_${user.id}`, "yes");
    db.set(`pickaxe_${user.id}`, "Wood");
    db.set(`health_${user.id}`, "20");
    interaction.reply(`Congrats ${name} to start mining do /mine`);
  },
};
