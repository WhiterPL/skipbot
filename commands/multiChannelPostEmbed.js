const Discord 	= require('discord.js');
const postEmbed	= require('./postEmbed.js');
const fs = require('fs');

//Posts embeded messages on specific channels

var multipleChannelPostEmbed = function(msg, args) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(0x8))) return;

	var GuildList = require('./assets/multiChannelPostEmbedSettings.json');

	switch(args[1].trim().toLowerCase()) {
		case 'multi':
			//posts and pins embeds in accordance with the server !post settings
		break;
		default:
			//posts embed on specified channel
			postEmbed(msg, args);	
	}
};

module.exports = multipleChannelPostEmbed;