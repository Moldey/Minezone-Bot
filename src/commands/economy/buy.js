const { SlashCommandBuilder } = require("discord.js");
const db = require('quick.db')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Purshase stuff to help you!")
    .addStringOption((option) =>
    option
      .setName("type")
      .setDescription("What type of item/pet do you want to buy?")
      .setAutocomplete(true)
      .setRequired(true)
  )
  .addNumberOption((option) =>
  option
    .setName("amount")
    .setDescription("How much do you want to buy?")
    .setAutocomplete(false)
    .setRequired(true)
),
async autocomplete(interaction, client) {
  const focusedValue = interaction.options.getFocused();
  const choices = ["Health Potion", "Wooden Axe", "Stone Axe", "Iron Axe", "Stone Pickaxe", "Coal Pickaxe", "Iron Pickaxe", "Lapis Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Netherite Pickaxe", "Glowsquid", "Axolotl", "Wolf"];
  const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
  await interaction.respond(
    filterd.map((choice) => ({ name: choice, value: choice }))
  );
},
  async execute(interaction, client) {
    let user = interaction.user;
    let emerald = db.fetch(`emerald_${user.id}`);
    const id = interaction.options.getString('type');
    const amount = interaction.options.getNumber('amount');

    if (amount === null) amount = 1;
    if (id === "Health Potion") {
      if (amount === 1) {
        if (emerald < 20)
          return interaction.reply(
            `Hey ${user}, You dont have enough emeralds you need at least 20 <:emerald:885254806938194000> to purchase **Health Potion** <:potion:932720127072432128>`
          );
        db.add(`healthp_${user.id}`, 1);
        db.subtract(`emerald_${user.id}`, 20);
        interaction.reply(
          `Hey ${user.username}, You have succesfully purchased 1 **Health Potion** <:potion:932720127072432128> for **20** <:emerald:885254806938194000>`
        );
      } else {
        if (emerald < 20 * amount)
          return interaction.reply(
            `Hey ${user}, You dont have enough emeralds you need at least ${
              20 * amount
            } <:emerald:885254806938194000> to purchase **Health Potion** <:potion:932720127072432128>`
          );
        db.add(`healthp_${user.id}`, amount);
        db.subtract(`emerald_${user.id}`, 20 * amount);
        interaction.reply(
          `Hey ${
            user.username
          }, You have succesfully purchased ${amount} **Health Potion**'s <:potion:932720127072432128> for **${
            20 * amount
          }** <:emerald:885254806938194000>`
        );
      }
    } else if (id === "Wooden Axe") {
      if (emerald < 500)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 500 <:emerald:885254806938194000> to purchase **Wooden Axe** <:axe:932289275326779402>`
        );
      db.set(`axe_${user.id}`, "Wood");
      db.subtract(`emerald_${user.id}`, 500);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Wooden Axe** <:axe:932289275326779402> for **500** <:emerald:885254806938194000>`
      );
    } else if (id === "Stone Axe") {
      if (emerald < 750)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 750 <:emerald:885254806938194000> to purchase **Stone Axe** <:stoneaxe:932724486694895686>`
        );
      db.set(`axe_${user.id}`, "Stone");
      db.subtract(`emerald_${user.id}`, 750);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Stone Axe** <:stoneaxe:932724486694895686> for **750** <:emerald:885254806938194000>`
      );
    } else if (id === "Iron Axe") {
      if (emerald < 1100)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 1100 <:emerald:885254806938194000> to purchase **Iron Axe** <:ironaxe:932729823414083677>`
        );
      db.set(`axe_${user.id}`, "Iron");
      db.subtract(`emerald_${user.id}`, 1100);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Iron Axe** <:ironaxe:932729823414083677> for **1100** <:emerald:885254806938194000>`
      );
    } else if (id === "Glowsquid") {
        if (emerald < 50000)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 50000 <:emerald:885254806938194000> to purchase **Glowsquid** <:Glow_Squid:915331932223594516>`
        );
      db.set(`pet_${user.id}`, "Glowsquid");
      db.subtract(`emerald_${user.id}`, 50000);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Glowsquid** <:Glow_Squid:915331932223594516> for **50000** <:emerald:885254806938194000>`
      );
    } else if (id === "Axolotl") {
        if (emerald < 100000)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 100000 <:emerald:885254806938194000> to purchase **Axolotl** <:Axolotl:915332625441374228>`
        );
      db.set(`pet_${user.id}`, "Axolotl");
      db.subtract(`emerald_${user.id}`, 100000);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Axolotl** <:Axolotl:915332625441374228> for **100000** <:emerald:885254806938194000>`
      );
    } else if (id === "Wolf") {
        if (emerald < 300000)
        return interaction.reply(
          `Hey ${user}, You dont have enough emeralds you need at least 300000 <:emerald:885254806938194000> to purchase **Wolf** <:wolf:916119786944090132>`
        );
      db.set(`pet_${user.id}`, "Wolf");
      db.subtract(`emerald_${user.id}`, 300000);
      interaction.reply(
        `Hey ${user.username}, You have succesfully purchased a **Wolf** <:wolf:916119786944090132> for **300000** <:emerald:885254806938194000>`
      );
    } else if (id === "Stone Pickaxe") {
      if (emerald < 1200)
      return interaction.reply(
        `Hey ${user}, You dont have enough emeralds you need at least 1200 <:emerald:885254806938194000> to purchase **Stone Pickaxe** <:stpick:1032337487353348188>`
      );
    db.set(`pickaxe_${user.id}`, "Stone");
    db.subtract(`emerald_${user.id}`, 1200);
    interaction.reply(
      `Hey ${user.username}, You have succesfully purchased a **Stone Pickaxe** <:stpick:1032337487353348188> for **1200** <:emerald:885254806938194000>`
    );
  } else if (id === "Coal Pickaxe") {
    if (emerald < 5200)
    return interaction.reply(
      `Hey ${user}, You dont have enough emeralds you need at least 5200 <:emerald:885254806938194000> to purchase **Coal Pickaxe** <:coalpick:1032339931365912638>`
    );
  db.set(`pickaxe_${user.id}`, "Coal");
  db.subtract(`emerald_${user.id}`, 5200);
  interaction.reply(
    `Hey ${user.username}, You have succesfully purchased a **Coal Pickaxe** <:coalpick:1032339931365912638> for **5200** <:emerald:885254806938194000>`
  );
} else if (id === "Iron Pickaxe") {
  if (emerald < 7000)
  return interaction.reply(
    `Hey ${user}, You dont have enough emeralds you need at least 7000 <:emerald:885254806938194000> to purchase **Iron Pickaxe** <:ironpick:1032337458458800148>`
  );
db.set(`pickaxe_${user.id}`, "Iron");
db.subtract(`emerald_${user.id}`, 7000);
interaction.reply(
  `Hey ${user.username}, You have succesfully purchased a **Iron Pickaxe** <:ironpick:1032337458458800148> for **5200** <:emerald:885254806938194000>`
);
} else if (id === "Lapis Pickaxe") {
  if (emerald < 10000)
  return interaction.reply(
    `Hey ${user}, You dont have enough emeralds you need at least 10000 <:emerald:885254806938194000> to purchase **Lapis Pickaxe** <:lapispick:1032340098861244476>`
  );
db.set(`pickaxe_${user.id}`, "Lapis");
db.subtract(`emerald_${user.id}`, 10000);
interaction.reply(
  `Hey ${user.username}, You have succesfully purchased a **Lapis Pickaxe** <:lapispick:1032340098861244476> for **10000** <:emerald:885254806938194000>`
);
} else if (id === "Gold Pickaxe") {
  if (emerald < 20000)
  return interaction.reply(
    `Hey ${user}, You dont have enough emeralds you need at least 20000 <:emerald:885254806938194000> to purchase **Gold Pickaxe** <:goldpick:1032461872424833074>`
  );
db.set(`pickaxe_${user.id}`, "Gold");
db.subtract(`emerald_${user.id}`, 20000);
interaction.reply(
  `Hey ${user.username}, You have succesfully purchased a **Gold Pickaxe** <:goldpick:1032461872424833074> for **20000** <:emerald:885254806938194000>`
);
} else if (id === "Diamond Pickaxe") {
  if (emerald < 40000)
  return interaction.reply(
    `Hey ${user}, You dont have enough emeralds you need at least 40000 <:emerald:885254806938194000> to purchase **Diamond Pickaxe** <:dpick:1032337423360856204>`
  );
db.set(`pickaxe_${user.id}`, "Diamond");
db.subtract(`emerald_${user.id}`, 40000);
interaction.reply(
  `Hey ${user.username}, You have succesfully purchased a **Diamond Pickaxe** <:dpick:1032337423360856204> for **40000** <:emerald:885254806938194000>`
);
} else if (id === "Netherite Pickaxe") {
  if (emerald < 100000)
  return interaction.reply(
    `Hey ${user}, You dont have enough emeralds you need at least 100000 <:emerald:885254806938194000> to purchase **Netherite Pickaxe** <:nepick:1032337503891501097>`
  );
db.set(`pickaxe_${user.id}`, "Netherite");
db.subtract(`emerald_${user.id}`, 100000);
interaction.reply(
  `Hey ${user.username}, You have succesfully purchased a **Netherite Pickaxe** <:nepick:1032337503891501097> for **100000** <:emerald:885254806938194000>`
);
}
  },
};
