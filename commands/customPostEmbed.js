const postEmbed = require("./postEmbed.js");

var customPostEmbed = function(client, msg) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(0x8))) return;

	var args = msg.content.split(";");

	var channel = msg.channel;
	var title = "";
	var desc = "";
	
	link = null;
	thumbnail = null;
	image = null;

	switch(args.length) {
		case 6:
			image = args[5] != "" ? args[5] : null;
		case 5:
			thumbnail = args[4] != "" ? args[4] : null;
		case 4:
			link = args[3] != "" ? args[3] : null;
		case 3:
			channel = await client.channels.fetch(args[2].slice(2, -1));
		case 2:
			desc = args[1];
		case 1:
			title = args[0].slice(5);
	}

	console.log(channel);

	postEmbed(channel, title, desc, link, thumbnail, image, msg.author);
};

module.exports = customPostEmbed;