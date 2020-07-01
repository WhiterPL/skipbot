const Discord = require('discord.js');
const request = require('request');
const replaceChars = require('./replaceChars.js');

const google = process.env.GOOGLE;
const googlen = process.env.GOOGLEN;

var wiki = function(msg, args) {
  if (args.length > 2) for (var i = 2; i <= args.length-1; i++) {
    args[1] = `${args[1]} ${args[i]}`;
  }
        
  try {
    request({
      url: `https://www.googleapis.com/customsearch/v1?key=${google}&cx=${googlen}&q=${replaceChars(args[1])}`,
      json: true
    }, async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        try {
          var link  = await body.items[0].link;
          var desc  = await body.items[0].snippet;
          var title = await body.items    
          msg.channel.send(new Discord.MessageEmbed()
          	.setColor('#21d92a')
          	.setTitle(title)
          	.setURL(link)
          	.setDescription(desc));
          console.log(`${msg.author.username}: ${args[1]}`);
        } catch (e) {
          msg.channel.send(new Discord.MessageEmbed()
            .setColor('#21d92a')
            .setTitle(args[1])
            .setURL(`http://scp-wiki.net.pl/search:site/a/p/q/${args[1]}`)
            .setDescription(`Wyszukania dla strony: ${args[1]}`));
          console.log(`${msg.author.username}: ${args[1]} ${response.statusCode}`);
        }          
      }
			else {
			  msg.channel.send(new Discord.MessageEmbed()
          .setColor('#21d92a')
          .setTitle(args[1])
          .setURL(`http://scp-wiki.net.pl/search:site/a/p/q/${args[1]}`)
          .setDescription(`Wyszukania dla strony: ${args[1]}`));
        console.log(`${msg.author.username}: ${args[1]} ${response.statusCode}`);
	    }
    });
  } catch (e) {
    console.log(`Błąd podczas wyszukiwania frazy: ${args[1]}`);
    console.log(`https://www.googleapis.com/customsearch/v1?key=${google}&cx=${googlen}&q=${replaceChars(args[1])}`);
  }
}

module.exports = wiki;
