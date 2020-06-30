const http 	= require("http");
const request 	= require('request');
const express 	= require("express");
const Discord 	= require('discord.js');

const client 	= new Discord.Client();
const app 	= express();

var google 	= process.env.GOOGLE;
var googlen 	= process.env.GOOGLEN;
var token 	= process.env.TOKEN;
var port 	= process.env.PORT || 3000;


//Commands
const help = require('./commands/help.js');

app.listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 3000");
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("!pomoc");
});

client.on('message', msg => {
	if (msg.author.bot || !msg.content.startsWith('!')){return;}
	var args = [
		msg.content.slice(1, msg.content.indexOf(' ')),
		msg.content.slice(msg.content.indexOf(' ')+1)
		];
	
	console.log(args);
	if (args[0] == 'help') {help(msg);}
});

client.login(token);
