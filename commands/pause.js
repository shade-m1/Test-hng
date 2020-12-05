  
const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;


      return queue.textChannel.send(`${message.author} music can not be paused <:IUpitiful:775312077819871252>`).catch(console.error);
    }
};
