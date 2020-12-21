//Used to fix issues with Google search

var replaceChars = function replaceChars(a) {
  a = a.replace(/a/g, 'a').replace(/ć/g, 'c').replace(/ż/g, 'z').replace(/ź/g, 'z').replace(/ł/g, 'l').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ę/g, 'e').replace(/ń/g, 'n');
  return a;
};

module.exports = replaceChars;
