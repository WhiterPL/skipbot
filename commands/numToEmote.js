var numToEmote = new function(num) {
  var emotes = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "0️⃣",
  ];
  
  return emotes[num-1];
}


module.exports = numToEmote;
