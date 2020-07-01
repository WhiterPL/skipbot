const express 	= require("express");
const Discord 	= require('discord.js');

const client 	= new Discord.Client();
const app 	= express();

const token 	= process.env.TOKEN;
const port 	= process.env.PORT || 3000;


//Commands
var help 	= require('./commands/help.js');
var tagScp 	= require('./commands/tagScp.js');
var randomScp 	= require('./commands/randomScp.js');
var searchScp	= require('./commands/searchScp.js');
var searchWiki	= require('./commands/searchWiki.js');
var fuelScp	= require('./commands/fuelScp.js');

app.listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 3000");
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("!pomoc");
});

client.on('message', msg => {
	if (msg.author.bot || !msg.content.startsWith('!')){return;}
	var args = msg.content.split(' ');
	
	switch(args[0]) {
		case '!pomoc':
			help(msg, args);
		break;
		case '!tag':
			tagScp(msg, args);
		break;
		case '!rand':
			randomScp(msg, args[1]);
		break;
		case '!scp':
			searchScp(msg, args);
		break;
		case '!wiki':
			searchWiki(msg, args);
		break;
		case '!scpfuel':
			fuelScp(msg, args);
		break;
		case 'r34':
			msg.channel.send(new Discord.MessageAttachment('https://i.kym-cdn.com/entries/icons/original/000/033/758/Screen_Shot_2020-04-28_at_12.21.48_PM.png'));
			console.log(`${msg.author.username} is horny!`);
		break;
	}
});

client.login(token);
