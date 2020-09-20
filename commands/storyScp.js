const Discord = require('discord.js');
const storyFile = require('./assets/story.json');

var storyScp = function(msg, args) {
  msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
                .setTitle('Historia')
                .setDescription(storyFile[0].content)
                );
  //TODO:
  // - Timestamp i autor
  // - Bot czeka na reakcje
  // - Reakcje przesyłają do następnych tekstów
};

module.exports = storyScp;
