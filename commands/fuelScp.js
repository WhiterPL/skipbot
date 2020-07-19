const Discord = require('discord.js');
const request = require('request');

var fuelScp = function(msg, args) {
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
                               var img = await `https://commons.wikimedia.org/wiki/Special:FilePath/${title.slice(5)}`;
                               if ((license.includes('Public domain') || license.includes('CC BY-SA 3.0') || license.includes('CC BY-SA 4.0') || license.includes('CC0')) && (title.includes('.jpg') || title.includes('.png'))) {
                                 console.log(img);  
                                 title = title.replace(/ /g, "_");
                                       msg.channel.send(new Discord.MessageEmbed()
                                           .setColor('#21d92a')
                                           .setTitle('Skip Fuel')
                                           .setURL('https://commons.wikimedia.org/wiki/'+ title)
                                           .setImage(img));
                                       console.log(`${msg.author.username}: ${id} - ${title} - ${license}`);
                               } else { LookForImage(); }
                            } catch (e) { LookForImage(); }
                        });
                });
    } catch (e) {}
  }
}

module.exports = fuelScp;
