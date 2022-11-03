const { SlashCommandBuilder } = require("discord.js");
const db = require("quick.db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("withdraw")
    .setDescription("Takes stuff out of your ender chest!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription(
          "What type of item do you want to take out of your ender chest?"
        )
        .setAutocomplete(true)
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("How much do you want to take out?")
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
    let type = interaction.options.getString("type");
    let amount = interaction.options.getNumber("amount");

    // inv
    let target = interaction.user;
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
      if (amount > emeraldec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`emerald_${user.id}`, amount);
        db.subtract(`emec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Stone") {
      if (amount > stoneec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`stone_${user.id}`, amount);
        db.subtract(`stoneec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Coal") {
      if (amount > coalec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`coal_${user.id}`, amount);
        db.subtract(`coalec_${target.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Iron") {
      if (amount > ironec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`iron_${user.id}`, amount);
        db.subtract(`ironec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Lapis") {
      if (amount > lapisec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`lapis_${user.id}`, amount);
        db.subtract(`lapisec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Gold") {
      if (!amount)
        return interaction.reply(
          `Hey ${user}, How many do you want to take out of your enderchest ,wd <item> <amount>?`
        );
      if (isNaN(amount))
        return interaction.reply(
          `Hey ${user}, You cant take out ${amount} ${type} silly!`
        );
      if (amount > goldec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`gold_${user.id}`, amount);
        db.subtract(`goldec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Diamond") {
      if (amount > diamondec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`diamond_${user.id}`, amount);
        db.subtract(`diamondec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "Netherite") {
      if (amount > netheriteec) {
        return interaction.reply(
          `Hey ${user}, You are trying to take out more then you have!`
        );
      } else {
        db.add(`netherite_${user.id}`, amount);
        db.subtract(`netheriteec_${user.id}`, amount);
        interaction.reply(
          `Hey ${user}, You took out ${amount} ${type} from your enderchest!`
        );
      }
    } else if (type === "All") {
      db.add(`stone_${user.id}`, stoneec);
      db.add(`coal_${user.id}`, coalec);
      db.add(`iron_${user.id}`, ironec);
      db.add(`lapis_${user.id}`, lapisec);
      db.add(`gold_${user.id}`, goldec);
      db.add(`diamond_${user.id}`, diamondec);
      db.add(`netherite_${user.id}`, netheriteec);
      db.add(`emerald_${user.id}`, emeraldec);
      db.set(`stoneec_${user.id}`, 0);
      db.set(`coalec_${user.id}`, 0);
      db.set(`ironec_${user.id}`, 0);
      db.set(`lapisec_${user.id}`, 0);
      db.set(`goldec_${user.id}`, 0);
      db.set(`diamondec_${user.id}`, 0);
      db.set(`netheriteec_${user.id}`, 0);
      db.set(`emec_${user.id}`, 0);
      interaction.reply(
        `Hey ${user}, You took everything you have out of your enderchest!`
      );
    }
  },
};
