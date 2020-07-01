const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP')) {
    console.log(args[1]);
    const yourchannel = msg.guild.channels.some(channel => channel.id === args[1].slice(2,-1));
    console.log(yourchannel);
    yourchannel.send("To działa");
    
  }
};

module.exports = postEmbed;
