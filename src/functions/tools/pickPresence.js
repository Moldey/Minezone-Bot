const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "Players Mine",
        status: "dnd",
      },
      {
        type: ActivityType.Listening,
        text: "Commands",
        status: "idle",
      },
      {
        type: ActivityType.Playing,
        text: "with Discord.js",
        status: "online",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
