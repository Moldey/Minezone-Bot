const { EmbedBuilder } = require('discord.js');
const db = require('quick.db');
module.exports = {
    data: {
        name: `adventuremodal`,
    },
    async execute(interaction, client) {
        //content: `You said your favorite color is: ${interaction.fields.getTextInputValue("favColorInput")}`
        let user = interaction.user;

    let health = db.fetch(`health_${user.id}`);
    if (health === null) health === `0`;
    let emerald = db.fetch(`emerald_${user.id}`);
    if (emerald === null) emerald === `0`;

    if (health < 16) return interaction.reply(`Hey ${user}, Make sure you use a health potion before you leave! You are only at ${health}/20 hearts!`);
    if (emerald < 300)  return interaction.reply(`Hey ${user}, Make sure you have some emeralds on you you need at least 300! You are only at ${emerald} right now!`);

      let mobs = [
        `Zombie`,
        `Skeleton`,
        `Spider`,
        `Creeper`,
        `Witch`,
        `Illager`      
      ]

      mob = mobs[Math.floor(Math.random() * mobs.length)];

      if (mob === 'Creeper') damage = `15`;
      if (mob === 'Spider') damage = `10`;
      if (mob === 'Skeleton') damage = `14`;
      if (mob === 'Zombie') damage = `5`;
      if (mob === 'Witch') damage = `10`;
      if (mob === 'Illager') damage = `5`;

      if (mob === 'Zombie') itemdrop = `Rotten Flesh`;
      if (mob === 'Skeleton') itemdrop = `Bone`;
      if (mob === 'Spider') itemdrop = `String`;
      if (mob === 'Creeper') itemdrop = `Gun Powder`;
      if (mob === 'Witch') itemdrop = `Health Potion`;
      if (mob === 'Illager') itemdrop = `Iron Axe`;
 
      let blocks = [
        '200',
        '400',
        '600',
        '800',
        '1000',
        '1200'
      ]

      block = blocks[Math.floor(Math.random() * blocks.length)];

      let remeralds = [
        `4`,
        `10`,
        `16`,
        `200`,
        `300`
      ]

      remerald = remeralds[Math.floor(Math.random() * remeralds.length)];

      let currenthealth = health - damage;

      let places = [
        'Cabin',
        'Abandoned Village',
        'Witch Hut',
        'Dungeon',
        'Desert Temple',
        'Jungle Temple',
        'Woodland Mansion'
      ]

      place = places[Math.floor(Math.random() * places.length)];


      let adventures = [
        `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **${damage}** damage leaving you at **${currenthealth}/20** hearts. Then you look in to see the mobs that are left and get scared so you run home.`,
        `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **${damage}** damage leaving you at **${currenthealth}/20** hearts, You kill the **${mob}** that hit you and picked up its **${itemdrop}**, Then you look in to the cabin to see the mobs that are left and get scared so you run home.`,
        `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **20** hearts of damage killing you making you lose ${remerald / 2} emeralds.`
    ];

    adventure = adventures[Math.floor(Math.random() * adventures.length)];

    let go = new EmbedBuilder()
      .setTitle(`Adventure Details:`)
      .setDescription(`You start your adventure! ${adventure}`)
      .setColor('Green');

    let stay = new EmbedBuilder()
      .setTitle(`Adventure Details:`)
      .setDescription(`You decide to stay so you turn around and walk into your house!`)
      .setColor(`Red`);
    
    if (interaction.fields.getTextInputValue("GoOrStayInput") === 'Stay'.toLowerCase()) {
        interaction.reply({ embeds: [stay] })
    } else if (interaction.fields.getTextInputValue("GoOrStayInput") === 'Go'.toLowerCase()) {
        interaction.reply({ embeds: [go] })
    }

      if (mob === `Zombie`) itemid = 'rottenflesh';
      if (mob === `Skeleton`) itemid = 'bone';
      if (mob === `Spider`) itemid = 'string';
      if (mob === `Creeper`) itemid = 'gp';
      if (mob === `Witch`) itemid = 'healthp';


      if (adventure === `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **${damage}** damage leaving you at **${currenthealth}/20** hearts. Then you look in to see the mobs that are left and get scared so you run home.`) {
        return db.set(`health_${user.id}`, currenthealth);
      } else if (adventure ===  `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **${damage}** damage leaving you at **${currenthealth}/20** hearts, You kill the **${mob}** that hit you and picked up its **${itemdrop}**, Then you look in to the cabin to see the mobs that are left and get scared so you run home.`) {
        if (mob === 'Illager') {
          db.set(`health_${user.id}`, currenthealth);
          db.set(`axe_${user.id}`, 'Iron');
        } else {
        db.set(`health_${user.id}`, currenthealth)
        db.add(`${itemid}_${user.id}`, 1);
        }
      } else if (adventure === `You only walk for about ${block} blocks until you see a ${place}! You decided to walk in but as soon as you open the door you get hit by a **${mob}** and it does **20** hearts of damage killing you making you lose ${remerald} emeralds.`) { 
        db.set(`health_${user.id}`, 0)
        db.subtract(`emerald_${user.id}`, remeralds / 2)
      }
    }
}