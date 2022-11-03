const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("quick.db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("Returns your inventory!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("What type of inventory do you want to select?")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ["Ore", "Item", "Enderchest"];
    const filterd = choices.filter((choice) => choice.startsWith(focusedValue));
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    const author = interaction.user;
    let inv = interaction.options.getString("type");

    let stone = db.fetch(`stone_${author.id}`);
    let coal = db.fetch(`coal_${author.id}`);
    let iron = db.fetch(`iron_${author.id}`);
    let lapis = db.fetch(`lapis_${author.id}`);
    let gold = db.fetch(`gold_${author.id}`);
    let diamond = db.fetch(`diamond_${author.id}`);
    let netherite = db.fetch(`netherite_${author.id}`);
    let emerald = db.fetch(`emerald_${author.id}`);
    let oak = db.fetch(`oak_${author.id}`);
    let birch = db.fetch(`birch_${author.id}`);
    let spruce = db.fetch(`spruce_${author.id}`);
    let doaklog = db.fetch(`doak_${author.id}`);
    let acacia = db.fetch(`acacia_${author.id}`);
    let pick = db.fetch(`pickaxe_${author.id}`);
    let axe = db.fetch(`axe_${author.id}`);
    let pet = db.fetch(`pet_${author.id}`);
    let health = db.fetch(`health_${author.id}`);
    let healthp = db.fetch(`healthp_${author.id}`); //health potions
    let rottenflesh = db.fetch(`rottenflesh_${author.id}`);
    let bone = db.fetch(`bone_${author.id}`);
    let stringm = db.fetch(`string_${author.id}`);
    let gp = db.fetch(`gp_${author.id}`);
    let durability = db.fetch(`dura_${author.id}`);
    let stoneec = db.fetch(`stoneec_${author.id}`);
    let coalec = db.fetch(`coalec_${author.id}`);
    let ironec = db.fetch(`ironec_${author.id}`);
    let lapisec = db.fetch(`lapisec_${author.id}`);
    let goldec = db.fetch(`goldec_${author.id}`);
    let diamondec = db.fetch(`diamondec_${author.id}`);
    let netheriteec = db.fetch(`netheriteec_${author.id}`);
    let emeraldec = db.fetch(`emec_${author.id}`);

    if (stoneec === null) stoneec = 0;
    if (coalec === null) coalec = 0;
    if (ironec === null) ironec = 0;
    if (lapisec === null) lapisec = 0;
    if (goldec === null) goldec = 0;
    if (diamondec === null) diamondec = 0;
    if (netheriteec === null) netheriteec = 0;
    if (emeraldec === null) emeraldec = 0;
    if (stone === null) stone = 0;
    if (coal === null) coal = 0;
    if (iron === null) iron = 0;
    if (lapis === null) lapis = 0;
    if (gold === null) gold = 0;
    if (diamond === null) diamond = 0;
    if (netherite === null) netherite = 0;
    if (emerald === null) emerald = 0;
    if (oak === null) oak = 0;
    if (birch === null) birch = 0;
    if (spruce === null) spruce = 0;
    if (doaklog === null) doaklog = 0;
    if (acacia === null) acacia = 0;
    if (pick === null) pick = "Not Started";
    if (axe === null) axe = "Not Purchased";
    if (pet === null) pet = "No Pet";
    if (durability === null) durability = "Not Added Yet";
    if (health === null) health = 0;
    if (healthp === null) healthp = "0"; //health potions
    if (rottenflesh === null) rottenflesh = "0";
    if (bone === null) bone = "0";
    if (stringm === null) stringm = "0";
    if (gp === null) gp = "0";

    let oreembed = new EmbedBuilder()
      .setColor("Green")
      .setTitle(`**${author.username}'s Inventory** (ORE)`)
      .setDescription(
        `<:emerald:885254806938194000> **Emeralds:** ${emerald}\n<:disminerheart:932714673147617331> **Health:** ${health}\n<:woodpick:885256563227496458> **Current Pickaxe:** ${pick}\n**Pickaxe Durability:** ${durability}\n**Current Pet:** ${pet}\n\n<:stoneblock:885257744943288350> **Stone:**  ${stone}\n<:coal:885258887182295110> **Coal:** ${coal}\n<:iron:842026623847235644> **Iron:** ${iron}\n<:lapis_lazuli:885259087489675334> **Lapis:** ${lapis}\n<:gold:842027663287255108> **Gold:** ${gold}\n<:diamond:842026793636724766> **Diamond:** ${diamond}\n<:netherite_ingot:885259107110649857> **Netherite:** ${netherite}`
      );

    let woodembed = new EmbedBuilder()
      .setColor("Orange")
      .setTitle(`**${author.username}'s Inventory** (WOOD)`)
      .setDescription(
        `<:emerald:885254806938194000> **Emeralds:** ${emerald}\n<:disminerheart:932714673147617331> **Health:** ${health}/20\n<:woodpick:885256563227496458> **Current Pickaxe:**  ${pick}\n**Pickaxe Durability:** ${durability}\n<:axe:932289275326779402> **Current Axe:** ${axe}\n**Current Pet:** ${pet}\n\n<:oaklog:932286160544333935> **Oak Log:** ${oak}\n<:birchlog:932286176709197874> **Birch Log:** ${birch}\n<:sprucelog:932286188914618450> **Spruce Log:** ${spruce}\n<:dolog:932286203485634640> **Dark Oak Log:** ${doaklog}\n<:acacialog:932289083286384670> **Acacia Log:** ${acacia}`
      );

    let itemembed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`**${author.username}'s Inventory** (ITEM)`)
      .setDescription(
        `<:emerald:885254806938194000> **Emeralds:** ${emerald}\n<:disminerheart:932714673147617331> **Health:** ${health}/20\n<:woodpick:885256563227496458> **Current Pickaxe:**  ${pick}\n**Pickaxe Durability:** ${durability}\n<:axe:932289275326779402> **Current Axe:** ${axe}\n**Current Pet:** ${pet}\n\n<:potion:932720127072432128> **Health Potion** ${healthp}\n<:rottenflesh:933061482281836595> **Rotten Flesh:** ${rottenflesh}\n<:bone:933061755989536858> **Bone:** ${bone}\n<:string:933061945177817099> **String:** ${stringm}\n<:gp:933062171280158800> **Gunpowder:** ${gp}`
      );

    let ecembed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle(`**${author.username}'s Ender Chest**`)
      .setDescription(
        `<:emerald:885254806938194000> **Emeralds:** ${emeraldec}\n\n<:stoneblock:885257744943288350> **Stone:**  ${stoneec}\n<:coal:885258887182295110> **Coal:** ${coalec}\n<:iron:842026623847235644> **Iron:** ${ironec}\n<:lapis_lazuli:885259087489675334> **Lapis:** ${lapisec}\n<:gold:842027663287255108> **Gold:** ${goldec}\n<:diamond:842026793636724766> **Diamond:** ${diamondec}\n<:netherite_ingot:885259107110649857> **Netherite:** ${netheriteec}`
      );

    if (!inv) {
      interaction.reply({ embeds: [oreembed] });
    } else if (inv === "Main") {
      interaction.reply({ embeds: [oreembed] });
    } else if (inv === "Wood") {
      interaction.reply({ embeds: [woodembed] });
    } else if (inv === "Item") {
      interaction.reply({ embeds: [itemembed] });
    } else if (inv === "Ore") {
      interaction.reply({ embeds: [oreembed] });
    } else if (inv === "Enderchest") {
      interaction.reply({ embeds: [ecembed] });
    }
  },
};
