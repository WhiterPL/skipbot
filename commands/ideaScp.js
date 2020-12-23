const postEmbed = require("./postEmbed.js");
const ideaFile = require('./assets/words.json');

//Gets random SCP idea from JSON file

var ideaScp = function(msg, args) {
	
	postEmbed(msg.channel, 
		"💡 Pomysł na skipa!", 
		`Anomalia, która jest ${ideaFile.object[Math.floor((Math.random() * ideaFile.object.length))]}, ` +
		`${ideaFile.descriptor[Math.floor((Math.random() * ideaFile.descriptor.length))]} i ` +
		`opierająca się na ${ideaFile.theme[Math.floor((Math.random() * ideaFile.theme.length))]}.`
	);

	console.log(`${msg.author.username}: pomysl`);
}

module.exports = ideaScp;