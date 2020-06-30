const http 	= require("http");
const request 	= require('request');
const express 	= require("express");
const Discord 	= require('discord.js');

const client 	= new Discord.Client();
const app 	= express();

const google 	= process.env.GOOGLE;
const googlen 	= process.env.GOOGLEN;
const token 	= process.env.TOKEN;
const port 	= process.env.PORT || 3000;


//Commands
var help 	= require('./commands/help.js');
var tag 	= require('./commands/tag.js');
var randomScp = require('./commands/randomScp.js');

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
	
	console.log(args);
	switch(args[0].slice(1)) {
		case 'pomoc':
			help(msg);
		break;
		case 'tag':
			tag(msg, args);
		break;
		case 'rand':
			randomScp(msg, args[1]);
		break;
	}
});

client.login(token);
