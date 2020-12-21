const express 	= require("express");
const Discord 	= require('discord.js');

const client 	= new Discord.Client();
const app 	= express();

const token 	= process.env.TOKEN;
const port 	= process.env.PORT || 3000;


//Commands
var fun 	= require('./commands/fun.js');
var help 	= require('./commands/help.js');
var tagScp 	= require('./commands/tagScp.js');
var fuelScp	= require('./commands/fuelScp.js');
var ideaScp = require('./commands/ideaScp.js');
var storyScp	= require('./commands/storyScp.js');
var randomScp 	= require('./commands/randomScp.js');
var searchScp	= require('./commands/searchScp.js');
var postEmbed	= require('./commands/multiChannelPostEmbed.js');
var searchWiki	= require('./commands/searchWiki.js');

app.listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 3000");
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("o życie | !pomoc");
});

client.on('message', msg => {
	if (msg.author.bot || !msg.content.startsWith('!')) return;
	
	var args = msg.content.split(' ');
	
	switch(args[0].slice(1).toLowerCase()) {	
		case 'pomoc':
			help(msg, args);
		break;
		case 'tag':
		case 't':
			tagScp(msg, args);
		break;
		case 'rand':
		case 'r':
			randomScp(msg, args[1]);
		break;
		case 'scp':
		case 's':
			searchScp(msg, args);
		break;
		case 'wiki':
		case 'w':
			searchWiki(msg, args);
		break;
		case 'scpfuel':
		case 'sf':
			fuelScp(msg, args);
		break;
		case 'post':
			postEmbed(msg, args);
		break;
		case 'hist':
			storyScp(msg, 0);
		break;
		case 'pomysł':
			ideaScp(msg, args);
		break;
		default:
			fun(msg, args);
		break;
	}
});

client.login(token);
