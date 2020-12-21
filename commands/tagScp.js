const Discord 	= require('discord.js');

//Gets pages with specific tag

var tagScp = function(msg, args) {
  if (args.length == 2) {
    console.log(`${msg.author.username}: tag ${args[1]}`);
    msg.channel.send(new Discord.MessageEmbed()
	    .setColor('#21d92a')
	    .setTitle(args[1])
	    .setURL(`http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}`));                
  }
  else if (args.length > 2) {
    var list = "";
    for (var i = 1; i <= args.length-1; i++) {
      console.log(`${msg.author.username}: tag ${args[i]}`);
      list += `[${args[i]}](http://scp-wiki.net.pl/system:page-tags/tag/${args[i]}) \n`;
    }
    msg.channel.send(new Discord.MessageEmbed()
      .setColor('#21d92a')
      .setTitle('Tagi')
      .setDescription(list));                
  }
};

module.exports = tagScp;
