const Discord 	= require('discord.js');
const addZeros = require('./addZeros.js');

var randomScp = function(msg, args) {
if (args == null) {
	msg.channel.send(new Discord.MessageEmbed()
		.setColor('#21d92a')
		.setTitle('Random Skip')
		.setURL('http://scp-wiki.net.pl/random:random-scp'));
}
else {
	args = args.trim().toLowerCase();
		switch(args) {
			case 'pl':
				var rand = Math.floor((Math.random()*200)+1).toString();
                    		rand = addZeros(rand);
                    		msg.channel.send(new Discord.MessageEmbed()
                    			.setColor('#21d92a')
                    			.setTitle('SCP-PL-'+ rand)
                    			.setURL('http://scp-wiki.net.pl/scp-pl-' + rand));
			break;
			case 'ang':
                   		var rand = Math.floor((Math.random()*6000)+1).toString();
                   		rand = addZeros(rand);
                   		msg.channel.send(new Discord.MessageEmbed()
                   			.setColor('#21d92a')
                   			.setTitle('SCP-'+ rand)
                   			.setURL('http://scp-wiki.net.pl/scp-' + rand));
			break;
			    }
	}
};
exports.data = randomScp;
