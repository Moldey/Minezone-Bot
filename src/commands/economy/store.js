const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("store")
    .setDescription("Opens the store!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("What type of store do you want to open?")
        .setAutocomplete(true)
        .setRequired(true)
    ),
    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused();
        const choices = ["Potions", "Tools", "Pets"];
        const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
        await interaction.respond(
          filterd.map((choice) => ({ name: choice, value: choice }))
        );
      },
  async execute(interaction, client) {
    let user = interaction.user;
    const type = interaction.options.getString('type');

    let embed1 = new EmbedBuilder()
      .setTitle(`Welcome to my potion shop ${user.username}!`)
      .setDescription(
        `Purchase an item with /buy\n\n—————————————————————————\n<:potion:932720127072432128> Health Potion - 20 <:emerald:885254806938194000>`
      )
      .setColor("Red");

    let embed2 = new EmbedBuilder()
      .setTitle(`Welcome to my tool shop ${user.username}!`)
      .setDescription(
        `Purchase a tool with /buy\n\n—————————————————————————\n<:stpick:1032337487353348188> Stone Pickaxe - 1200 <:emerald:885254806938194000>\n<:coalpick:1032339931365912638> Coal Pickaxe - 5200 <:emerald:885254806938194000>\n<:ironpick:1032337458458800148> Iron Pickaxe - 7000 <:emerald:885254806938194000>\n<:lapispick:1032340098861244476> Lapis Pickaxe - 10000 <:emerald:885254806938194000>\n<:goldpick:1032461872424833074> Gold Pickaxe - 20000 <:emerald:885254806938194000>\n<:dpick:1032337423360856204> Diamond Pickaxe - 40000 <:emerald:885254806938194000>\n<:nepick:1032337503891501097> Netherite Pickaxe - 100000 <:emerald:885254806938194000>\n<:axe:932289275326779402> Wooden Axe - 500 <:emerald:885254806938194000>\n<:stoneaxe:932724486694895686> Stone Axe - 750 <:emerald:885254806938194000>\n<:ironaxe:932729823414083677> Iron Axe - 1100 <:emerald:885254806938194000>`
      )
      .setColor(`Green`);

    let embed3 = new EmbedBuilder()
      .setTitle(`Welcome to my pet shop ${user.username}!`)
      .setDescription(
        `Purchase a pet with /buy\n\n—————————————————————————\n<:Glow_Squid:915331932223594516> Glowsquid - 50000 <:emerald:885254806938194000>\n<:Axolotl:915332625441374228> Axolotl - 100000 <:emerald:885254806938194000>\n<:wolf:916119786944090132> Wolf - 300000 <:emerald:885254806938194000>`
      )
      .setColor(`Blue`);


    if (type === 'Potions') {
        interaction.reply({ embeds: [embed1] })
    } else if (type === 'Tools') {
        interaction.reply({ embeds: [embed2] })
    } else if (type === 'Pets') {
        interaction.reply({ embeds: [embed3] })
    }
  },
};
