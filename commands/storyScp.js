const Discord = require('discord.js');
const storyFile = require('./assets/story.json');

var emotes = [
    "\:one:",
    "\:two:",
    "\:three:",
    "\:four:",
    "\:five:",
    "\:six:",
    "\:seven:",
    "\:eight:",
    "\:nine:",
    "\:zero:"
  ];

var storyScp = function(msg, args) {
  msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
                .setTitle('Historia')
                .setDescription(storyFile[args].content)
                );
  
  for (var i = 0; i < storyFile[args].goto.length; i++) {
    msg.react(emotes[i]);
  }
  
  const filter = (reaction, user) => {
	  return emotes.includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
    for (var i = 0; i < 10; i++) {
      if (reaction.emoji.name === emotes[i]) {
        storyScp(msg, storyFile.goto[i]);
      }
    }
	});
  
  //TODO:
  // - Timestamp i autor
};

module.exports = storyScp;
