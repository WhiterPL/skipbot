const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP')) {
    console.log(args[1]);
  }
};

module.exports = postEmbed;
