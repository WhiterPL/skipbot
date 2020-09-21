const Discord = require('discord.js');
const storyFile = require('./assets/story.json');
const numToEmote = require('./numToEmote.js');

var storyScp = function(msg, args) {
  msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
                .setTitle('Historia')
                .setDescription(storyFile[args[0]].content)
                );
  
  for (var i = 1; i <= storyFile[args[0]].goto.length; i++) {
    msg.react(numToEmote(i));
    
  }
  //TODO:
  // - Timestamp i autor
  // - Bot czeka na reakcje
  // - Reakcje przesyłają do następnych tekstów
};

module.exports = storyScp;
