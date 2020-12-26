const postEmbed = require("./postEmbed.js");

var customPostEmbed = function(msg) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(ADMINISTRATOR))) return;

	var title = "";
	var desc = "";
	var link = null;
	var thumbnail = null;
	var image = null;
	var channels = [msg.channel];
	var pins = null;

	if(msg.content.includes("title:")) {
		title = msg.content.slice(msg.content.indexOf("title:"));
		title = title.slice(5, title.indexOf(";"));
	}

	if(msg.content.includes("desc:")) {
		desc = msg.content.slice(msg.content.indexOf("desc:"));
		desc = desc.slice(4, desc.indexOf(";"));
	}

	if(msg.content.includes("link:")) {
		link = msg.content.slice(msg.content.indexOf("link:"));
		link = link.slice(4, link.indexOf(";"));
	}

	if(msg.content.includes("thumbnail:")) {
		thumbnail = msg.content.slice(msg.content.indexOf("thumbnail:"));
		thumbnail = thumbnail.slice(9, desc.indexOf(";"));
	}

	if(msg.content.includes("image:")) {
		image = msg.content.slice(msg.content.indexOf("image:"));
		image = image.slice(5, image.indexOf(";"));
	}

	if(msg.content.includes("channels:")) {
		channels = msg.content.slice(msg.content.indexOf("channels:"));
		channels = channels.slice(8, channels.indexOf(";"));
		channels = channels.split(" ");
	}

	if(msg.content.includes("pins:")) {
		pins = msg.content.slice(msg.content.indexOf("pins:"));
		pins = pins.slice(4, pins.indexOf(";"));
		pins = pins.split(" ");
	}

	for(var channel in channels) {
		postEmbed(channel, title, desc, link, thumbnail, image, pins.indexOf(channel) == -1 ? false : true);
		console.log(`${msg.author.username}: ${title} ; ${desc} ; ${link} ; ${thumbnail} ; ${image} ; ${channels} ; ${pins}`);
	}
};

module.exports = customPostEmbed;