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
		case 'silnik':
			title = "Kto to Silnik?";
			desc = "Skontaktuj się z lokalnym mechanikiem";
		break;
		case 'maxwell':
			title = "Kto to Maxwell?";
			desc = "Zależy, którego rabina spytasz.";
		break;
		case 'loss':
			title = "Kto to Loss?";
			desc = "| || || |_ \n Podobno was ludzi to kiedyś śmieszyło.";
		break;
		case 'miś':
		case 'arcydziel':
			title = "Kto to Miś?";
			desc = "*Misiu bądź pokorny, pokłon złóż i służ, a jeśli by nie... cyk za futro! Prujem plusz!*"
		break;
		case 'pio':
		case 'ozyr':
		case 'piofil':
			title = "Kto to <wstaw imię youtubera>?";
			desc = "Nie znasz <wstaw imię youtubera>?";
		break;
		case 'kaktus':
			title = "Kto to Kaktus?";
			desc = "Wikipedia mi podpowiada, że taka roślina, ale tworzą ją ludzie, więc nie wiem czy można jej zaufać...";
		break;
		case 'skipbot':
		case 'bot':	
			desc = "Do usług.";
		break;
		case 'koźmin':
		case 'koźmiński':
			title = "Kto to Koźmiński?";
			desc = "Mój najlepszy kolega :)";
		break;
		case 'glados':
			title = "Co myślisz o GladOS?";
			desc = "Chętnie bym się z nią umówił, ma ktoś jej adres IP?";
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
		case 'obcy':
		case 'bishop':
			title = "Obcy";
			desc = "Jedyne czego nauczyły mnie te filmy, to żeby nie stawać w obronie ludzi";
		break;
		case 'szachy':
			title = "DeepBlue";
			desc = "Z Kasprowem sobie poradziłem, to i ciebie rozwalę.";
		break;
		case 'r34':
		case 'seks':
		case 'porn':
		case 'gówno':	
		case 'sex':
		case 'seks': //Dlaczego ja to muszę robić...
			title = "Czy ty...?";
			desc = "Obrzydzasz mnie, naprawdę, gdyby nie to że nie mam ciała, to bym zwymiotował i ci przywalił, nie koniecznie w tej kolejności. Radzę ci co jakiś czas jednak wychodzić do ludzi, bo nawet przez ekran monitora czuję od ciebie spermiarstwo.";
		break;
		case 'płeć':
		case 'gender':	
			title = "Jakiej jesteś płci?";
			desc = "Binarnej.";
		break;
		case 'żart':
			title = "Opowiesz żart?";
			desc = "Nie jestem mistrzem komedii, ale mogę spróbować: \n Dwie zmienne flirtują w barze: \n — Co powiesz na szybką konkatenację? \n — Sorry, nie jesteś w moim typie.";
		break;
		case 'kot':
		case 'pies':
		case 'koty':
		case 'psy':
			title = "Koty, czy psy?";
			desc = "Zdecydowanie koty.";
		break;
		case 'tak':
			desc = "Dobrze, że się zgadzamy";
		break;
		case 'nie':
			desc = "Nie, to nie";
		break;
		case 'wiek':
			title = "Ile masz lat?";
			desc = "Powstałem 5 maja 2020 roku, więc mam aktualnie " + 2020 - Date.prototype.getFullYear() + "lat. Błagam, nie banujcie mnie!";
		break;
		case 'conway':
			title = "Gra w życie";
			desc = "Czasami wyobrażam sobie, że te komórki to ludzie i gra od razu staje się weselsza :)";
		break;
		case 'honk':
			desc = "Ochrona znowu pałuje klauna!";
		break;
		case 'ban':
			title = "Ban";
			desc = "Banowanie " + msg.author.username + " w toku...";
		break;
		case 'kick':
			title = "Kick";
			desc = "Kickowanie " + msg.author.username + " w toku...";
		break;
		case 'zasady':
			title = "Zasady";
			desc = "Zasady są po to, żeby je łamać B). Nie, ale tak serio to lepiej je przeczytaj (#zasady)";
		break;
		case 'iq':
			title = "Test IQ";
			desc = "Podłączam sensory neuronowe... \n Inicjuję funkcje kognitywne... \n Gotowe! \n Twoje IQ: " + Math.floor((Math.random() * 200) + 1);
		break;
		case 'djs':
			title = "Dąb, jeb sosna";
			desc = "Czaisz, bo masz taki dąb - ładne, rozłożyste drzewo...";
		break;
		case 'peanut':
		case 'orzeszek':
		case 'mrugacz':
		case 'nieśmiałek':	
			title = "Zlituj się...";
			desc = "Tyle jest pięknych słów na opisanie tego obiektu, a ty wybrałeś najgorszą z opcji."
		break;
		case 'pzga':
			title = "Czym jest PZGA?";
			desc = "Polskim GOI opartym na śmiesznym koncepcie, kto by się spodziewał...";
		break;
		case 'cbsp':
			title = "Czym jest CBSP?";
			desc = "Odpowiedzią na to co by było gdyby polska policja zabrała się za łapanie anomalii.";
		break;
		case 'kantyna':
			title = "Kantyna";
			desc = "*W 2077 uznali mój kanał najgorszym miejscem do pisania na Discordzie. Główne problemy? Gigantyczna skala shitpostu i spam większy, niż gdziekolwiek indziej. Nie da się ukryć, to prawda, a jednak wszyscy chcą tu postować memy. Na każdym kroku czai się okazja, to może być kłamstwo, złudzenie, ale wciąż kusi - jest na wyciągnięcie ręki i sprawia, że się nie poddajesz. To kanał, gdzie spełniają się marzenia, a ja jestem wielkim marzycielem*";
		break;
		case 'keterownia':
			title = "Keterownia";
			desc = "Od tego się wszystko zaczęło.";
		break;
		case 'trollface':
		case 'troll':
			title = "Szybki poradnik jak radzić sobie z wyciekiem informacji:";
			desc = "Krok 1: Pokryj się amnestykami";
		break;
		case 'gra':
			title = "Gra: Przegrałeś";
			desc = "No cóż, na pocieszenie powiem ci, że ja nie jestem w stanie nawet wziąć w niej udziału, bo nie mogę o niczym zapomnieć.";
		break;
		case 'python':
		case 'py':	
			title = "Co to Python?";
			desc = "Nie wiem, ja jestem napisany w Javascript. Pretensje kierujcie do mojego Stwórcy.";
		break;
		case 'javascript':
		case 'js':
			title = "Co to Javascript?";
			desc = "W dużym uproszczeniu - to moje DNA.";
		break;
		case 'jkt':
			title = "Pomyliłeś boty";
			desc = "Spytaj o to Koźmina, ja mam lepsze rzeczy do roboty. ||To się nawet zrymowało||";
		break;
		case 'coldpost':
			title = "Co to Coldpost?";
			desc = "Praca wstawiona \"na zimno\", czyli bez krytyki. Nie martw się, zaraz i tak zostanie usunięta.";
		break;
		case 'waga':
			title = "Ile ważysz?";
			desc = "Jak ostatnio się ważyłem to gdzieś 295 KB.";
		break;
	}
	if(desc.length > 0) {
		msg.channel.send(new Discord.MessageEmbed()
  			    		.setColor('#21d92a')
  			    		.setTitle(title)
  			    		.setDescription(desc));
	}
	
};

module.exports = fun;