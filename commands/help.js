const Discord 	= require('discord.js');

var help = function(msg, args) {
  msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
  			    		.setTitle('Pomoc')
                .setAuthor('Github', './assets/github_white.png', 'https://github.com/WhiterPL/skipbot')
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
module.exports = help;
