const Discord 	= require('discord.js');
const postEmbed	= require('./commands/postEmbed.js');
const fs = require('fs');

//Posts embeded messages on specific channels

var multipleChannelPostEmbed = function(msg, args) {
	if(!msg.member.roles.cache.some(role => role.permissions.has(0x8))) return;

	var GuildList = require('/assets/multiChannelPostEmbedSettings.json');

	switch(args[1].trim().toLowerCase()) {
		case 'set':
			//changes server !post settings

			var s = "";

			for(var i = 3; i < args.lenght; i++) {
				s += args[i] + " ";
			}

			var channels = s.split(" ");
			
			for(var Guild in Guild.guilds) {
				if(Guild.id == msg.guild.id) {
					switch(args[2].trim().toLowerCase()) {
						case 'post':
							Guild.postChannel = channels;
							fs.writeFileSync("/assets/multiChannelPostEmbedSettings.json", GuildList);
							msg.channel.send(new Discord.MessageEmbed()
							.setColor('#21d92a')
							.setDescription(`Dodano kanały ${channels} do listy post`));
							return;
						break;
						case 'pin':
							Guild.pinChannel = channels;
							fs.writeFileSync("/assets/multiChannelPostEmbedSettings.json", GuildList);
							msg.channel.send(new Discord.MessageEmbed()
							.setColor('#21d92a')
							.setDescription(`Dodano kanały ${channels} do listy pin`));
							return;
					}
				}
			}

			var Guild = {
				id: msg.guild.id,
				postChannel: null,
				pinChannel: null
			};

			switch(args[2].trim().toLowerCase()) {
				case 'post':
					Guild.postChannel = channels;
					GuildList.guilds.push(Guild);
					fs.writeFileSync("/assets/multiChannelPostEmbedSettings.json", GuildList);
					msg.channel.send(new Discord.MessageEmbed()
					.setColor('#21d92a')
					.setDescription(`Dodano kanały ${channels} do listy post`));
					return;
				break;
				case 'pin':
					Guild.pinChannel = channels;
					GuildList.guilds.push(Guild);
					fs.writeFileSync("/assets/multiChannelPostEmbedSettings.json", GuildList);
					msg.channel.send(new Discord.MessageEmbed()
					.setColor('#21d92a')
					.setDescription(`Dodano kanały ${channels} do listy pin`));
					return;
			}

		break;
		case 'multi':
			//posts and pins embeds in accordance with the server !post settings
		break;
		default:
			//posts embed on specified channel
			postEmbed(msg, args);	
	}
};

module.exports = multipleChannelPostEmbed;