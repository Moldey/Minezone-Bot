const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("quick.db");
const stoneamount = require("../../structures/sell/stone.json");
const coalamount = require("../../structures/sell/coal.json");
const ironamount = require("../../structures/sell/iron.json");
const lapisamount = require("../../structures/sell/lapis.json");
const goldamount = require("../../structures/sell/gold.json");
const diamondamount = require("../../structures/sell/diamond.json");
const netheriteamount = require("../../structures/sell/netherite.json");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("smelt")
    .setDescription("Smelt down your rescores into emeralds!")
    .addStringOption((option) =>
      option
        .setName("ore")
        .setDescription("What type of ore do you want to smelt?")
        .setAutocomplete(true)
        .setRequired(true)
    )
    .addNumberOption((option) =>
    option
      .setName("amount")
      .setDescription("How much do you want to sell?")
      .setRequired(false)
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
    ];
    const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    let user = interaction.user;
    let name = user.username;
    let ore = interaction.options.getString("ore");
    let amount = interaction.options.getNumber("amount")
    let started = db.fetch(`started_${user.id}`);
    if (started !== "yes") {
      return interaction.reply(
        `Hey ${user}, You have not started to start do /start`
      );
    }

    let stone = db.fetch(`stone_${user.id}`);
    let coal = db.fetch(`coal_${user.id}`);
    let iron = db.fetch(`iron_${user.id}`);
    let lapis = db.fetch(`lapis_${user.id}`);
    let gold = db.fetch(`gold_${user.id}`);
    let diamond = db.fetch(`diamond_${user.id}`);
    let netherite = db.fetch(`netherite_${user.id}`);
    let pet = db.fetch(`pet_${user.id}`);

    if (stone === null) stone = 0;
    if (coal === null) coal = 0;
    if (iron === null) iron = 0;
    if (lapis === null) lapis = 0;
    if (gold === null) gold = 0;
    if (diamond === null) diamond = 0;
    if (netherite === null) netherite = 0;
    if (ore === "Stone") {
      if (stone === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 stone to smelt you have ${stone} stone to sell!`
        );
      } else if (amount >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username}, Please try again and this time add an amount silly.`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} stone silly!`
          );
        } else if (amount > stone) {
          return interaction.reply(
            `${name} you don't have that much stone silly!`
          );
        }
        let stoneam =
          stoneamount[Math.floor(Math.random() * stoneamount.length)];
        if (stoneam === null) stoneam = 4;
        if (pet === "Glowsquid") {
          db.subtract(`stone_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 2);
          let sellstoneembed = new EmbedBuilder()
            .setTitle("Congrats smelt some stone!")
            .setDescription(
              `${name} has smelt ${amount} stone and got ${
                amount * stoneam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellstoneembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`stone_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 4);
          let sellstoneembed = new EmbedBuilder()
            .setTitle(
              "Congrats smelt some stone <:stoneblock:885257744943288350>!"
            )
            .setDescription(
              `${name} has smelted ${amount} stone and got ${
                amount * stoneam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellstoneembed] });
        } else if (pet === "Wolf") {
          db.subtract(`stone_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 6);
          let sellstoneembed = new EmbedBuilder()
            .setTitle(
              "Congrats smelt some stone <:stoneblock:885257744943288350>!"
            )
            .setDescription(
              `${name} has smelted ${amount} stone and got ${
                amount * stoneam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellstoneembed] });
        } else {
          db.subtract(`stone_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam);
          let sellstoneembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted stone <:stoneblock:885257744943288350>!"
            )
            .setDescription(
              `${name} has smelted ${amount} stone and got ${
                amount * stoneam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellstoneembed] });
        }
      }
    } else if (ore === "Coal") {
      if (coal === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 coal to smelt you have ${coal} coal to sell!`
        );
      } else if (coal >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of coal do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} coal silly!`
          );
        } else if (amount > coal) {
          return interaction.reply(
            `${name} you don't have that much coal silly!`
          );
        }
        let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`coal_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * coalam * 2);
          let sellcoalembed = new EmbedBuilder()
            .setTitle("Congrats you smelted coal <:coal:885258887182295110>!")
            .setDescription(
              `${name} has smelted ${amount} coal and got ${
                amount * coalam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellcoalembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`coal_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * coalam * 4);
          let sellcoalembed = new EmbedBuilder()
            .setTitle("Congrats smelt some coal <:coal:885258887182295110>!")
            .setDescription(
              `${name} has smelt ${amount} coal and got ${
                amount * coalam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellcoalembed] });
        } else if (pet === "Wolf") {
          db.subtract(`coal_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * coalam * 6);
          let sellcoalembed = new EmbedBuilder()
            .setTitle("Congrats you smelted coal <:coal:885258887182295110>!")
            .setDescription(
              `${name} has smelted ${amount} coal and got ${
                amount * coalam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellcoalembed] });
        } else {
          db.subtract(`coal_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * coalam);
          let sellcoalembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some coal <:coal:885258887182295110>!"
            )
            .setDescription(
              `${name} has smelted ${amount} coal and got ${
                amount * coalam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellcoalembed] });
        }
      }
    } else if (ore === "Iron") {
      if (iron === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 iron to smelt you have ${iron} iron to sell!`
        );
      } else if (iron >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of iron do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} iron silly!`
          );
        } else if (amount > iron) {
          return interaction.reply(
            `${name} you don't have that much iron silly!`
          );
        }
        let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`iron_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * ironam * 2);
          let sellironembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some iron <:iron:842026623847235644>!"
            )
            .setDescription(
              `${name} has smelted ${amount} iron and got ${
                amount * ironam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellironembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`iron_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 4);
          let sellironembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some iron <:iron:842026623847235644>!"
            )
            .setDescription(
              `${name} has smelted ${amount} iron and got ${
                amount * ironam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellironembed] });
        } else if (pet === "Wolf") {
          db.subtract(`iron_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 6);
          let sellironembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some iron <:iron:842026623847235644>!"
            )
            .setDescription(
              `${name} has smelted ${amount} iron and got ${
                amount * ironam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellironembed] });
        } else {
          db.subtract(`iron_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * ironam);
          let sellironembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some iron <:iron:842026623847235644>!"
            )
            .setDescription(
              `${name} has smelted ${amount} iron and got ${
                amount * ironam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellironembed] });
        }
      }
    } else if (ore === "Lapis") {
      if (lapis === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 lapis to smelt you have ${lapis} lapis to sell!`
        );
      } else if (lapis >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of lapis do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} lapis silly!`
          );
        } else if (amount > lapis) {
          return interaction.reply(
            `${name} you don't have that much lapis silly!`
          );
        }
        let lapisam =
          lapisamount[Math.floor(Math.random() * lapisamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`lapis_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * lapisam * 2);
          let selllapisembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some lapis <:lapis_lazuli:885259087489675334>!"
            )
            .setDescription(
              `${name} has smelted ${amount} lapis and got ${
                amount * lapisam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selllapisembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`lapis_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 4);
          let selllapisembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some lapis <:lapis_lazuli:885259087489675334>!"
            )
            .setDescription(
              `${name} has smelted ${amount} stone and got ${
                amount * lapisam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selllapisembed] });
        } else if (pet === "Wolf") {
          db.subtract(`lapis_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * stoneam * 6);
          let selllapisembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some lapis <:lapis_lazuli:885259087489675334>!"
            )
            .setDescription(
              `${name} has smelted ${amount} stone and got ${
                amount * lapisam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selllapisembed] });
        } else {
          db.subtract(`lapis_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * lapisam);
          let selllapisembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some lapis <:lapis_lazuli:885259087489675334>!"
            )
            .setDescription(
              `${name} has smelted ${amount} lapis and got ${
                amount * lapisam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selllapisembed] });
        }
      }
    } else if (ore === "Gold") {
      if (gold === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 gold to smelt you have ${gold} gold to sell!`
        );
      } else if (gold >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of gold do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} gold silly!`
          );
        } else if (amount > gold) {
          return interaction.reply(
            `${name} you don't have that much gold silly!`
          );
        }
        let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`gold_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * goldam * 2);
          let sellgoldembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some gold <:gold:842027663287255108>!"
            )
            .setDescription(
              `${name} has smelted ${amount} gold and got ${
                amount * goldam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellgoldembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`gold_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * goldam * 4);
          let sellgoldembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some gold <:gold:842027663287255108>!"
            )
            .setDescription(
              `${name} has smelted ${amount} gold and got ${
                amount * goldam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellgoldembed] });
        } else if (pet === "Wolf") {
          db.subtract(`gold_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * goldam * 6);
          let sellgoldembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some gold <:gold:842027663287255108>!"
            )
            .setDescription(
              `${name} has smelted ${amount} gold and got ${
                amount * goldam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellgoldembed] });
        } else {
          db.subtract(`gold_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * goldam);
          let sellgoldembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some gold <:gold:842027663287255108>!"
            )
            .setDescription(
              `${name} has smelted ${amount} gold and got ${
                amount * goldam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellgoldembed] });
        }
      }
    } else if (ore === "Diamond") {
      if (gold === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 diamond to smelt you have ${diamond} diamond to sell!`
        );
      } else if (diamond >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of diamond do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} diamond silly!`
          );
        } else if (amount > diamond) {
          return interaction.reply(
            `${name} you don't have that much diamond silly!`
          );
        }
        let diamondam =
          diamondamount[Math.floor(Math.random() * diamondamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`diamond_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * diamondam * 2);
          let selldiamondembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some diamond <:diamond:842026793636724766>!"
            )
            .setDescription(
              `${name} has smelted ${amount} diamond and got ${
                amount * diamondam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selldiamondembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`diamond_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * diamondam * 4);
          let selldiamondembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some diamond <:diamond:842026793636724766>!"
            )
            .setDescription(
              `${name} has smelted ${amount} diamond and got ${
                amount * diamondam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selldiamondembed] });
        } else if (pet === "Wolf") {
          db.subtract(`diamond_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * diamondam * 6);
          let selldiamondembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some diamond <:diamond:842026793636724766>!"
            )
            .setDescription(
              `${name} has smelt ${amount} diamond and got ${
                amount * diamondam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selldiamondembed] });
        } else {
          db.subtract(`diamond_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * diamondam);
          let selldiamondembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some diamond <:diamond:842026793636724766>!"
            )
            .setDescription(
              `${name} has smelted ${amount} diamond and got ${
                amount * diamondam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [selldiamondembed] });
        }
      }
    } else if (ore === "Ntherite") {
      if (netherite === 0) {
        return interaction.reply(
          `${user.username} you need at least 1 netherite to smelt you have ${netherite} netherite to sell!`
        );
      } else if (netherite >= 1) {
        if (!amount) {
          return interaction.reply(
            `${user.username} how many peices of netherite do you want to sell?`
          );
        } else if (amount < 1) {
          return interaction.reply(
            `${name} you cant smelt ${amount} netherite silly!`
          );
        } else if (amount > netherite) {
          return interaction.reply(
            `${name} you don't have that much netherite silly!`
          );
        }
        let netheriteam =
          netheriteamount[Math.floor(Math.random() * netheriteamount.length)];
        if (pet === "Glowsquid") {
          db.subtract(`netherite_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * netheriteam * 2);
          let sellnetheriteembed = new EmbedBuilder()
            .setTitle(
              "Congrats you smelted some netherite <:netherite_ingot:885259107110649857>!"
            )
            .setDescription(
              `${name} has smelted ${amount} netherite and got ${
                amount * netheriteam * 2
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellnetheriteembed] });
        } else if (pet === "Axolotl") {
          db.subtract(`netherite_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * netheriteam * 4);
          let sellnetheriteembed = new EmbedBuilder()
            .setTitle(
              "Congrats smelt some netherite <:netherite_ingot:885259107110649857>!"
            )
            .setDescription(
              `${name} has smelted ${amount} netherite and got ${
                amount * netheriteam * 4
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellnetheriteembed] });
        } else if (pet === "Wolf") {
          db.subtract(`netherite_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * netheriteam * 6);
          let sellnetheriteembed = new EmbedBuilder()
            .setTitle(
              "Congrats smelt some netherite <:netherite_ingot:885259107110649857>!"
            )
            .setDescription(
              `${name} has smelted ${amount} netherite and got ${
                amount * netheriteam * 6
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellnetheriteembed] });
        } else {
          db.subtract(`netherite_${user.id}`, amount);
          db.add(`emerald_${user.id}`, amount * netheriteam);
          let sellnetheriteembed = new EmbedBuilder()
            .setTitle(
              "Congrats smelt some netherite <:netherite_ingot:885259107110649857>!"
            )
            .setDescription(
              `${name} has smelted ${amount} netherite and got ${
                amount * netheriteam
              } emeralds!`
            )
            .setColor("Green");
          interaction.reply({ embeds: [sellnetheriteembed] });
        }
      }
    } else if (ore === "All") {
      let stoneam = stoneamount[Math.floor(Math.random() * stoneamount.length)];
      if (stoneam === null) stoneam = 4;
      let coalam = coalamount[Math.floor(Math.random() * coalamount.length)];
      let ironam = ironamount[Math.floor(Math.random() * ironamount.length)];
      let lapisam = lapisamount[Math.floor(Math.random() * lapisamount.length)];
      let goldam = goldamount[Math.floor(Math.random() * goldamount.length)];
      let diamondam =
        diamondamount[Math.floor(Math.random() * diamondamount.length)];
      let netheriteam =
        netheriteamount[Math.floor(Math.random() * netheriteamount.length)];
      if (pet == "Glowsquid") {
        db.set(`stone_${user.id}`, 0);
        db.set(`coal_${user.id}`, 0);
        db.set(`iron_${user.id}`, 0);
        db.set(`lapis_${user.id}`, 0);
        db.set(`gold_${user.id}`, 0);
        db.set(`diamond_${user.id}`, 0);
        db.set(`netherite_${user.id}`, 0);
        db.add(`emerald_${user.id}`, stone * stoneam * 2);
        db.add(`emerald_${user.id}`, coal * coalam * 2);
        db.add(`emerald_${user.id}`, iron * ironam * 2);
        db.add(`emerald_${user.id}`, lapis * lapisam * 2);
        db.add(`emerald_${user.id}`, gold * goldam * 2);
        db.add(`emerald_${user.id}`, diamond * diamondam * 2);
        db.add(`emerald_${user.id}`, netherite * netheriteam * 2);
        let sellallembed = new EmbedBuilder()
          .setTitle("Congrats you smelted everything you have")
          .setDescription(
            `${name} has smelted:\n**${stone} Stone <:stoneblock:885257744943288350>** and got **${
              stone * stoneam * 2
            } emerlads** <:emerald:885254806938194000>\n**${coal} Coal <:coal:885258887182295110>** and got **${
              coal * coalam * 2
            } emeralds** <:emerald:885254806938194000>\n**${iron} Iron <:iron:842026623847235644>** and got **${
              iron * ironam * 2
            } emeralds** <:emerald:885254806938194000>\n**${lapis} Lapis <:lapis_lazuli:885259087489675334>** and got **${
              lapis * lapisam * 2
            } emeralds** <:emerald:885254806938194000>\n**${gold} Gold <:gold:842027663287255108>** and got **${
              gold * goldam * 2
            } emeralds** <:emerald:885254806938194000>\n**${diamond} Diamonds <:diamond:842026793636724766>** and got **${
              diamond * diamondam * 2
            } emeralds** <:emerald:885254806938194000>\n**${netherite} Netherite <:netherite_ingot:885259107110649857>** and got **${
              netherite * netheriteam * 2
            } emeralds** <:emerald:885254806938194000>`
          )
          .setColor("Green");
        interaction.reply({ embeds: [sellallembed] });
      } else if (pet == "Axolotl") {
        db.set(`stone_${user.id}`, 0);
        db.set(`coal_${user.id}`, 0);
        db.set(`iron_${user.id}`, 0);
        db.set(`lapis_${user.id}`, 0);
        db.set(`gold_${user.id}`, 0);
        db.set(`diamond_${user.id}`, 0);
        db.set(`netherite_${user.id}`, 0);
        db.add(`emerald_${user.id}`, stone * stoneam * 4);
        db.add(`emerald_${user.id}`, coal * coalam * 4);
        db.add(`emerald_${user.id}`, iron * ironam * 4);
        db.add(`emerald_${user.id}`, lapis * lapisam * 4);
        db.add(`emerald_${user.id}`, gold * goldam * 4);
        db.add(`emerald_${user.id}`, diamond * diamondam * 4);
        db.add(`emerald_${user.id}`, netherite * netheriteam * 4);
        let sellallembed = new EmbedBuilder()
          .setTitle("Congrats you smelted everything you have")
          .setDescription(
            `${name} has smelted:\n**${stone} Stone <:stoneblock:885257744943288350>** and got **${
              stone * stoneam * 4
            } emerlads** <:emerald:885254806938194000>\n**${coal} Coal <:coal:885258887182295110>** and got **${
              coal * coalam * 4
            } emeralds** <:emerald:885254806938194000>\n**${iron} Iron <:iron:842026623847235644>** and got **${
              iron * ironam * 4
            } emeralds** <:emerald:885254806938194000>\n**${lapis} Lapis <:lapis_lazuli:885259087489675334>** and got **${
              lapis * lapisam * 4
            } emeralds** <:emerald:885254806938194000>\n**${gold} Gold <:gold:842027663287255108>** and got **${
              gold * goldam * 4
            } emeralds** <:emerald:885254806938194000>\n**${diamond} Diamonds <:diamond:842026793636724766>** and got **${
              diamond * diamondam * 4
            } emeralds** <:emerald:885254806938194000>\n**${netherite} Netherite <:netherite_ingot:885259107110649857>** and got **${
              netherite * netheriteam * 4
            } emeralds** <:emerald:885254806938194000>`
          )
          .setColor("Green");
        interaction.reply({ embeds: [sellallembed] });
      } else if (pet == "Wolf") {
        db.set(`stone_${user.id}`, 0);
        db.set(`coal_${user.id}`, 0);
        db.set(`iron_${user.id}`, 0);
        db.set(`lapis_${user.id}`, 0);
        db.set(`gold_${user.id}`, 0);
        db.set(`diamond_${user.id}`, 0);
        db.set(`netherite_${user.id}`, 0);
        db.add(`emerald_${user.id}`, stone * stoneam * 6);
        db.add(`emerald_${user.id}`, coal * coalam * 6);
        db.add(`emerald_${user.id}`, iron * ironam * 6);
        db.add(`emerald_${user.id}`, lapis * lapisam * 6);
        db.add(`emerald_${user.id}`, gold * goldam * 6);
        db.add(`emerald_${user.id}`, diamond * diamondam * 6);
        db.add(`emerald_${user.id}`, netherite * netheriteam * 6);
        let sellallembed = new EmbedBuilder()
          .setTitle("Congrats you smelted everything you have")
          .setDescription(
            `${name} has smelted:\n**${stone} Stone <:stoneblock:885257744943288350>** and got **${
              stone * stoneam * 6
            } emerlads** <:emerald:885254806938194000>\n**${coal} Coal <:coal:885258887182295110>** and got **${
              coal * coalam * 6
            } emeralds** <:emerald:885254806938194000>\n**${iron} Iron <:iron:842026623847235644>** and got **${
              iron * ironam * 6
            } emeralds** <:emerald:885254806938194000>\n**${lapis} Lapis <:lapis_lazuli:885259087489675334>** and got **${
              lapis * lapisam * 6
            } emeralds** <:emerald:885254806938194000>\n**${gold} Gold <:gold:842027663287255108>** and got **${
              gold * goldam * 6
            } emeralds** <:emerald:885254806938194000>\n**${diamond} Diamonds <:diamond:842026793636724766>** and got **${
              diamond * diamondam * 6
            } emeralds** <:emerald:885254806938194000>\n**${netherite} Netherite <:netherite_ingot:885259107110649857>** and got **${
              netherite * netheriteam * 6
            } emeralds** <:emerald:885254806938194000>`
          )
          .setColor("Green");
        interaction.reply({ embeds: [sellallembed] });
      } else {
        db.set(`stone_${user.id}`, 0);
        db.set(`coal_${user.id}`, 0);
        db.set(`iron_${user.id}`, 0);
        db.set(`lapis_${user.id}`, 0);
        db.set(`gold_${user.id}`, 0);
        db.set(`diamond_${user.id}`, 0);
        db.set(`netherite_${user.id}`, 0);
        db.add(`emerald_${user.id}`, stone * stoneam);
        db.add(`emerald_${user.id}`, coal * coalam);
        db.add(`emerald_${user.id}`, iron * ironam);
        db.add(`emerald_${user.id}`, lapis * lapisam);
        db.add(`emerald_${user.id}`, gold * goldam);
        db.add(`emerald_${user.id}`, diamond * diamondam);
        db.add(`emerald_${user.id}`, netherite * netheriteam);
        let sellallembed = new EmbedBuilder()
          .setTitle("Congrats you smelted everything you have")
          .setDescription(
            `${name} has smelted:\n**${stone} Stone <:stoneblock:885257744943288350>** and got **${
              stone * stoneam
            } emerlads** <:emerald:885254806938194000>\n**${coal} Coal <:coal:885258887182295110>** and got **${
              coal * coalam
            } emeralds** <:emerald:885254806938194000>\n**${iron} Iron <:iron:842026623847235644>** and got **${
              iron * ironam
            } emeralds** <:emerald:885254806938194000>\n**${lapis} Lapis <:lapis_lazuli:885259087489675334>** and got **${
              lapis * lapisam
            } emeralds** <:emerald:885254806938194000>\n**${gold} Gold <:gold:842027663287255108>** and got **${
              gold * goldam
            } emeralds** <:emerald:885254806938194000>\n**${diamond} Diamonds <:diamond:842026793636724766>** and got **${
              diamond * diamondam
            } emeralds** <:emerald:885254806938194000>\n**${netherite} Netherite <:netherite_ingot:885259107110649857>** and got **${
              netherite * netheriteam
            } emeralds** <:emerald:885254806938194000>`
          )
          .setColor("Green");
        interaction.reply({ embeds: [sellallembed] });
      }
    }
  },
};
