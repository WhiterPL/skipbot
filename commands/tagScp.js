const postEmbed = require("./postEmbed.js");

//Gets pages with specific tag

var tagScp = function(msg, args) {
  if (args.length == 2) {
    postEmbed(msg.channel, args[1], "", `http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}`);
    console.log(`${msg.author.username}: tag ${args[1]}`);             
  }
  else if (args.length > 2) {
    var list = "";
    
    for (var i = 1; i <= args.length-1; i++) {
      console.log(`${msg.author.username}: tag ${args[i]}`);
      list += `[${args[i]}](http://scp-wiki.net.pl/system:page-tags/tag/${args[i]}) \n`;
    }
    
    postEmbed(msg.channel, "Tagi", list);
  }
};

module.exports = tagScp;
