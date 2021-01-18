const postEmbed = require("./postEmbed.js");

var customPostEmbed = function(msg) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(0x8))) return;

	var args = msg.content.split(";");

	var channel = msg.channel;
	var title = "";
	var desc = "";
	
	link = null;
	thumbnail = null;
	image = null;

	switch(args.length) {
		case 5:
			image = args[4] != "" ? args[4] : null;
		case 4:
			thumbnail = args[3] != "" ? args[3] : null;
		case 3:
			link = args[2] != "" ? args[2] : null;
		case 2:
			desc = args[1];
		case 1:
			title = args[0].slice(5);
	}

	console.log(msg.channel);

	postEmbed(channel, title, desc, link, thumbnail, image, msg.author);
};

module.exports = customPostEmbed;