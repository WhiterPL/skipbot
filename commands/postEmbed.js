const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.has('OP') || msg.member.roles.cache.has('Half OP')) {
    console.log("Masz OPa");
  }
};

module.exports = postEmbed;
