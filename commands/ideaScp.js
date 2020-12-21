const Discord = require('discord.js');
const ideaFile = require('./assets/words.json');

//Gets random SCP idea from JSON file

var ideaScp = function(msg, args) {
	msg.channel.send(new Discord.MessageEmbed()
						.setColor('#21d92a')
						.setTitle('💡 Pomysł na skipa!')
						.setDescription(
							`Anomalia, która jest ${ideaFile.object[Math.floor((Math.random() * ideaFile.object.length))]}, ` +
							`${ideaFile.descriptor[Math.floor((Math.random() * ideaFile.descriptor.length))]} i ` +
							`opierająca się na ${ideaFile.theme[Math.floor((Math.random() * ideaFile.theme.length))]}.`
						)
	);

	console.log(`${msg.author.username}: pomysl`);
}

module.exports = ideaScp;