const postEmbed = require("./postEmbed.js");

var customPostEmbed = function(msg) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(0x8))) return;

	var title = "";
	var desc = "";
	var link = null;
	var thumbnail = null;
	var image = null;
	var channels = [msg.channel];
	var pins = new Array(1);

	if(msg.content.includes("title:")) {
		title = msg.content.slice(msg.content.indexOf("title:"));
		title = title.slice(6, title.indexOf(";") == -1 ? null : title.indexOf(";"));
	}

	if(msg.content.includes("desc:")) {
		desc = msg.content.slice(msg.content.indexOf("desc:"));
		desc = desc.slice(5, desc.indexOf(";") == -1 ? null : desc.indexOf(";"));
	}

	if(msg.content.includes("link:")) {
		link = msg.content.slice(msg.content.indexOf("link:"));
		link = link.slice(5, link.indexOf(";") == -1 ? null : link.indexOf(";"));
	}

	if(msg.content.includes("thumbnail:")) {
		thumbnail = msg.content.slice(msg.content.indexOf("thumbnail:"));
		thumbnail = thumbnail.slice(10, thumbnail.indexOf(";") == -1 ? null : thumbnail.indexOf(";"));
	}

	if(msg.content.includes("image:")) {
		image = msg.content.slice(msg.content.indexOf("image:"));
		image = image.slice(6, image.indexOf(";") == -1 ? null : image.indexOf(";"));
	}

	if(msg.content.includes("channels:")) {
		channels = msg.content.slice(msg.content.indexOf("channels:"));
		channels = channels.slice(9, channels.indexOf(";") == -1 ? null : channels.indexOf(";"));
		channels = channels.split(" ");

		for(var i = 0; i < channels.length; i++) {
			msg.client.channels.fetch(channels[i])
			.then(channel => channels[i] = channel);
		}
	}

	if(msg.content.includes("pins:")) {
		pins = msg.content.slice(msg.content.indexOf("pins:"));
		pins = pins.slice(5, pins.indexOf(";") == -1 ? null : pins.indexOf(";"));
		pins = pins.split(" ");

		for(var i = 0; i < pins.length; i++) {
			msg.client.channels.fetch(pins[i])
			.then(channel => pins[i] = channel);
		}
	}

	for(var i = 0; i < channels.length; i++) {
		console.log(`${msg.author.username}: ${title} ; ${desc} ; ${link} ; ${thumbnail} ; ${image} ; ${channels[i]} ; ${pins.indexOf(channels[i]) == -1 ? false : true}`);
		postEmbed(channels[i], title, desc, link, thumbnail, image, pins.indexOf(channels[i]) == -1 ? false : true);
	}
};

module.exports = customPostEmbed;