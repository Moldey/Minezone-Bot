const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("quick.db");
const stoneamount = require("../../structures/mine/stone.json");
const coalamount = require("../../structures/mine/coal.json");
const ironamount = require("../../structures/mine/iron.json");
const lapisamount = require("../../structures/mine/lapis.json");
const goldamount = require("../../structures/mine/gold.json");
const diamondamount = require("../../structures/mine/diamond.json");
const netheriteamount = require("../../structures/mine/netherite.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mine")
    .setDescription("mine some resorces!"),
  async execute(interaction, client) {
    let user = interaction.user;
    let name = user.username;
    let stone = db.fetch(`stone_${user.id}`);
    let coal = db.fetch(`coal_${user.id}`);
    let iron = db.fetch(`iron_${user.id}`);
    let lapis = db.fetch(`lapis_${user.id}`);
    let gold = db.fetch(`gold_${user.id}`);
    let diamond = db.fetch(`diamond_${user.id}`);
    let netherite = db.fetch(`netherite_${user.id}`);
    let pick = db.fetch(`pickaxe_${user.id}`);

    if (stone === null) stone = 0;
    if (coal === null) coal = 0;
    if (iron === null) iron = 0;
    if (lapis === null) lapis = 0;
    if (gold === null) gold = 0;
    if (diamond === null) diamond = 0;
    if (netherite === null) netherite = 0;
    if (pick === null) pick = "tpye ,start to get your first pickaxe!";
    let started = db.fetch(`started_${user.id}`);

    let stoneemoji = "<:stoneblock:885257744943288350>";
    let coalemoji = "<:coal:885258887182295110>";
    let ironemoji = "<:iron:842026623847235644>";
    let lapisemoji = "<:lapis_lazuli:885259087489675334>";
    let goldemoji = "<:gold:842027663287255108>";
    let diamemoji = "<:diamond:842026793636724766>";
    let nethemoji = "<:netherite_ingot:885259107110649857>";

    if (started !== "yes") {
      return interaction.reply(
        `${user.username} you have not started yet please do ,start to start mining!`
      );
    }

    if (pick === `Wood`) {
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      if (stoneam === null) stoneam = 2;
      db.add(`stone_${user.id}`, stoneam);
      let stoneembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n0 ${coalemoji}\n0 ${ironemoji}\n0 ${lapisemoji}\n0 ${goldemoji}\n0 ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [stoneembed] });
    } else if (pick === `Stone`) {
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let coalembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n0 ${ironemoji}\n0 ${lapisemoji}\n0 ${goldemoji}\n0 ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [coalembed] });
    } else if (pick === `Coal`) {
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let ironembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n0 ${lapisemoji}\n0 ${goldemoji}\n0 ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [ironembed] });
    } else if (pick === `Iron`) {
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`lapis_${user.id}`, lapisam);
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let lapisembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n${lapisam} ${lapisemoji}\n0 ${goldemoji}\n0 ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [lapisembed] });
    } else if (pick === `Lapis`) {
      let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`gold_${user.id}`, goldam);
      db.add(`lapis_${user.id}`, lapisam);
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let goldembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n${lapisam} ${lapisemoji}\n${goldam} ${goldemoji}\n0 ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [goldembed] });
    } else if (pick === `Gold`) {
      let diamondam =
        diamondamount[Math.floor(Math.random() * diamondamount.length)];
      let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`diamond_${user.id}`, diamondam);
      db.add(`gold_${user.id}`, goldam);
      db.add(`lapis_${user.id}`, lapisam);
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let diamondembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n${lapisam} ${lapisemoji}\n${goldam} ${goldemoji}\n${diamondam} ${diamemoji}\n0 ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [diamondembed] });
    } else if (pick === `Diamond`) {
      let netheriteam =
        netheriteamount[Math.floor(Math.random() * netheriteamount.length)];
      let diamondam =
        diamondamount[Math.floor(Math.random() * diamondamount.length)];
      let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`netherite_${user.id}`, netheriteam);
      db.add(`diamond_${user.id}`, diamondam);
      db.add(`gold_${user.id}`, goldam);
      db.add(`lapis_${user.id}`, lapisam);
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let netheriteembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n${lapisam} ${lapisemoji}\n${goldam} ${goldemoji}\n${diamondam} ${diamemoji}\n${netheriteam} ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [netheriteembed] });
    } else if (pick === `Netherite`) {
      let netheriteam =
        netheriteamount[Math.floor(Math.random() * netheriteamount.length)];
      let diamondam =
        diamondamount[Math.floor(Math.random() * diamondamount.length)];
      let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      db.add(`netherite_${user.id}`, netheriteam);
      db.add(`diamond_${user.id}`, diamondam);
      db.add(`gold_${user.id}`, goldam);
      db.add(`lapis_${user.id}`, lapisam);
      db.add(`iron_${user.id}`, ironam);
      db.add(`coal_${user.id}`, coalam);
      db.add(`stone_${user.id}`, stoneam);
      let netheriteembed = new EmbedBuilder()
        .setTitle("You have Successfully Mined!")
        .setDescription(
          `${name} mined with a ${pick} pickaxe and got\n${stoneam} ${stoneemoji}\n${coalam} ${coalemoji}\n${ironam} ${ironemoji}\n${lapisam} ${lapisemoji}\n${goldam} ${goldemoji}\n${diamondam} ${diamemoji}\n${netheriteam} ${nethemoji}`
        )
        .setColor("Green");
      interaction.reply({ embeds: [netheriteembed] });
    }
  },
};
