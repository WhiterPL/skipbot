var numToEmote = new function(num) {
  var emotes = [
    ":one:",
    ":two:",
    ":three:",
    ":four:",
    ":five:",
    ":six:",
    ":seven:",
    ":eight:",
    ":nine:",
    ":zero:",
  ];
  
  return emotes[num-1];
}


module.exports = numToEmote;
