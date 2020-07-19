const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP') && args[1] != null) {
  
  for (var i = 3; i < args.length; i++) {
    args[2] += ` ${args[i]}`;
  }
    
  var embedAtribs = args[2].split(';');
    
  try {
    msg.client.channels.fetch(args[1].slice(2,-1))
        .then(channel => channel.send(new Discord.MessageEmbed()
                                        .setColor('#21d92a')
                                        .setTitle(embedAtribs[0])
                                        .setURL(embedAtribs[1])
                                        .setDescription(embedAtribs[2])
                                        .setFooter(msg.author.username, msg.author.avatarURL()
                                        .setTimestamp())
        ));
  } catch(e) {
    msg.channel.send('Nieprawidłowy kanał'); 
  } finally {
    console.log(`${msg.author.username}: post`); 
  }
  }
};

module.exports = postEmbed;
