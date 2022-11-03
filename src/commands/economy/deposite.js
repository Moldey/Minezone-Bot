const { SlashCommandBuilder } = require("discord.js");
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("deposite")
    .setDescription("Put stuff in your ender chest!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("What type of item do you want to put in your ender chest?")
        .setAutocomplete(true)
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("How much do you want to put in?")
        .setAutocomplete(false)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = [  
      "All",
      "Stone",
      "Coal",
      "Iron",
      "Lapis",
      "Gold",
      "Diamond",
      "Netherite",
      "Emerald"
    ];
    const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    let type = interaction.options.getString('type');
    let amount = interaction.options.getNumber('amount');
    
    // inv
    let user = interaction.user;
    let stone = db.fetch(`stone_${user.id}`);
    let coal = db.fetch(`coal_${user.id}`);
    let iron = db.fetch(`iron_${user.id}`);
    let lapis = db.fetch(`lapis_${user.id}`);
    let gold = db.fetch(`gold_${user.id}`);
    let diamond = db.fetch(`diamond_${user.id}`);
    let netherite = db.fetch(`netherite_${user.id}`);
    let emerald = db.fetch(`emerald_${user.id}`);

    // ender chest
    let stoneec = db.fetch(`stoneec_${user.id}`);
    let coalec = db.fetch(`coalec_${user.id}`);
    let ironec = db.fetch(`ironec_${user.id}`);
    let lapisec = db.fetch(`lapisec_${user.id}`);
    let goldec = db.fetch(`goldec_${user.id}`);
    let diamondec = db.fetch(`diamondec_${user.id}`);
    let netheriteec = db.fetch(`netheriteec_${user.id}`);
    let emeraldec = db.fetch(`emec_${user.id}`);

    // Pickaxe and Pet
    let pick = db.fetch(`pickaxe_${user.id}`);
    let pet = db.fetch(`pet_${user.id}`);

    // inv
    if (stone === null) stone = 0;
    if (coal === null) coal = 0;
    if (iron === null) iron = 0;
    if (lapis === null) lapis = 0;
    if (gold === null) gold = 0;
    if (diamond === null) diamond = 0;
    if (netherite === null) netherite = 0;
    if (emerald === null) emerald = 0;
    if (pick === null) pick = "Not Started";
    if (pet === null) pet = "No Pet";

    // ender chest
    if (stoneec === null) stoneec = 0;
    if (coalec === null) coalec = 0;
    if (ironec === null) ironec = 0;
    if (lapisec === null) lapisec = 0;
    if (goldec === null) goldec = 0;
    if (diamondec === null) diamondec = 0;
    if (netheriteec === null) netheriteec = 0;
    if (emeraldec === null) emeraldec = 0;
    //start of command
    if (type === "Emerald") {
      if (amount > emerald) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`emerald_${user.id}`, amount);
        db.add(`emec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type}(s) in your enderchest!`
        );
      }
    } else if (type === "Stone") {
      if (amount > stone) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`stone_${user.id}`, amount);
        db.add(`stoneec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Coal") {
      if (amount > coal) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`coal_${user.id}`, amount);
        db.add(`coalec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Iron") {
      if (amount > iron) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`iron_${user.id}`, amount);
        db.add(`ironec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Lapis") {
      if (amount > lapis) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`lapis_${user.id}`, amount);
        db.add(`lapisec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Gold") {
      if (amount > gold) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`gold_${user.id}`, amount);
        db.add(`goldec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Diamond") {
      if (amount > diamond) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`diamond_${user.id}`, amount);
        db.add(`diamondec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "Netherite") {
      if (amount > netherite) {
        return interaction.reply(
          `Hey ${user}, You are trying to put away more then you have!`
        );
      } else {
        db.subtract(`netherite_${user.id}`, amount);
        db.add(`netheriteec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You put ${amount} ${type} in your enderchest!`
        );
      }
    } else if (type === "All") {
      db.add(`stoneec_${user.id}`, stone);
      db.add(`coalec_${user.id}`, coal);
      db.add(`ironec_${user.id}`, iron);
      db.add(`lapisec_${user.id}`, lapis);
      db.add(`goldec_${user.id}`, gold);
      db.add(`diamondec_${user.id}`, diamond);
      db.add(`netheriteec_${user.id}`, netherite);
      db.add(`emec_${user.id}`, emerald);
      db.set(`stone_${user.id}`, 0);
      db.set(`coal_${user.id}`, 0);
      db.set(`iron_${user.id}`, 0);
      db.set(`lapis_${user.id}`, 0);
      db.set(`gold_${user.id}`, 0);
      db.set(`diamond_${user.id}`, 0);
      db.set(`netherite_${user.id}`, 0);
      db.set(`emerald_${user.id}`, 0);
      interaction.reply(
        `Hey ${user}, You put everything you have in your enderchest!`
      );
    }
  },
};
