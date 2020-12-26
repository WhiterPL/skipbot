const Discord = require('discord.js');

var postEmbed = function(channel, title, desc, link = null, thumbnail = null, image = null, pin = false) {
  channel.send(new Discord.MessageEmbed()
    .setColor('#21d92a')
    .setTitle(title)
    .setDescription(desc)
    .setURL(link)
    .setThumbnail(thumbnail)
    .setImage(image))
    .then(message => pin ? message.pin() : null);
};

module.exports = postEmbed;
