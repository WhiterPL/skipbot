var addZeros = function(s) {
  if (s.length < 3) {
    do { 
      s = `0${s}`; 
      } while(s.length < 3);
  } 
  return s;
};

exports.data = addZeros;
