const Discord = require('discord.js');

var postEmbed = function(channel, title, desc, link = null, thumbnail = null, image = null, author = null) {
  try {
    channel.send(new Discord.MessageEmbed()
    .setColor('#21d92a')
    .setTitle(title)
    .setDescription(desc)
    .setURL(link)
    .setThumbnail(thumbnail)
    .setImage(image)
    .setFooter(author.tag, author.avatarURL()))
  } catch (e) {
    channel.send(new Discord.MessageEmbed()
    .setColor('#21d92a')
    .setTitle(title)
    .setDescription(desc)
    .setURL(link)
    .setThumbnail(thumbnail)
    .setImage(image))
  }
  
};

module.exports = postEmbed;
