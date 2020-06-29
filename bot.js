const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const http = require("http");
const express = require("express");
const app = express();

var google = process.env.GOOGLE;
var googlen = process.env.GOOGLEN;
var token = process.env.TOKEN;

function addZeros(s) { if (s.length < 3) { do { s = `0${s}`; } while(s.length < 3); } return s; }
function replaceChars(a) { a = a.replace(/a/g, 'a').replace(/ć/g, 'c').replace(/ż/g, 'z').replace(/ź/g, 'z').replace(/ł/g, 'l').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ę/g, 'e').replace(/ń/g, 'n'); return a; }

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!pomoc");
});

client.on('message', msg => {
  if (msg.author.bot){return;}
	
	var args;
    if (msg.author.bot || !msg.content.startsWith('!')){return;}

	  var args;
      if (msg.content.includes(" ")) { args = msg.content.split(" "); }
	    else { args = [msg.content]; }
  
	  args[0] = args[0].toLowerCase().slice(1);

		switch(args[0]) {
			
			//////// HELP ////////
			case 'pomoc':
        try {
          console.log(`${msg.author.username}: Pomoc`);
        } catch (e) {
          console.log("Error " + e);
        }
        finally {
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
        }
				break;
      //////// SEARCH SCP ////////
			case 'scp':
				var link;
				var title;
				
				if (args.length == 2) {
					link = 'http://scp-wiki.net';
					title = 'SCP-';
					args[1] = args[1].toLowerCase();
					
					// ANG WIKI
					if(args[1].startsWith('o')) {
						args[1] = args[1].slice(1);
						link += '/scp-';
					}
					// PL WIKI
					else if (args[1].startsWith('pl')) {
						args[1] = args[1].slice(2);
						link += '.pl/scp-pl-';
						title += 'PL-';
					}
					else {
						link += '.pl/scp-';
					}
					
					//JOKE
					if (args[1].endsWith("j")) {
						args[1] = args[1].slice(0,-1);
						if(isNaN(args[1]) || args[1] < 0 || args[1].includes("+")) {return;}
						args[1] = addZeros(args[1]);
						link += args[1] + '-j';
						title += args[1] + '-J';
					}
					//EXPLAINED
					else if (args[1].endsWith("ex")) {
						args[1] = args[1].slice(0,-2);
						if(isNaN(args[1]) || args[1] < 0 || args[1].includes("+")) {return;}
						args[1] = addZeros(args[1]);
						link += args[1] + '-ex';
						title += args[1] + '-EX';
					}
					else {
						if(isNaN(args[1]) || args[1] < 0 || args[1].includes("+")) {return;}
						args[1] = addZeros(args[1]);
						link += args[1];
						title += args[1];
					}
					
					try {
						msg.channel.send(new Discord.MessageEmbed()
							.setColor('#21d92a')
							.setTitle(title)
							.setURL(link));
						
					} catch (e) {
						console.log("Error " + e);
					}
					finally {
						console.log(`${msg.author.username}: ${args[1]}`);
					}
				}
				else if (args.length > 2) {
					var list = "";
					for (var i = 1; i <= args.length-1; i++) {
						link = 'http://scp-wiki.net';
						title = 'SCP-';
						args[i] = args[i].toLowerCase();
					
						// ANG WIKI
						if(args[i].startsWith('o')) {
							args[i] = args[i].slice(1);
							link += '/scp-';
						}
						// PL WIKI
						else if (args[i].startsWith('pl')) {
							args[i] = args[i].slice(2);
							link += '.pl/scp-pl-';
							title += 'PL-';
						}
						else {
							link += '.pl/scp-';
						}
						
						//JOKE
						if (args[i].endsWith("j")) {
							args[i] = args[i].slice(0,-1);
							if(isNaN(args[i]) || args[i] < 0 || args[i].includes("+")) {return;}
							args[i] = addZeros(args[i]);
							link += args[i] + '-j';
							title += args[i] + '-J';
						}
						//EXPLAINED
						else if (args[i].endsWith("ex")) {
							args[i] = args[i].slice(0,-2);
							if(isNaN(args[i]) || args[i] < 0 || args[i].includes("+")) {return;}
							args[i] = addZeros(args[i]);
							link += args[i] + '-ex';
							title += args[i] + '-EX';
						}
						else {
							if(isNaN(args[i]) || args[i] < 0 || args[i].includes("+")) {return;}
							args[i] = addZeros(args[i]);
							link += args[i];
							title += args[i];
						}
						
						list += "[" + title + "](" + link + ") \n";
						console.log(`${msg.author.username}: ${args[i]}`);
					}
					try {
						msg.channel.send(new Discord.MessageEmbed()
							.setColor('#21d92a')
							.setTitle('Lista SCP')
							.setDescription(list));
						
					} catch (e) {
						console.log("Error " + e);
					}
					
				}
				
        break;
        
        ////// TAG //////
			case 'tag':
				if (args.length == 2) {
					msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle(args[1])
                    	.setURL(`http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}`));
				}
				else if (args.length > 2) {
					var list = "";
					for (var i = 1; i <= args.length-1; i++) {
						list += `[${args[i]}](http://scp-wiki.net.pl/system:page-tags/tag/${args[1]}) \n`;
					}
					msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle('Tagi')
                    	.setDescription(list));
				}
				
				break;
        
      //////// RANDOM SCP ////////
			case 'rand':
			if (args.length == 1) {
				msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle('Random Skip')
                    	.setURL('http://scp-wiki.net.pl/random:random-scp'));
			}
			else {
				args[1] = args[1].trim().toLowerCase();
			    switch(args[1]) {
			        case 'pl':
			        var rand = Math.floor((Math.random()*200)+1).toString();
                    rand = addZeros(rand);
                    msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle('SCP-PL-'+ rand)
                    	.setURL('http://scp-wiki.net.pl/scp-pl-' + rand));
			        break;
			        case 'ang':
                    var rand = Math.floor((Math.random()*6000)+1).toString();
                    rand = addZeros(rand);
                    msg.channel.send(new Discord.MessageEmbed()
                    	.setColor('#21d92a')
                    	.setTitle('SCP-'+ rand)
                    	.setURL('http://scp-wiki.net.pl/scp-' + rand));
			        break;
			    }
			}
                break;
        //////// SEARCH ON WIKI ////////
			case 'wiki':
        if (args.length > 2) for (var i = 2; i <= args.length-1; i++) {
					args[1] = `${args[1]} ${args[i]}`;
				}
        
			    try {
			        request({
                                    url: `https://www.googleapis.com/customsearch/v1?key=${google}&cx=${googlen}&q=${replaceChars(args[1])}`,
                                    json: true
                			    }, async function (error, response, body) {

										if (!error && response.statusCode === 200) {
                      try {
                        var link  = await body.items[0].link;
                        var desc  = await body.items[0].snippet;
                        var title = await body.items[0].title;

                        msg.channel.send(new Discord.MessageEmbed()
                        	.setColor('#21d92a')
                        	.setTitle(title)
                        	.setURL(link)
                        	.setDescription(desc));
                        	console.log(`${msg.author.username}: ${args[1]}`);
                      } catch (e) {
                        msg.channel.send(new Discord.MessageEmbed()
                                         	.setColor('#21d92a')
                                         	.setTitle(args[1])
                                         	.setURL(`http://scp-wiki.net.pl/search:site/a/p/q/${args[1]}`)
                                         	.setDescription(`Wyszukania dla strony: ${args[1]}`));
                        console.log(`${msg.author.username}: ${args[1]} ${response.statusCode}`);
                      }          
                                     }
									else {
										msg.channel.send(new Discord.MessageEmbed()
                                     .setColor('#21d92a')
                                     .setTitle(args[1])
                                     .setURL(`http://scp-wiki.net.pl/search:site/a/p/q/${args[1]}`)
                                     .setDescription(`Wyszukania dla strony: ${args[1]}`));
                   console.log(`${msg.author.username}: ${args[1]} ${response.statusCode}`);
									 }
                                 });
			    } catch (e) {
			    console.log(`Błąd podczas wyszukiwania frazy: ${args[1]}`);
			    }
				break;
        
      //////// SKIP FUEL ////////
			case 'scpfuel':
			    LookForImage();
			    function LookForImage() {
            try {
            	 request({
            	     url: 'https://commons.wikimedia.org/w/api.php?action=query&list=random|allimages&prop=imageinfo&iiprop=extmetadata&format=json',
            	     json: true
            	     }, async function (error, response, randImage) {
                        var id = await randImage.query.random[0].id;
                            request({
                                 url: 'https://commons.wikimedia.org/w/api.php?action=query&pageids='+ id +'&prop=imageinfo&iiprop=extmetadata&format=json',
                                 json: true
                                 }, async function (error, response, checkImage) {
                                    try {
                                       var license = await checkImage.query.pages[id].imageinfo[0].extmetadata.LicenseShortName.value;
                                       var title = await checkImage.query.pages[id].title;
                                       if ((license.includes('Public domain') || license.includes('CC BY-SA 3.0') || license.includes('CC BY-SA 4.0') || license.includes('CC0')) && (title.includes('.jpg') || title.includes('.png'))) {
                                               title = title.replace(/ /g, "_");
                                               msg.channel.send(new Discord.MessageEmbed()
                                                   .setColor('#21d92a')
                                                   .setTitle('Skip Fuel')
                                                   .setURL('https://commons.wikimedia.org/wiki/'+ title));
                                               console.log(`${msg.author.username}: ${id} - ${title} - ${license}`);
                                       } else { LookForImage(); }
                                    } catch (e) { LookForImage(); }
                                });
                        });
            } catch (e) {}
			    }
			    break;
    }
});

client.login(token);
