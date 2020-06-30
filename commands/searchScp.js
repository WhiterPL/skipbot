const Discord 	= require('discord.js');
const addZeros 	= require('./addZeros.js');

function checkLang(s, link, title) {
	// ANG WIKI
	if(s.startsWith('o')) {
		args[1] = args[1].slice(1);
		link += '/scp-';
	}
	// PL WIKI
	else if (s.startsWith('pl')) {
		args[1] = args[1].slice(2);
		link += '.pl/scp-pl-';
		title += 'PL-';
	}
	else {
		link += '.pl/scp-';
	}
}

function checkType(s, link, title) {
	//JOKE
	if (s.endsWith("j")) {
		s = s.slice(0,-1);
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		link += s + '-j';
		title += s + '-J';
	}
	//EXPLAINED
	else if (s.endsWith("ex")) {
		s = s.slice(0,-2);
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		link += s + '-ex';
		title += s + '-EX';
	}
	else {
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		link += s;
		title += s;
	}
}

var searchScp = function(msg, args) {
  var link = 'http://scp-wiki.net';
	var title = 'SCP-';
	
	if (args.length == 2) {
		args[1] = args[1].toLowerCase();
		
		checkLang(args[1], link, title);
		checkType(args[1], link, title);
		
		try {
			msg.channel.send(new Discord.MessageEmbed()
				.setColor('#21d92a')
				.setTitle(title)
				.setURL(link));
		
		} catch (e) {
			console.log("Error " + e);
		}
		finally {
			console.log(`${msg.author.username}: ${args[1]}`);
		}
	}
	else if (args.length > 2) {
		var list = "";
		for (var i = 1; i <= args.length-1; i++) {
			link = 'http://scp-wiki.net';
			title = 'SCP-';
			args[i] = args[i].toLowerCase();
			
			checkLang(args[i], link, title);
			checkType(args[i], link, title);
			
			list += "[" + title + "](" + link + ") \n";
			console.log(`${msg.author.username}: ${args[i]}`);
		}
		try {
			msg.channel.send(new Discord.MessageEmbed()
				.setColor('#21d92a')
				.setTitle('Lista SCP')
				.setDescription(list));
		
		} catch (e) {
			console.log("Error " + e);
		}
		
	}
};

module.exports = searchScp;
