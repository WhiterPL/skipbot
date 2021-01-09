const Discord = require('discord.js');

var postEmbed = function(channel, title, desc, author = null, link = null, thumbnail = null, image = null) {
  channel.send(new Discord.MessageEmbed()
    .setColor('#21d92a')
    .setTitle(title)
    .setDescription(desc)
    .setURL(link)
    .setThumbnail(thumbnail)
    .setImage(image)
    .setFooter(author.username, author.avatarURL()))
};

module.exports = postEmbed;
