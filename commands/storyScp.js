const Discord = require('discord.js');
const storyFile = require('./assets/story.json');

var storyScp = function(msg, args) {
  console.log('Funkcja działa');
  console.log(storyFile);
 // msg.channel.send(new Discord.MessageEmbed()
 // 			    		.setColor('#21d92a')
 //               .setTitle('Historia')
 //               .setDescription(storyFile[0].content)
 //               );
};

module.exports = storyScp;
