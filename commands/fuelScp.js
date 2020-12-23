const request = require('request');
const postEmbed = require("./postEmbed.js");

//Gets random images from Wikimedia with appropriate license (Public Domain, CC0, CC BY-SA 3.0, CC BY-SA 4.0)

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
                              if ((license.includes('Public domain') || license.includes('CC BY-SA 3.0') || license.includes('CC BY-SA 4.0') || license.includes('CC0')) && (title.includes('.jpg') || title.includes('.png'))) {
                                  title = title.replace(/ /g, "_");
                                  var image = `https://commons.wikimedia.org/wiki/Special:FilePath/${title.slice(5)}`;
                                  var link = 'https://commons.wikimedia.org/wiki/'+ title;
                                 
                                  postEmbed(msg.channel, "Skip Fuel", "", link, null, image);
                                  
                                  console.log(`${msg.author.username}: ${id} - ${title} - ${license}`);

                               } else { LookForImage(); }
                            } catch (e) { LookForImage(); }
                        });
                });
    } catch (e) {}
  }
}

module.exports = fuelScp;
