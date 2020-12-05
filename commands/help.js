const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["help"],
  description: "iu bot help",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor('#7c31f3')
    .setTitle('IU Radio Help')
    .setAuthor('', 'https://cdn.discordapp.com/attachments/759439449188204557/779633759263391744/2020-11-20_08_36_57-Window.png', '')
    .setDescription('A 24/7 Radio bot developed just for IUcord . Enjoy💗 ')
    .setThumbnail('https://cdn.discordapp.com/attachments/676787877878824980/777071055691841536/247c293730d0bee348aafad62746c4e5.png')
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'iu!play', value: 'play all iu songs', inline: true },
        { name: 'Problems', value: 'Contact <@685808844596707339> ASAP', inline: true },
    )
    .addField('iu!shuffle', 'shuffles the queue', false)
    .setImage('https://cdn.discordapp.com/attachments/676787877878824980/778613225829957682/wp3743144-iu-k-pop-wallpapers.jpg')
    .setTimestamp()
    .setFooter('Developed By shadmehr#1111', 'https://cdn.discordapp.com/avatars/532619967837896734/a_c8367aa6649095e866c86eac206e47b3.gif');



    return message.channel.send(helpEmbed).catch(console.error);
  }
};

