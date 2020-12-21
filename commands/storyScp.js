const Discord = require('discord.js');
const storyFile = require('./assets/story.json');

const emotes = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "0️⃣",
  ];

//Interactive text adventure generated from JSON file

var storyScp = function(msg, args) {
	
  var story = new Discord.MessageEmbed()
  		.setColor('#21d92a')
                .setTitle(storyFile[args].title)
                .setDescription(storyFile[args].content)
		.setFooter(msg.author.username, msg.author.avatarURL());
	
  msg.channel.send({embed: story}).then(embedMsg => {
	  
  	for (var i = 0; i < storyFile[args].goto.length; i++) {
   		embedMsg.react(emotes[i]);
 	}
	  
	const filter = (reaction, user) => {
		return emotes.includes(reaction.emoji.name) && user.id === msg.author.id;
  	};
	  
	embedMsg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
    		for (var i = 0; i < 10; i++) {
      			if (reaction.emoji.name === emotes[i]) {
        			storyScp(msg, storyFile[args].goto[i]);
				embedMsg.delete({ timeout: 100 });
      			}
    		}
	});
  });
};

module.exports = storyScp;
