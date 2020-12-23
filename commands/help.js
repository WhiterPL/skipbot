const Discord = require('discord.js');

//Displays list of commands and proper syntax

var help = function(msg, args) {
	
  msg.channel.send(new Discord.MessageEmbed()
  			    .setColor('#21d92a')
  			    .setTitle('Lista komend')
                .setAuthor('Github', 'https://raw.githubusercontent.com/WhiterPL/skipbot/v1.1/commands/assets/github_white.png', 'https://github.com/WhiterPL/skipbot')
  			    .setDescription('**• !pomoc** - wyświetla dostępne komendy \n' +
  								'**• !scpfuel** - wysyła link do losowego obrazka zgodnego z licencją CC BY-SA 3.0. Alias: **!sf**\n' +
								'**• !pomysł** - losuje pomysł na raport. \n' + 
								'**• !rand** `pl/ang` - wysyła link do losowego polskiego/angielskiego raportu. Alias: **!r** \n' +
  								'**• !wiki** `nazwa` - wysyła link do strony na polskiej wiki. Alias: **!w**\n' +
                    			'**• !hist** - pozwala zagrać w interaktywną grę tekstową \n' +            
  								'**• !tag** `nazwa` - wysyła link do listy stron z odpowiednim tagiem. Alias: **!t**\n' +
  								'**• !scp** `numer` - wysyła link do angielskiego raportu. Alias: **!s**\n \n' +
  								'   **Opcje wyszukiwania:** \n' +
  								'**PL**`numer` - wyszukuje polski raport \n' +
  								'**O**`numer` - wyszukuje raport na angielskiej wiki \n' +
  								'`numer`**J** - wyszukuje raport Joke \n' +
  								'`numer`**EX** - wyszukuje obiekty zrozumiane')
  							);
  console.log(`${msg.author.username}: pomoc`);
};
module.exports = help;
