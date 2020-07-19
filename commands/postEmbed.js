const Discord = require('discord.js');

var postEmbed = function(msg, args) {
  if(msg.member.roles.cache.some(role => role.name === 'OP') || msg.member.roles.cache.some(role => role.name === 'Half OP')) {
    console.log(args[1]);
    console.log(args[1].slice(1,-1));
    msg.client.channels.fetch(args[1].slice(2,-1))
      .then(channel => channel.send(`Działa`));
  }
};

module.exports = postEmbed;
