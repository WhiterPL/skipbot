const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP')) {
    console.log(args[1]);
    const channel = args[1].slice(2,-2);
    console.log(channel);
    channel.send("To działa");
    
  }
};

module.exports = postEmbed;
