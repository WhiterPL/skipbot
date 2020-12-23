const postEmbed = require("./postEmbed.js");
const addZeros 	= require('./addZeros.js');

//Gets specific SCP article from Polish or English wiki

function setDetails(s, details) {
	// ANG WIKI
	if(s.startsWith('o')) {
		s = s.slice(1);
		details.link += '/scp-';
	}
	// PL WIKI
	else if (s.startsWith('pl')) {
		s = s.slice(2);
		details.link += '.pl/scp-pl-';
		details.title += 'PL-';
	}
	else {
		details.link += '.pl/scp-';
	}
	
	//JOKE
	if (s.endsWith("j")) {
		s = s.slice(0,-1);
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		details.link += s + '-j';
		details.title += s + '-J';
	}
	//EXPLAINED
	else if (s.endsWith("ex")) {
		s = s.slice(0,-2);
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		details.link += s + '-ex';
		details.title += s + '-EX';
	}
	else {
		if(isNaN(s) || s < 0 || s.includes("+")) {return;}
		s = addZeros(s);
		details.link += s;
		details.title += s;
	}
	
	return details;
}


var searchScp = function(msg, args) {
	var details = {
		link: "http://scp-wiki.net",
		title: "SCP-"
	};
	
	if (args.length == 2) {
		args[1] = args[1].toLowerCase();
		console.log(`${msg.author.username}: ${args[1]}`);
		details = setDetails(args[1], details);
		try {
			postEmbed(msg.channel, details.title, "", details.link);
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
			var details = {
				link: "http://scp-wiki.net",
				title: "SCP-"
			};
			args[i] = args[i].toLowerCase();
			console.log(`${msg.author.username}: ${args[i]}`);
			details = setDetails(args[i], details);
			
			list += "[" + details.title + "](" + details.link + ") \n";
			console.log(`${msg.author.username}: ${args[i]}`);
		}
		try {
			postEmbed(msg.channel, "Lista Skipów", list);
		} catch (e) {
			console.log("Error " + e);
		}
		
	}
};

module.exports = searchScp;
