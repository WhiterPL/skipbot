const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP')) {
    console.log(args[1]);
    console.log(args[1].slice(1,-1));
    msg.client.channels.get(args[1].slice(1,-1)).send(`Działa`);
  }
};

module.exports = postEmbed;
