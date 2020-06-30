const Discord 	= require('discord.js');

//var tag = function(msg, args) {
//	console.log(args);
////  if (args.length == 2) {
//	msg.channel.send(new Discord.MessageEmbed()
//		.setColor('#21d92a')
//		.setTitle(args[1])
//		.setURL(`http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}`));
//	}
//  else if (args.length > 2) {
//	var list = "";
//	for (var i = 1; i <= args.length-1; i++) {
//		list += `[${args[i]}](http://scp-wiki.net.pl/system:page-tags/tag/${args[i]}) \n`;
//	}
//	msg.channel.send(new Discord.MessageEmbed()
//	.setColor('#21d92a')
//	.setTitle('Tagi')
//	.setDescription(list));
//	}
//};

var tag = function(msg, args) {
  console.log(args)
  msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
  			    		.setTitle('Lista komend')
  			    		.setDescription('**• !pomoc** - wyświetla dostępne komendy \n' +
  									'**• !scpfuel** - wysyła link do losowego obrazka zgodnego z licencją CC BY-SA 3.0 \n' +
  									'**• !rand** `pl/ang` - wysyła link do losowego polskiego/angielskiego raportu \n' +
  									'**• !wiki** `nazwa` - wysyła link do strony na polskiej wiki \n' +
  									'**• !tag** `nazwa` - wysyła link do listy stron z odpowiednim tagiem \n' +
  									'**• !scp** `numer` - wysyła link do angielskiego raportu. \n \n' +
  									'   **Opcje wyszukiwania:** \n' +
  									'**PL**`numer` - wyszukuje polski raport \n' +
  									'**O**`numer` - wyszukuje raport na angielskiej wiki \n' +
  									'`numer`**J** - wyszukuje raport Joke \n' +
  									'`numer`**EX** - wyszukuje obiekty zrozumiane')
  							);
};


exports.data = tag;
