const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;


    queue.textChannel.send(`${message.author} Music can not be stopped <a:aIUnono:775312110867185694> `).catch(console.error);
  }
};
