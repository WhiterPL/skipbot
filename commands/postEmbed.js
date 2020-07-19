const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP') && args[1] != null) {
  
  for (var i = 3; i < args.length; i++) {
    args[2] += ` ${args[i]}`;
  }
    
  var embedAtribs = args[2].split(';');
  console.log(embedAtribs);
    
  try {
    msg.client.channels.fetch(args[1].slice(2,-1))
        .then(channel => channel.send(`Działa`));
  } catch(e) {
    msg.channel.send('Nieprawidłowy kanał'); 
  }
  }
};

module.exports = postEmbed;
