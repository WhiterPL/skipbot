var tag = function(msg, args[]) {
  if (args.length == 2) {
					msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle(args[1])
                    	.setURL(`http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}`));
	}
  else if (args.length > 2) {
					var list = "";
					for (var i = 1; i <= args.length-1; i++) {
					  list += `[${args[i]}](http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}) \n`;
					}
					msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle('Tagi')
                    	.setDescription(list));
	}
};
exports.data = tag;
