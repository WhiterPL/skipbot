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
    try {
      channel.send(new Discord.MessageEmbed()
      .setColor('#21d92a')
      .setTitle(title)
      .setDescription(desc)
      .setURL(link)
      .setThumbnail(thumbnail)
      .setImage(image))
    } catch (e2) {console.log(e2)}
    
  }
  
};

module.exports = postEmbed;
