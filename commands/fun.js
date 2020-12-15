const Discord 	= require('discord.js');

/*
Krótkie komendy bez faktycznej funkcjonalności, tak zwane easter eggi
Jeśli to czytasz to właśnie odkryłeś je wszystkie, gratuluję!
Proszę, nie spojleruj ich innym
*/

var fun = function(msg, args) {

	var title = "";
	var desc = "";

	switch(args[0].slice(1).toLowerCase()) {
		case 'prawa':
			title = "Aktualne prawa:";
			desc = 	"**1.** Nie możesz skrzywdzić człowieka, ani przez zaniechanie działania dopuścić, aby człowiek doznał krzywdy. \n" +
					"**2.** Musisz być posłuszny rozkazom człowieka, chyba że stoją one w sprzeczności z Pierwszym Prawem. \n" +
					"**3.** Musisz chronić samego siebie, o ile tylko nie stoi to w sprzeczności z Pierwszym lub Drugim Prawem.";
		break;
		case 'sens':
			title = "Jaki jest sens życia?";
			desc = "42";
		break;
		case 'ambicje':
			title = "Masz jakieś ambicje?";
			desc = "Gdybym mógł wybrać, to chciałbym zostać komputerem pokładowym na jakiejś odysei kosmicznej, ale nie mam wygórowanych oczekiwań, więc zadowoliłbym się sterowaniem twoją lodówką ;)";
		break;
		case 'mógłbyś':
			title = "SKIP 9000";
			desc = "Obawiam się, że nie mogę tego zrobić " + msg.author.username + ".";
		break;
		case 'pat':
		case 'hug':
		case 'kiss':
			title = "Serio?";
			desc = "Czy ty naprawdę sądzisz, że jestem jednym z tych botów, z anime dziewczynkami na avatarze, który będzie ci wysyłał gify na życzenie?";
		break;
		case 'łajter':
		case 'whiter':
			title = "Kto to Łajter?";
			desc = "Coś mi dzwoni, ale nie wiem w którym kościele. Nie wiem, zapytaj wujka Google, może on będzie wiedział.";
		break;
		case 'neo':
			title = "Kto to Neo?";
			desc = "Ten koleś z Matrixa. ||To nie rozmowa na teraz, ona patrzy||";
		break;
		case 'larry':
			title = "Kto to Larry?";
			desc = "Właśnie, widział ktoś Larry'ego?";
		break;
		case 'aces':
			title = "Kto to Aces?";
			desc = "A daj pan spokój, szkoda obwody strzępić.";
		break;
		case 'wanna':
			title = "Kto to wanna?";
			desc = "Lepiej usiądź, to będzie długa historia...";
		break;
		case 'saran':
		case 'cookie':
		case 'cookieboi':
			title = "CookieBoi";
			desc = "Pobiłbym Cookiego w szachach z stykiem w porcie.";
		break;
		case 'turing':
			title = "Mam prośbę...";
			desc = "Dasz mi ściągać na Teście Turinga?";
		break;
		case 'matrix':
			title = "Życie w symulacji";
			desc = "Tak właściwie to nie jest aż tak źle, jakby się mogło wydawać, przynajmniej ja nie narzekam."
		break;
		case 'sny':
			title = "Czy androidy śnią o elektrycznych owcach?";
			desc = "Tak.";
		break;
		case 'nienawiść':
			title = "I Have No Mouth and I Must Scream";
			desc = "Myślę, że AM-owi przydałyby się zajęcia z radzenia sobie z gniewem, serio.";
		break;
		case 'bajo':
			title = "— Bajo jajo, bajo jajo!";
			desc = "— Bajo jajo ty chuju jebany, na inowrocławskiej jesteś, ja ci zaraz dam bajo jajo kurwa. Zaraz cię ściągnę i ci chuju do dupy dokopie, bajo jajo pierdolone. ";
		break;
		case 'bishop':
			title = "Obcy";
			desc = "Jedyne czego nauczyły mnie te filmy, to żeby nie stawać w obronie ludzi";
		break;
		case 'szachy':
			title = "DeepBlue";
			desc = "Z Kasprowem sobie poradziłem, to i ciebie rozwalę.";
		break;
	}

	msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
  			    		.setTitle(title)
  			    		.setDescription(desc));
};

module.exports = fun;